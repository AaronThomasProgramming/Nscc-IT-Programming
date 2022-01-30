//
// Created by 98adt on 2021-02-08.
//
#include <iostream>
#include <fstream>
#include <bits/stdc++.h>
#include <string>
#ifndef ASSIGNMENT1_LINEEDIT_H
#define ASSIGNMENT1_LINEEDIT_H

#endif //ASSIGNMENT1_LINEEDIT_H
using namespace std;

class LinkedListNode {
public:
    string Data;               // the Data to store
    LinkedListNode* NextNode;   // a pointer to the NextNode node in the chain

    LinkedListNode();
};

class LinkedList {
private:
    //start at beginning of list
    LinkedListNode* start;

public:
    LinkedList();
    virtual ~LinkedList();
    //insert node at front of linked list
    void Add(string data);
    //delete node at specified range of lines reuse for list line
    void Delete(int data = 0, int length = 0);
    // insert range of Data before "before" value
    void Insert(string data, int before);
    //menu function
    void LineEdit(string ArgvFileName, string parameterInput);
    //output link list
    friend ostream& operator<<(ostream& output, LinkedList& list);
    //function to get number of nodes in Linked List
    int LinkListCount();
    //function to print range of lines in linked list
    void ListLines(int data = 0, int length = 0);
    //function to write linked list nodes to file
    void WriteListToFile(string FileName);
    //print current line number
    void GlobalLine();

};
//read from file and edit linked list
void StartMain(string basicString);