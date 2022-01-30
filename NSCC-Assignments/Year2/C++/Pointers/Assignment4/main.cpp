#include <iostream>
#include "GameSpecs.h"
#include <vector>
#include <cstdlib>
#include <time.h>
#include <ratio>
#include <windows.h> // WinApi header

#include "City.h"
#include "Human.h"
#include "Zombie.h"
int main() {
    //time counter
    double counter = 0;
    double pauseInterval = 0.0001;
    clock_t startTime = clock();
    clock_t previousTime = startTime;
    //output color to console
    HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
    SetConsoleTextAttribute(hConsole,FOREGROUND_RED);
    //declare world
    City c;

    // Randomly create 100 humans
    int humanCount = 0;
    while (humanCount < HUMAN_STARTCOUNT)
    {
        int x = rand() % GRIDSIZE;
        int y = rand() % GRIDSIZE;
        if (c.getAt(x,y)==NULL)// Only put human in empty spot
        {
            humanCount++;
            //create human with pointer
            Human *a1 = new Human(&c,x,y);
        }
    }

    // Randomly create 5 zombies
    int zombieCount = 0;
    while (zombieCount < ZOMBIE_STARTCOUNT)
    {
        int x = rand() % GRIDSIZE;
        int y = rand() % GRIDSIZE;
        if (c.getAt(x,y)==NULL)// Only put zombie in empty spot
        {
            zombieCount++;
            //create zombie with pointer
            Zombie *d1 = new Zombie(&c,x,y);
        }
    }

    // Run simulation until extinction event occurs
    int k = 1;
    while (true)
    {
        startTime = clock();
        counter += startTime - previousTime;
        previousTime = startTime;
        if(counter>pauseInterval * CLOCKS_PER_SEC)
        {
            counter -= pauseInterval * CLOCKS_PER_SEC;
            cout << "Cycle #" << k << endl;
            c.Display();
            c.SimulateOneStep();
            k++;
        }
    }

    return 0;
}
