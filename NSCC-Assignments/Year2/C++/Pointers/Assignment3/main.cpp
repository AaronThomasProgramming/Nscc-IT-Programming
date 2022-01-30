#include <iostream>
#include <vector>
#include <sstream>
#include "Rational.h"

using namespace std;

/*class Rational
{
private:
    int numerator;
    int denominator;
public:
    friend ostream& operator<<(ostream &out, Rational & otherRational);
    Rational() //default constructor
    {
        cout << "Default Constructor Fired" << endl;
        numerator = 0;
        denominator = 1;
    }
    Rational(int n, int d)//constructor #1 two arguments
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
    Rational(int n)//constructor #2 one argument whole number to fraction
    {
        cout << "Constructor #2 Fired" << endl;
        numerator = n;
        denominator = 1;
    }
    Rational(string o)//constructor #3 string to int
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

    Rational operator + (Rational otherRational) //add
    {
        cout << "Add Operator Fired" << endl;
        int n = numerator*otherRational.denominator+otherRational.numerator*denominator;
        int d = denominator*otherRational.denominator;
        return Rational(n/gcd(n,d),d/gcd(n,d));
        //return 5;
    }
    Rational operator - (Rational otherRational) //subtract
    {
        cout << "Subtract Operator fired" << endl;
        int n = numerator*otherRational.denominator-otherRational.numerator*denominator;
        int d = denominator*otherRational.denominator;
        return Rational(n/gcd(n,d),d/gcd(n,d));
    }
    Rational operator * (Rational otherRational) //multiply
    {
        cout << "Product Operator fired" << endl;
        int n = numerator*otherRational.numerator;
        int d = denominator*otherRational.denominator;
        return Rational(n/gcd(n,d),d/gcd(n,d));
    }
    Rational operator / (Rational otherRational) //divide
    {
        cout << "Division Operator fired" << endl;
        int n = numerator*otherRational.denominator;
        int d = denominator*otherRational.numerator;
        return Rational(n/gcd(n,d),d/gcd(n,d));
    }
    Rational operator < (Rational otherRational) //Less Than
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
    Rational operator > (Rational otherRational) //greater Than
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
    Rational operator == (Rational otherRational) //equals to
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
    // I got the GCD algorithm from the following source:
    // Source C#: http://www.ww.functionx.com/csharp2/examples/gcd.htm
    int gcd(int n, int d)
    {
        int remainder;
        while (d != 0)
        {
            remainder = n % d;
            n = d;
            d = remainder;
        }
        return n;
//        {
//            return d == 0? n : gcd(d, n % d);
//        }
    }*/
//*//*//*/    //void show(); //overload Display method
////    {
////        if (denominator == 1) // e.g. fraction 2/1 will display simply as 2
////            cout << numerator << endl;
////        else
////            cout << numerator << "/" << denominator << endl;
////    }*//*
//    //split string into tokens
//    vector<int> split(const string &s, char delimiter) {
//        vector<int> tokens;
//        string token;
//        istringstream tokenStream(s);
//        while (getline(tokenStream, token, delimiter)) {
//            tokens.push_back(stoi(token));
//        }
//        return tokens;
//    }
//    bool isNumber(string s)
//    {
//        for (int i = 0; i < s.length(); i++)
//            if (isdigit(s[i]) == false)
//                return false;
//
//        return true;
//    }
//};
//
//*//*//*/int isNumberDriver(string s)
////{
////    for (int i = 0; i < s.length(); i++){
////        if (isdigit(s[i]) == false) {
////            return false;
////        }
////        else{
////            int stringNum = stoi(s);
////            return stringNum;
////        }
////    }
////}*//*
//
//vector<int> split(string basicString, char delimiter){
//    vector<int> tokens;
//    string token;
//    istringstream tokenStream(basicString);
//    while (getline(tokenStream, token, delimiter)) {
//        tokens.push_back(stoi(token));
//    }
//    return tokens;
//}
//
//ostream &operator<<(ostream &out, Rational &otherRational) {
//    cout << "Output Operator fired" << endl;
//    if (otherRational.denominator == 1) // e.g. fraction 2/1 will display simply as 2
//        return cout << otherRational.numerator << endl;
//    else
//        return cout << otherRational.numerator << "/" << otherRational.denominator << endl;
//}
//
//bool isNumber(string s)
//{
//    for (int i = 0; i < s.length(); i++)
//        if (isdigit(s[i]) == false)
//            return false;
//
//    return true;
//}
//
//Rational conversion(string input){
//    char * pch;
//    if(input.find('/')) {
//        vector<int> res = split(input, '/');
//
//        int i = res[0];
//        int j = res[1];
//        cout << i << endl;
//        cout << j << endl;
//        if( j == 0){ // if whole number
//            cout << "Whole Number Integer Option Selected" << endl;
//            return Rational(i); // call whole number constructor
//        } else if (j > 0){
//            cout << "Rational Number Integer Option Selected" << endl;
//            return Rational(i, j);
//        }else {
//            cout << "Error Default Option Selected" << endl;
//            return Rational();
//        }
//
//    }
//*//*//*/    else if(isNumber(input)){
////
////        cout << "Whole Number Option Selected" << endl;
////        int stringNum = stoi(input);
////        int stringDenom = 1;
////        //numerator = stringNum;
////        //denominator = 1;
//////            cout << stringNum*2 << endl;
////        //Fraction(numerator);
////        return Fraction(stringNum, stringDenom);
////    }*//*
//    return 0;
//
//}

/*vector<int> split(string basicString, char i) {
//    vector<int> tokens;
//    string token;
//    istringstream tokenStream(s);
//    while (getline(tokenStream, token, delimiter)) {
//        tokens.push_back(stoi(token));
//    }
//    return tokens;
//}

//vector<int> split(const string &s, char delimiter) {
//    vector<int> tokens;
//    string token;
//    istringstream tokenStream(s);
//    while (getline(tokenStream, token, delimiter)) {
//        tokens.push_back(stoi(token));
//    }
//    return tokens;*/

//no validation for doubles or isAlpha
int main() {
    string stringRational1;
    string stringRational2;

    while (true) {
        try {


            cout << "Type rational number 1 or 'q' to quit: "; // Type a number and press enter
            cin >> stringRational1; // Get user input from the
            string one = stringRational1;
            if (stringRational1 == "q") {
                break;
            }
            cout << "Type rational number 2 or 'q' to quit: "; // Type a number and press enter
            cin >> stringRational2; // Get user input from the
            string two = stringRational2;
            if (stringRational1 == "q") {
                break;
            }
            Rational a(conversion(one));
            //Fraction a(1);
            //Fraction a(vvv);
            //Fraction b(1);
            Rational b(conversion(two));
            Rational c;
            //add
            Rational d = a + b;
            c = d;
            cout << c;
            //subtract
            Rational e = a - b;
            c = e;
            cout << c;
            //multiply
            Rational f = a * b;
            c = f;
            cout << c;
            //divide
            Rational g = a / b;
            c = g;
            cout << c;
            //less than
            Rational h = a > b;
            c = h;
            cout << c;
            //greater than
            Rational i = a < b;
            c = i;
            cout << c;
            //Equals to. 1 = true, 0 = false
            Rational j = a == b;
            c = j;
            cout << c;

            //output for constructor #3
            cout << endl;
            cout << endl;
            cout << "Construstor 3 output for string input" << endl << endl;
            Rational aString(one);
            //Fraction a(vvv);
            Rational bString(two);
            Rational cString;
            //add
            Rational dString = aString + bString;
            c = dString;
            cout << c;
            //subtract
            Rational eString = aString - bString;
            c = eString;
            cout << c;
            //multiply
            Rational fString = aString * bString;
            c = fString;
            cout << c;
            //divide
            Rational gString = aString / bString;
            c = gString;
            cout << c;
            //less than
            Rational hString = aString > bString;
            c = hString;
            cout << c;
            //greater than
            Rational iString = aString < bString;
            c = iString;
            cout << cString;
            //Equals to. 1 = true, 0 = false
            Rational jString = aString == bString;
            c = jString;
            cout << c;
        }catch (const std::exception& e) {
            std::cout << "Error stop breaking my program" << endl;
        }
    }
    return 0;
}


//Provide 1st Rational Number: 3/4
//Provide 2nd Rational Number: 4
// 3/4 + 4/1 =
// 3/4 * 4 =
// 3/4 - 4 =
// 3/4 / 4 =

// 3/4 < 4 is true
// 3/4 > 4 is false
// 3/4 == 4 is false
