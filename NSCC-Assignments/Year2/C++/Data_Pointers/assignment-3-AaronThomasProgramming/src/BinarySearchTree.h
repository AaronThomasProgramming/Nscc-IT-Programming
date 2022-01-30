//
// Created by 98adt on 2021-04-06.
//

#ifndef ASSIGNMENT_3_BINARYSEARCHTREE_H
#define ASSIGNMENT_3_BINARYSEARCHTREE_H

#endif //ASSIGNMENT_3_BINARYSEARCHTREE_H
#include <iostream>
#include <random>
#include <string>
#include <vector>
#include <fstream>
#include <iomanip>
#include <cstdio>
#include <cstring>
#include <algorithm>
#include <cctype>
//BST class nodes
using namespace std;
class BinarySearchTree
{
private:
    string data;
    BinarySearchTree* left;
    BinarySearchTree* right;
public:
    vector<string> readFromTxt(const string& dictionary);
    BinarySearchTree * InsertNode(BinarySearchTree* root, string data);

    // print bst nodes recursively
    void InPreorder(BinarySearchTree* root);

    void Search(BinarySearchTree* root, string data);

    //print out binary tree recursively
    //https://stackoverflow.com/questions/13484943/print-a-binary-tree-in-a-pretty-way
    void postorder(BinarySearchTree* p, int indent, ofstream& file);

    void spellCheckFile(BinarySearchTree *root, char strFile[80]);

    void bstToFile(BinarySearchTree * root);
    //call all functions
    void mainFunction(char * readFile, char * dictionary);
};