//
// Created by 98adt on 2021-02-08.
//

#include <iostream>
#include <fstream>
#include <string>
#include "LineEdit.h"
using namespace std;

//keep track of the current line throughout the program
int globalCurrentLine = 0;

LinkedListNode::LinkedListNode() : Data(), NextNode(nullptr) {}

LinkedList::LinkedList() : start(nullptr) {
}

LinkedList::~LinkedList() {
    LinkedListNode *node = start;

    while (node != nullptr) {
        LinkedListNode* temp = node;
        node = node->NextNode;
        delete temp;
    }
}

//insert node at front of linked list
void LinkedList::Add(string data) {

    LinkedListNode* newNode = new LinkedListNode();

    newNode->Data = data;

    if (start == nullptr) {
        start = newNode;
    } else {
        LinkedListNode* node = start;
        LinkedListNode* prev = nullptr;

        // go through each node until a null ptr is hit
        while (node != nullptr) {
            prev = node;
            node = node->NextNode;
        }
        // attach new node to end of chain
        if (prev != nullptr) {
            prev->NextNode = newNode;
        }
    }
}

//delete node at specified range of lines reuse for list line
void LinkedList::Delete(int data, int length) {
    int currentLine = 0;
    //final node to be deleted
    int endLine = (length - data) + 1;
    if(endLine < 0){
        endLine = 1;
    }
    if(data <= 0){
        data = 0;
    }
    // delete nodes from the start line to end line
    while (currentLine != endLine) {
        LinkedListNode *node = start;
        LinkedListNode *prev = nullptr;
        int currentNode = 0;
        // find node to delete
        while (node != nullptr) {
            if (currentNode == data) {
                break;
            }
            currentNode++;
            prev = node;
            node = node->NextNode;
        }
        // found node to delete
        if (node != nullptr) {
            if (prev == nullptr) {
                // we're deleting the first node
                start = node->NextNode;
            } else {
                // any other node is deleted
                prev->NextNode = node->NextNode;
            }
            delete node;
        }
        currentLine++;
    }
}

// insert range of Data before "before" value
void LinkedList::Insert(string data, int before) {
    int currentNode = 0;
    LinkedListNode* newNode = new LinkedListNode();
    newNode->Data = data;

    LinkedListNode* node = start;
    LinkedListNode* prev = nullptr;

    // find node to insert before "before" value
    while (node != nullptr) {
        if (currentNode == before) {
            break;
        }
        currentNode++;
        prev = node;
        node = node->NextNode;
    }

    // found the node, so insert
    if (node != nullptr) {
        if (prev == nullptr) {
            // inserting at the start of the chain
            newNode->NextNode = start;
            start = newNode;
        } else {
            // inserting in the middle of the chain
            newNode->NextNode = prev->NextNode;
            prev->NextNode = newNode;
        }
    }
}

//function to get number of nodes in Linked List
int LinkedList::LinkListCount(){
    LinkedListNode *node = start;
    int nodeCounter = 0;
    //count number of nodes in linked list
    while (node != nullptr) {
        nodeCounter++;
        node = node->NextNode;
    }
    return nodeCounter;
}

//function to print range of lines in linked list
void LinkedList::ListLines(int data, int length) {
    LinkedListNode *node = start;
    int startLine = 0;
    int endLine = 1;
    while (node != nullptr) {
        //print range of lines from start to end
        if(startLine >= data && startLine <= length) {
            cout << endLine << "> " << node->Data << endl;
        }
        startLine++;
        endLine++;
        node = node->NextNode;
    }
}

//function to write linked list nodes to file
void LinkedList::WriteListToFile(string FileName) {
    string file = FileName;
    fstream writeFile;
    writeFile.open(file);
    LinkedListNode *node = start;
    // go through each node & write it to the file
    while (node != nullptr) {
        writeFile << node->Data << endl;
        node = node->NextNode;
    }
    writeFile.close();
}

void LinkedList::GlobalLine() {
    cout << globalCurrentLine << "> ";
}

ostream& operator<<(ostream& output, LinkedList& list) {

    LinkedListNode* node = list.start;

    while (node != nullptr) {
        output << node->Data << endl;

        node = node->NextNode;
    }

    return output;
}

//menu function
void LinkedList::LineEdit(string ArgvFileName, string parameterInput)
{
    string parameterArray[100];
    stringstream splitString(parameterInput);
    string parameters;
    string InsertString;

    int FirstParameter;
    int SecondParameter;
    int ParamNum1;
    int ParamNum2;
    int linkListCount = LinkListCount();
    int parameterCounter = 0;

    // split string using string stream and store the parameters into an array
    while (splitString >> parameters){
        parameterArray[parameterCounter] = parameters;
        parameterCounter++;
    }
    try {
        //list function
        if (parameterArray[0] == "l" || parameterArray[0] == "L") {
            //if no parameters list all lines
            if (parameterCounter == 1) {
                globalCurrentLine = linkListCount + 1;
                ListLines(0, linkListCount);

            }
                //if one parameter list specific line
            else if (parameterCounter == 2) {
                ParamNum1 = stoi(parameterArray[1]);
                FirstParameter = ParamNum1 - 1;
                globalCurrentLine = ParamNum1 + 1;
                ListLines(FirstParameter, FirstParameter);
            }
                //if two parameters list range of lines
            else if (parameterCounter == 3) {
                ParamNum1 = stoi(parameterArray[1]);
                ParamNum2 = stoi(parameterArray[2]);
                FirstParameter = ParamNum1 - 1;
                globalCurrentLine = ParamNum2 + 1;
                SecondParameter = ParamNum2 - 1;
                ListLines(FirstParameter, SecondParameter);
            }
        }
            //delete function
        else if (parameterArray[0] == "d" || parameterArray[0] == "D") {
            //if no parameters delete current line
            if (parameterCounter == 1) {
                Delete(globalCurrentLine - 1, globalCurrentLine - 1);
            }
                //if one parameter delete selected lines
            else if (parameterCounter == 2) {
                FirstParameter = stoi(parameterArray[1]) - 1;
                globalCurrentLine = stoi(parameterArray[1]);
                Delete(FirstParameter, FirstParameter);
            }
                //if two parameters delete range of selected lines
            else if (parameterCounter == 3) {
                FirstParameter = stoi(parameterArray[1]) - 1;
                SecondParameter = stoi(parameterArray[2]) - 1;
                globalCurrentLine = stoi(parameterArray[2]);
                Delete(FirstParameter, SecondParameter);
            }
        }
            //insert function
        else if (parameterArray[0] == "i" || parameterArray[0] == "I") {
            //if no parameters insert text before the current line
            if (parameterCounter == 1) {
                //insert nodes until "/" is pressed to break out of loop
                while (InsertString != "/") {
                    GlobalLine();
                    getline(cin, InsertString);
                    if (InsertString != "/") {
                        Insert(InsertString, globalCurrentLine - 1);
                        globalCurrentLine++;
                    }
                }
            }
                //if one parameter insert text before a specific line
            else if (parameterCounter == 2) {
                FirstParameter = stoi(parameterArray[1]) - 1;
                globalCurrentLine = stoi(parameterArray[1]);
                GlobalLine();
                //insert nodes until "/" is pressed to break out of loop
                while (InsertString != "/") {
                    getline(cin, InsertString);
                    if (InsertString != "/") {
                        Insert(InsertString, FirstParameter);
                        FirstParameter++;
                        globalCurrentLine++;
                        GlobalLine();
                    }
                }
            }
        }
            //Edit/Exit function save and quit
        else if (parameterArray[0] == "e" || parameterArray[0] == "E") {
            //if no parameters insert text before the current line
            globalCurrentLine++;
            WriteListToFile(ArgvFileName);
            //quit program
            exit(0);


        } else {
            //add input to link list
            Add(parameterInput);
            //increment current line twice to offset de-increment at the end of the function
            globalCurrentLine++;
            globalCurrentLine++;
        }
        //de-increment to keep the line counter on track
        globalCurrentLine--;
        //catch all parameter errors
    } catch (...) {
        cout << "Invalid Parameter Try Again" << endl;
    }
}
//read from file and edit linked list
void StartMain(string ArgvName){

    LinkedList list;
    string filename;
    filename = ArgvName;
    string line;
    string inputSting;
    fstream appendFileToWorkWith;
    appendFileToWorkWith.open(filename);
    // If file does not exist, Create new file
    if (appendFileToWorkWith.fail())
    {
        cout << "Cannot open file, file does not exist. Creating new file.." << endl;
        appendFileToWorkWith.open(filename,  fstream::in | fstream::out | fstream::trunc);
        appendFileToWorkWith.close();
    }
        // use existing file if found
    else if(appendFileToWorkWith.is_open())
    {
        cout<<"success "<<filename <<" found. \n";
        //print out linked list with file contents
        int counter = 1;
        while (getline(appendFileToWorkWith, line)){
            cout << counter << "> " << line << endl;
            //fill up linked list with file contents
            list.Add(line);
            counter++;
        }
        appendFileToWorkWith.close();
    }
    cout << "Insert = i /Delete = d /List = l /End = e /Quit = q" << endl;
    globalCurrentLine = list.LinkListCount();
    while(true) {
        cout << globalCurrentLine + 1 << "> ";
        getline(cin, inputSting);
        //edit file
        if(inputSting != "e" || inputSting != "E"){
            list.LineEdit(filename, inputSting);
        }
        else if(inputSting == "e" || inputSting == "E"){
            break;
        }
    }
}
