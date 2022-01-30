//
// Created by 98adt on 2020-12-18.
//
#include <iostream>
#include <vector>
#include <ratio>

#include "GameSpecs.h"
#include "City.h"


using namespace std;

City::City() //create world
{
// Initialize world to empty spaces
    int i,j;
    for (i=0; i<GRIDSIZE; i++)
    {
        for (j=0; j<GRIDSIZE; j++)
        {
            grid[i][j]=NULL;
        }
    }
}

City::~City() //delete world
{
// Release any allocated memory
    int i,j;
    for (i=0; i<GRIDSIZE; i++)
    {
        for (j=0; j<GRIDSIZE; j++)
        {
            if (grid[i][j]!=NULL) delete (grid[i][j]);
        }
    }
}

//return value stored at x,y
Organism* City::getAt(int x, int y)
{
    if ((x>=0) && (x<GRIDSIZE) && (y>=0) && (y<GRIDSIZE))
        return grid[x][y];
    return NULL;
}

//set value stored at x,y
void City::setAt(int x, int y, Organism *org)
{
    if ((x>=0) && (x<GRIDSIZE) && (y>=0) && (y<GRIDSIZE))
    {
        grid[x][y] = org;
    }
}

//Display world O = human X = zombie
void City::Display()
{
    int i,j;
    int l = 0;
    int m = 0;
    cout << endl << endl;
    for (j=0; j<GRIDSIZE; j++)
    {
        for (i=0; i<GRIDSIZE; i++)
        {
            if (grid[i][j]==NULL) {
                cout << "-";
            }
            else if (grid[i][j]->getType()==HUMAN_ID) {
                cout << "O";
                l++;
            }
            else {
                cout << "X";
                m++;
            }
        }
        cout << endl;
    }
    //Display amount of humans and zombies on board
    cout << "Ants #" << l << endl;
    cout << "Doodle #" << m << endl;
    //extinction event if all humans or zombies die
    if(l == 0){
        cout << "Ants Extinct" << endl;
        exit(0);
    }
    if(m == 0){
        cout << "Doodlebug Extinct" << endl;
        exit(0);
    }
}

//Move zombies, humans  and call functions
void City::SimulateOneStep()
{
    int i,j;

// move zombies
    for (i=0; i<GRIDSIZE; i++)
        for (j=0; j<GRIDSIZE; j++)
        {
            if ((grid[i][j]!=NULL) && (grid[i][j]->getType()==ZOMBIE_ID))
            {
                grid[i][j]->move();
//                }
            }
        }

// move humans
    for (i=0; i<GRIDSIZE; i++)
        for (j=0; j<GRIDSIZE; j++)
        {
            if ((grid[i][j]!=NULL) && (grid[i][j]->getType()==HUMAN_ID))
            {
                grid[i][j]->move();
            }
        }

// cure zombies that starved
    for (i=0; i<GRIDSIZE; i++)
        for (j=0; j<GRIDSIZE; j++)
        {
            if ((grid[i][j]!=NULL) &&
                (grid[i][j]->getType()==ZOMBIE_ID))
            {
                if (grid[i][j]->starve())
                {
                    delete (grid[i][j]);
                    grid[i][j] = NULL;
                }
            }
        }

// spawn new zombies and humans
    for (i=0; i<GRIDSIZE; i++)
        for (j=0; j<GRIDSIZE; j++)
        {
//spawn on empty x,y
            if ((grid[i][j]!=NULL))
            {
                grid[i][j]->breed();
            }
        }
}