//
// Created by 98adt on 2021-03-01.
//

#ifndef ASSIGNMENT_2_MAZESTACK_H
#define ASSIGNMENT_2_MAZESTACK_H

#endif //ASSIGNMENT_2_MAZESTACK_H
#include <iostream>
#include <limits>
#include <fstream>
#include<stdio.h>
#include<string.h>
#include "Node.h"

using namespace std;

class MazeStack {
private:
    Node* first;
    Node* last;

public:
    MazeStack();

    void Push(MazePosition pos);

    MazePosition Pop();

    //get previous row from last
    int PeekRow();
    //get previous col from last
    int PeekCol();

};

//prints maze solution.
void PrintMaze(char maze[][51], string mazeName);

void SolveMaze(string mazeName);