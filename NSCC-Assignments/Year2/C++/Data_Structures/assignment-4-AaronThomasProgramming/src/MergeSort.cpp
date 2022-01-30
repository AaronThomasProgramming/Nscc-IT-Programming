//
// Created by 98adt on 2021-04-20.
//

#include "MergeSort.h"

#include <iostream>
#include <string>
#include <cctype>
#include <locale>

using namespace std;
string currentArray[21][10];

void MergeArray::sortAll(char * fileName){
    //file name is date time
    time_t t = time(0);   // get time now
    struct tm * now = localtime( & t );
    char buffer [80];
    strftime (buffer,80,"%Y-%m-%d-%H-%M-%S",now);
    string buf = buffer;
    //create solution file in solved folder
    string path = "../output/"+buf+".txt";
    ofstream myFile(path);

    string fileChar(fileName);
    cout << "File Input" << endl;
    cout << "---------------" << endl;
    readFile(fileChar);
    cout << endl;
    //merge by id age department and rate
    callMerge(1,1, 3, 5, 7, "ID", myFile);
    callMerge(3,1, 3, 5, 7, "Age", myFile);
    callMerge(5,1, 3, 5, 7, "Department", myFile);
    callMerge(7,1, 3, 5, 7, "HourlyRate", myFile);
    myFile.close();
}
//sort array by order type and print and write output
void MergeArray::callMerge(int orderBy, int id, int age, int department, int rate, string sortType, ofstream& file){
    MergeSortA(0, 19, orderBy, id, age, department, rate);
    cout << "Sort by " << sortType << endl;
    cout << "---------------" << endl;
    file << "Sort by " << sortType << endl;
    file << "---------------" << endl;
    printFile(file);
    cout << endl;
    file << endl;
}
//print file out and write output to file
void MergeArray::printFile(ofstream& file){
    for (int i = 0; i != 21; ++i) {
        for (int j = 0; j != 10; ++j) {
            cout << currentArray[i][j] << " ";
            file << currentArray[i][j] << " ";
        }
        cout << endl;
        file << endl;
    }
}
//read employees txt to array
void MergeArray::readFile(string fileName){
    ifstream file ( "../docs/"+fileName);
    if (!file.is_open()) {
        exit(0);
    }
    for (int i{}; i != 21; ++i) {
        for (int j{}; j != 8; ++j) {
            file >> currentArray[i][j];
            cout << currentArray[i][j] << " ";
        }
        cout << endl;
    }
}
//sort and merge array
void MergeArray::MergeSortA(int low , int high, int orderBy, int id, int age, int department, int rate)
{
    int mid = 0;
    if(low < high)
    {
        mid = ((low+high)/2);
        MergeSortA(low , mid, orderBy, id, age, department, rate);
        MergeSortA(mid+1, high, orderBy, id, age, department, rate);
        MergeA(low, mid, high, orderBy, id, age, department, rate);
    }
}
//sort array into temp and copy into current array
void MergeArray::MergeA(int low ,int mid , int high, int orderBy, int id, int age, int department, int rate) {
    int i = low, j = mid+1 , k = low;
    string Temp[21][10];

    while(i <= mid && j <= high) {
        //if number sort from low to high
        if (isNumber(currentArray[i][orderBy]) && stoi(currentArray[i][orderBy]) < stoi(currentArray[j][orderBy])){
            Temp[k][id]=(currentArray[i][id]);
            Temp[k][age]=(currentArray[i][age]);
            Temp[k][department]=(currentArray[i][department]);
            Temp[k][rate]=(currentArray[i][rate]);
            i++;
        }
            //if string sort alphabetically
        else if (!isNumber(currentArray[i][orderBy]) && currentArray[i][orderBy] < currentArray[j][orderBy]){
            Temp[k][id]=(currentArray[i][id]);
            Temp[k][age]=(currentArray[i][age]);
            Temp[k][department]=(currentArray[i][department]);
            Temp[k][rate]=(currentArray[i][rate]);
            i++;
        }
        else {
            Temp[k][id]=(currentArray[j][id]);
            Temp[k][age]=(currentArray[j][age]);
            Temp[k][department]=(currentArray[j][department]);
            Temp[k][rate]=(currentArray[j][rate]);
            j++;
        }
        k++;
    }
    if(i > mid ) {
        for(int h = j ;h <= high ; h++ ) {
            Temp[k][id]=(currentArray[h][id]);
            Temp[k][age]=(currentArray[h][age]);
            Temp[k][department]=(currentArray[h][department]);
            Temp[k][rate]=(currentArray[h][rate]);
            k++;
        }
    }
    else
        for(int h = i; h<= mid ; h++ ) {
            Temp[k][id]=(currentArray[h][id]);
            Temp[k][age]=(currentArray[h][age]);
            Temp[k][department]=(currentArray[h][department]);
            Temp[k][rate]=(currentArray[h][rate]);
            k++;
        }
    //copy from low to high
    for(i = low; i <= high ; i++) {
        currentArray[i][id]=(Temp[i][id]);
        currentArray[i][age]=(Temp[i][age]);
        currentArray[i][department]=(Temp[i][department]);
        currentArray[i][rate]=(Temp[i][rate]);
    }
}

// Returns true if s is a number else false
bool MergeArray::isNumber(string s) {
    for (int i = 0; i < s.length(); i++)
        if (isdigit(s[i]) == false)
            return false;
    return true;
}