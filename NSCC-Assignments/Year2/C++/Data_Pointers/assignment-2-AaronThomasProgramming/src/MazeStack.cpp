//
// Created by 98adt on 2021-03-01.
//
#include <ctime>
#include "MazeStack.h"
MazeStack::MazeStack() : first(nullptr), last(nullptr) {}

void MazeStack::Push(MazePosition pos) {
    Node* node = new Node();
    node->pos = pos;
    node->prev = last;

    if (first == nullptr) {
        // add the first node
        first = node;
    } else {
        // add other node
        last->next = node;
    }

    last = node;
}

MazePosition MazeStack::Pop() {

    // have a node to pop
    if (first != nullptr) {

        Node* node = last;

        // the previous pointer is the new last node
        last = last->prev;

        // if there is still a node in the stack
        if (last != nullptr) {
            // set the new last node to point to null
            last->next = node->next;
        }

        // we are removing the only node in the stack
        if (node == first) {
            first = nullptr;
        }

        MazePosition temp = node->pos;

        delete node;

        return temp;
    }

    return MazePosition();
}

//get previous row from last
int MazeStack::PeekRow() {
    if (last != nullptr) {
        return last->pos.row;
    }
    return 0;
}
//get previous col from last
int MazeStack::PeekCol() {
    if (last != nullptr) {
        return last->pos.col;
    }
    return 0;
}


//prints maze solution
void PrintMaze(char maze[][51], string mazeName)
{
    //file name is date time
    time_t t = time(0);   // get time now
    struct tm * now = localtime( & t );
    char buffer [80];
    strftime (buffer,80,"%Y-%m-%d-%H-%M-%S",now);
    string buf = buffer;
    //create solution file in solved folder
    string path = "../solved/"+buf+".txt";
    ofstream myFile(path);
    //print maze on screen and in folder
    for (int i = 0; i <51; i++) {
        for (int j = 0; j < 51; j++) {
            cout << maze[i][j];

            myFile << maze[i][j];
        }
        cout<< "\n";
        myFile << "\n";
    }
    myFile.close();
}

void SolveMaze(string mazeName){
    MazeStack stack;
    Node node;
    //starting point
    node.pos.col = 1;
    node.pos.row = 1;

    ifstream file;
    int LineCounter = 0;

    char maze[51][51];

    string line;
    //open file add maze txt to maze 2d array
    file.open(mazeName);
    if(file.is_open()){
        while (getline(file, line)){
            strcpy(maze[LineCounter], line.c_str());
            LineCounter++;
        }
    }
    file.close();

    //maze starts at 1,1 exit is at 48,49
    while (true){
        //maze exit
        if (node.pos.col == 49 && node.pos.row == 49){
            maze[node.pos.row][node.pos.col] = 'W';
            break;
        }
            // checks east
        else if (maze[node.pos.row][node.pos.col + 1] == ' ') {
            stack.Push({node.pos.row, node.pos.col});
            maze[node.pos.row][node.pos.col] = 'x';
            node.pos.col++;
        }
            // checks south
        else if (maze[node.pos.row + 1][node.pos.col] == ' ') {
            stack.Push({node.pos.row, node.pos.col});
            maze[node.pos.row][node.pos.col] = 'x';
            node.pos.row++;
        }
            // checks west
        else if (maze[node.pos.row][node.pos.col - 1] == ' ') {
            stack.Push({node.pos.row, node.pos.col});
            maze[node.pos.row][node.pos.col] = 'x';
            node.pos.col--;
        }
            // checks north
        else if (maze[node.pos.row - 1][node.pos.col] == ' ') {
            stack.Push({node.pos.row, node.pos.col});
            maze[node.pos.row][node.pos.col] = 'x';
            node.pos.row--;
            // If we get, here, it means the path was a dead end
        } else{
            maze[node.pos.row][node.pos.col] = 'Z';
            //go to previous row and column
            node.pos.row = stack.PeekRow();
            node.pos.col = stack.PeekCol();
            stack.Pop();
        }
    }

    PrintMaze(maze, mazeName);
}