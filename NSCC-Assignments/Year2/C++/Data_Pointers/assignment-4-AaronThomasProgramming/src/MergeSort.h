//
// Created by 98adt on 2021-04-20.
//

#ifndef ASSIGNMENT4_MERGESORT_H
#define ASSIGNMENT4_MERGESORT_H

#endif //ASSIGNMENT4_MERGESORT_H

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

using namespace std;

class MergeArray
{
public:
void MergeSortA(int low , int high, int orderBy, int id, int age, int department, int rate);
void MergeA(int low , int mid , int high, int orderBy, int id, int age, int department, int rate);
void callMerge(int orderBy, int id, int age, int department, int rate, string sortType, ofstream& file);
void readFile(string fileName);
void printFile(ofstream& file);
void sortAll(char* fileName);
bool isNumber(string s);
};
//bool isNumber(string s);