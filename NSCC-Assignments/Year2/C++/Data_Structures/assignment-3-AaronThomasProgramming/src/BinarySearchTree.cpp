//
// Created by 98adt on 2021-04-06.
//
#include <iostream>
#include <random>
#include <string>
#include <vector>
#include <iomanip>
#include <cstdio>
#include <cstring>
#include <algorithm>
#include <cctype>
#include "BinarySearchTree.h"
//BST class nodes
#define linelen 1024
using namespace std;

     vector<string> BinarySearchTree::readFromTxt(const string& dictionary) {
        //extracting words from the dictionary file and insert into a vector
        ifstream book("../tests/"+dictionary);
        string word;
        vector<string> list;
        if (!book.is_open()) {
            cout << "Unable to open file";
            exit(1);
        }
        while (book >> word) {
            list.emplace_back(word); //store dictionary into a vector
            //https://www.techiedelight.com/shuffle-vector-cpp/
            shuffle(list.begin(), list.end(), std::mt19937(std::random_device()())); //shuffle vector
        }
        return list;
    }
    //inserting node into binary search tree
    BinarySearchTree * BinarySearchTree::InsertNode(BinarySearchTree* root, string data) {
        //new word insert into bst
        if (root == nullptr) {
            BinarySearchTree* newNode = new BinarySearchTree();
            newNode->data = data;
            newNode->left = nullptr;
            newNode->right = nullptr;
            return newNode;
        }
        //the string already exists no dupes allowed
        if (data == root->data) {
            return root;
        }
            //insert bst in alphabetical order
        else if (root->data > data) {
            root->left = InsertNode(root->left, data);
        }
        else if (root->data < data) {
            root->right = InsertNode(root->right, data);
        }
        return root;
    }

    // print bst nodes recursively
    void BinarySearchTree::InPreorder(BinarySearchTree* root) {
        if (root == nullptr)
            return;
        cout  << root->data << "\n";
        InPreorder(root->left);
        InPreorder(root->right);
    }

    void BinarySearchTree::Search(BinarySearchTree* root, string data) {
        //if word cant be found in the dictionary its incorrect
        if (root == nullptr){
            cout << data << endl;
            return;
        }
        else if (root->data > data){
            return Search(root->left, data);
        }
        else if (root->data < data){
            return Search(root->right, data);
        }
    }

    //print out binary tree recursively
    //https://stackoverflow.com/questions/13484943/print-a-binary-tree-in-a-pretty-way
    void BinarySearchTree::postorder(BinarySearchTree* p, int indent, ofstream& file) {
        //print to screen and write output to file
        if(p != nullptr) {
            if(p->right) {
                postorder(p->right, indent+4, file);
            }
            if (indent) {
                cout << setw(indent) << ' ';
                file << setw(indent) << ' ';
            }
            if (p->right) {
                cout << " /\n" << setw(indent) << ' ';
                file << " /\n" << setw(indent) << ' ';
            }
            cout<< p->data << "\n ";
            file<< p->data << "\n ";
            if(p->left) {
                cout << setw(indent) << ' ' <<" \\\n";
                file << setw(indent) << ' ' <<" \\\n";
                postorder(p->left, indent+4, file);
            }
        }
    }

    void BinarySearchTree::spellCheckFile(BinarySearchTree *root, char strFile[80]) {
        //start spell checking
        char str[linelen];
        int valid = 0;
        //remove numbers and special characters from txt
        char delims[] = ("1234567890~!@#$%^&*()-_=+[]{}\\|;:\'\",.<>/?\n\r\t ");
        //open file to spell check
        FILE *scfp;
        while(!valid) {
            scfp = fopen(strFile, "r");
            if(scfp == nullptr) {
                printf("sorry, could not find that file!\n");
                break;
            }
            else {
                valid = 1;
            }
        }
        cout << "----------------------------" << endl;
        cout << "The following words were not recognized: \n" << endl;
        cout << "----------------------------" << endl;

        //start spell checking
        for(int i = 1; !feof(scfp); i++) {
            // start my spellchecking algorithm here
            fgets(str, linelen, scfp);
            //remove numbers and special characters from txt
            char *token;
            token = strtok(str, delims);

            while( token != nullptr ) {
                string fileSting(token);
                // convert string to lower case
                //https://thispointer.com/converting-a-string-to-upper-lower-case-in-c-using-stl-boost-library/#:~:text=Convert%20a%20String%20to%20Lower%20Case%20using%20STL.,and%20call%20%3A%3Atolower%28%29%20function%20each%20of%20them%20i.e.
                std::for_each(fileSting.begin(), fileSting.end(), [](char & c) {
                    c = ::tolower(c);
                });
                //check if words are in dictionary
                root->Search(root, fileSting);
                token = strtok( nullptr, delims );
            }
        }
    }

    void BinarySearchTree::bstToFile(BinarySearchTree * root){
        //file name is date time
        time_t t = time(0);   // get time now
        struct tm * now = localtime( & t );
        char buffer [80];
        strftime (buffer,80,"%Y-%m-%d-%H-%M-%S",now);
        string buf = buffer;
        //create solution file in solved folder
        string path = "../output/"+buf+".txt";
        ofstream myFile(path);
        //print tree on screen and in folder
        cout << "----------------------------" << endl;
        cout << "BST Output" << endl;
        cout << "----------------------------" << endl;
        root->postorder(root, 0, myFile);
        myFile.close();
    }
    //call all functions
    void BinarySearchTree::mainFunction(char * readFile, char * dictionary){
        BinarySearchTree* root = nullptr;
        //spell check file corrupted convert (char *) to (string) and back to (char)
        // to avoid corrupted characters in file path
        //example of bad file path: ▒P▒▒../docs/mispelled.txt
        char strFile[80];
        string fileChar(readFile);
        string directoryPath = "../tests/";
        string filePath = directoryPath + fileChar;

        //concat char for file to spell check
        https://www.cplusplus.com/reference/cstring/strcat/
        strcpy(strFile, filePath.c_str());
        //store dictionary txt file in vector
        vector<string> test;
        string dictionaryChar(dictionary);
        test = root->readFromTxt(dictionaryChar);
        //loop through vector and insert contents to bst
        for (int i = 0; i < test.size(); i++) {
            string str1 = test[i];
            root = root->InsertNode(root, str1);
        }
        cout << "----------------------------" << endl;
        cout << "List of words in BST: \n" << endl;
        cout << "----------------------------" << endl;
        //display list in order
        root->InPreorder(root);
        //spell check file
        spellCheckFile(root, strFile);
        //print bst and write it to file
        bstToFile(root);
    }
