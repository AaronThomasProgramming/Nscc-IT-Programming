#include <iostream>
#include <bits/stdc++.h>
#include <string.h>
#include <string>
#include<bits/stdc++.h>
#include <cstdio>
using namespace std;

class RuleOfThree{

    int max = 1;
    string Name;
    int numCourses;
    string *courseList = new string[max];

};

int main() {
//"Dynamic Array" as in declared in dynamic memory,
//not that its size can change
//This program starts with a small array an then
//adds more space by declaring a new array that is larger.

int max=1;//note not a const value
string *dynArray = new string[max];//declare array in dynamic (heap) memory
string *dynArray2 = new string[max]; //for deep copy
int c = 0;
//string name;
//string flag;

cout<<"Enter an Integer: " << endl;
while(cin>>dynArray[c] && dynArray[c] != "x")
//while(cin>>dynArray[c])
{
c++;
if(c>=max)//test if array is full and make larger if it is
{
max=max+1;//double size of array max var
string *temp = new string[max];//create temp array to hold data
for(int i=0;i<c;i++)
{
temp[i]=dynArray[i];//copy original into larger temp
}

//delete dynArray;//mem leak - deletes the first element of array
if(dynArray != NULL) //not null check
{
    delete []dynArray;//[] tells that it is dealing with an array
}

dynArray = temp;
dynArray2 = dynArray;
cout << "array size is: "<< max <<" "<< max-c <<" now available"<<endl;

}

cout<<"Enter an Integer: " << endl;
}//end while

//fill(dynArray, dynArray+c, 0); //reset array

for(int i=0;i<c;i++)
{
    cout << dynArray[i] << " ";
}

return 0;
}

