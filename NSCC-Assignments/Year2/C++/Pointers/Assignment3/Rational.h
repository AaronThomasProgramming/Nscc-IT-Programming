//
// Created by 98adt on 2020-12-16.
//

#ifndef ASSIGNMENT3_RATIONAL_H
#define ASSIGNMENT3_RATIONAL_H
#include <string>
#include <iostream>
#include <vector>
#include <sstream>

using namespace std;

class Rational
{
private:
    int numerator;
    int denominator;
public:
    friend ostream& operator<<(ostream &out, Rational & otherRational); //overload output friend operator
    Rational(); //default constructor 0/1
    Rational(int n, int d); //constructor #1 takes two arguments to set the value
    Rational(int n); //constructor #2 takes whole number and set to rational number
    Rational(string o); //constructor #3 takes string and set to either whole or rational number

    Rational operator + (Rational otherRational);//add overload
    Rational operator - (Rational otherRational);//sub overload
    Rational operator * (Rational otherRational);//multi overload
    Rational operator / (Rational otherRational);//div overload
    Rational operator < (Rational otherRational);//less than overload
    Rational operator > (Rational otherRational);//greater than overload
    Rational operator == (Rational otherRational);//equals overload
    int gcd(int n, int d);//normalize fractions
    vector<int> split(const string &s, char delimiter);//split fractions
    bool isNumber(string s);//check if input is int
};

vector<int> split(string basicString, char delimiter);//split fractions
ostream &operator<<(ostream &out, Rational &otherRational);//output overload
bool isNumber(string s);
Rational conversion(string input);//convert string to int for functions

#endif //ASSIGNMENT3_RATIONAL_H
