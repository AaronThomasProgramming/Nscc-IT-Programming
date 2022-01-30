//
// Created by 98adt on 2020-12-16.
//
#include <string>
#include <iostream>
#include <vector>
#include <sstream>
#include "Rational.h"

using namespace std;

    Rational::Rational() //default constructor
    {
        cout << "Default Constructor Fired" << endl;
        numerator = 0;
        denominator = 1;
    }
    Rational::Rational(int n, int d)//constructor #1 two arguments
    {
        cout << "Constructor #1 Fired" << endl;
        numerator = n;
        if (d==0)
        {
            cout << "ERROR: ATTEMPTING TO DIVIDE BY ZERO" << endl;
            exit(0); // will terminate the program if division by 0 is attempted
        }
        else
            denominator = d;
    }
    Rational::Rational(int n)//constructor #2 one argument whole number to fraction
    {
        cout << "Constructor #2 Fired" << endl;
        numerator = n;
        denominator = 1;
    }
    Rational::Rational(string o)//constructor #3 string to int
    {
        cout << "Constructor #3 Fired" << endl;
        if(o.find('/')){
            cout << "Fraction String Option Selected" << endl;
            vector<int> res = split(o,'/');
            int i = res[0];
            int j = res[1];
            numerator = i;
            denominator = j;
        }
        if(isNumber(o)){

            cout << "Whole Number String Option Selected" << endl;
            int stringNum = stoi(o);
            numerator = stringNum;
            denominator = 1;
//            cout << stringNum*2 << endl;
            //Fraction(numerator);
        }

    }

    Rational Rational::operator + (Rational otherRational) //add
    {
        cout << "Add Operator Fired" << endl;
        int n = numerator*otherRational.denominator+otherRational.numerator*denominator;
        int d = denominator*otherRational.denominator;
        return Rational(n/gcd(n,d),d/gcd(n,d));
        //return 5;
    }
    Rational Rational::operator - (Rational otherRational) //subtract
    {
        cout << "Subtract Operator fired" << endl;
        int n = numerator*otherRational.denominator-otherRational.numerator*denominator;
        int d = denominator*otherRational.denominator;
        return Rational(n/gcd(n,d),d/gcd(n,d));
    }
    Rational Rational::operator * (Rational otherRational) //multiply
    {
        cout << "Product Operator fired" << endl;
        int n = numerator*otherRational.numerator;
        int d = denominator*otherRational.denominator;
        return Rational(n/gcd(n,d),d/gcd(n,d));
    }
    Rational Rational::operator / (Rational otherRational) //divide
    {
        cout << "Division Operator fired" << endl;
        int n = numerator*otherRational.denominator;
        int d = denominator*otherRational.numerator;
        return Rational(n/gcd(n,d),d/gcd(n,d));
    }
    Rational Rational::operator < (Rational otherRational) //Less Than
    {
        cout << "Less Than Operator fired" << endl;
        int multi1 = numerator * otherRational.denominator;
        int multi2 = denominator * otherRational.numerator;

        if(multi1 < multi2){
            return true;//1
        } else{
            return false;//0
        }
        //return Fraction(n/gcd(n,d),d/gcd(n,d));
    }
    Rational Rational::operator > (Rational otherRational) //greater Than
    {
        cout << "Greater Than Operator fired" << endl;
        int multi1 = numerator * otherRational.denominator;
        int multi2 = denominator * otherRational.numerator;

        if(multi1 > multi2){
            return true;//1
        } else{
            return false;//0
        }
    }
    Rational Rational::operator == (Rational otherRational) //equals to
    {
        int multi1 = numerator * otherRational.denominator;
        int multi2 = denominator * otherRational.numerator;
        cout << "Equals To Operator fired" << endl;
        if(multi1 == multi2){
            return true;//1
        } else{
            return false;//0
        }
    }
//    ostream& operator<<(ostream &out, Fraction & otherFraction)
//    {
//        out << numerator << '/' << denominator;
//        return out;
//    }

    int Rational::gcd(int n, int d)//normalize fractions
    {
        {
            return d == 0? n : gcd(d, n % d);
        }
    }
    //split string into tokens for rational class
    vector<int> Rational::split(const string &s, char delimiter) {
        vector<int> tokens;
        string token;
        istringstream tokenStream(s);
        while (getline(tokenStream, token, delimiter)) {
            tokens.push_back(stoi(token));
        }
        return tokens;
    }

    bool Rational::isNumber(string s)//if input is number
    {
        for (int i = 0; i < s.length(); i++)
            if (isdigit(s[i]) == false)
                return false;

        return true;
    }
//split string into tokens for main driver
    vector<int> split(string basicString, char delimiter){
    vector<int> tokens;
    string token;
    istringstream tokenStream(basicString);
    while (getline(tokenStream, token, delimiter)) {
        tokens.push_back(stoi(token));
    }
    return tokens;
}
    //overload output operator
    ostream &operator<<(ostream &out, Rational &otherRational) {
    cout << "Output Operator fired" << endl;
    if (otherRational.denominator == 1) // e.g. fraction 2/1 will display simply as 2
        return cout << otherRational.numerator << endl;
    else
        return cout << otherRational.numerator << "/" << otherRational.denominator << endl;
}

    bool isNumber(string s)
    {
        for (int i = 0; i < s.length(); i++)
            if (isdigit(s[i]) == false)
                return false;

        return true;
    }

    //convert input for main driver
    Rational conversion(string input){
    char * pch;
    if(input.find('/')) {
        vector<int> res = split(input, '/');

        int i = res[0];
        int j = res[1];
        cout << i << endl;
        cout << j << endl;
        if( j == 0){ // if whole number
            cout << "Whole Number Integer Option Selected" << endl;
            return Rational(i); // call whole number constructor
        } else if (j > 0){
            cout << "Rational Number Integer Option Selected" << endl;
            return Rational(i, j); // call two argument constructor
        }else {
            cout << "Error Default Option Selected" << endl;
            return Rational();// call dafault constructor
        }
    }
    return 0;
}
