#include <iostream>
#include <fstream>
#include <cstring>
#include <string>
#include <cstdlib>
#include <regex>
#include <exception>
using namespace std;
//custom exception
struct MyException : public std::exception
{
    const char * what () const throw ()
    {
        return "C++ Exception";
    }
};


//     main function
 int main() {

    // Input file to convert
    string filename;
    // Output file with .html on the end
    string outputname;

    char c;
    ifstream fin;
    ofstream fout;

    //regex .cpp
    //use tim.cpp
    cout << "Enter .ccp filename you would like to convert to html Ex: text.cpp" << endl;
    cin >> filename;

    // Open the input file
    //try catch read
    try {
        fin.open(filename.c_str());

        //check if filename has .cpp file extension
//        https://stackoverflow.com/questions/51949/how-to-get-file-extension-from-string-in-c
        if (filename.substr(filename.find_last_of(".") + 1) == "cpp") {
            if (fin.fail()) {
                throw invalid_argument("I/O failure opening file.");
                cout << "I/O failure opening file." << endl;
                exit(1);
            }

//     Create the output file
//remove .cpp from source file
//        https://stackoverflow.com/questions/14265581/parse-split-a-string-in-c-using-string-delimiter-standard-c
            //remove .cpp from file name
            string delim = ".";
            auto start = 0U;
            auto end = filename.find(delim);
            string myHtml;
            while (end != string::npos) {
                myHtml = filename.substr(start, end - start);
//                cout << myHtml << endl;
                start = end + delim.length();
                end = filename.find(delim, start);
            }
            //cpp removed from file name
            filename = myHtml;

            //try catch write
            outputname = filename + ".html";
            try {
                fout.open(outputname.c_str());
                if (fout.fail()) {
                    cout << "I/O failure opening file." << endl;
                    exit(1);
                }

                // First, output the <PRE> tag
                fout << "<PRE>" << endl;

                // Loop through the input file intil nothing else to get
                while (!fin.eof()) {
                    fin.get(c);    // Get one character
                    // Output &lt; or &gt; or original char
                    if (c == '<') {
                        fout << "&lt;";
                    } else if (c == '>') {
                        fout << "&gt;";
                    } else fout << c;
                }
                // Output end /PRE tag
                fout << "</PRE>" << endl;
                //try catch for closing
                try {
                    fin.close();
                    fout.close();
                    cout << "Conversion done. Results are in file " << outputname << endl;
                }
                catch (exception &e) {
                    cout << "Closing error" << endl;
                }
            }
            catch (MyException& e) {
                cout << "MyException caught" << endl;
            }


        } else {
            cout << "Not a .cpp file" << endl;
        }
    }
    catch (exception& e) {
        cout << "I/O failure opening file." << endl;
    }
}