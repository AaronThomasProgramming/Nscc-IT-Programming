#include <iostream>
#include "MazeStack.h"

using namespace std;

int main(int argc, char** argv) {
    //get maze name for stack maze solver
    string MazeName = argv[1];
    SolveMaze("../tests/"+MazeName);

    return 0;
}