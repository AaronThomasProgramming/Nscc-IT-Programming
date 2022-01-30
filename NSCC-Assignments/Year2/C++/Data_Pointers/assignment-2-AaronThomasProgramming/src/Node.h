//
// Created by 98adt on 2021-03-01.
//

#ifndef ASSIGNMENT_2_NODE_H
#define ASSIGNMENT_2_NODE_H

#endif //ASSIGNMENT_2_NODE_H
#include "MazePosition.h"

class Node {
public:
    MazePosition pos;
    Node* next;
    Node* prev;

    Node();
};