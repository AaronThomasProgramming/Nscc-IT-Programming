//
// Created by 98adt on 2020-12-18.
//

#ifndef ASSIGNMENT4_CITY_H
#define ASSIGNMENT4_CITY_H
#include "Organism.h"
//#include "Zombie.h"
#include "GameSpecs.h"


class City
{
    friend class Organism;// Allow Organism to access grid
    friend class Zombie;// Allow Organism to access grid
    friend class Human;// Allow Organism to access grid

public:
    City();
    ~City();
    Organism* getAt(int x, int y);
    void setAt(int x, int y, Organism *org);
    void Display();
    void SimulateOneStep();

private:
    Organism* grid[GRIDSIZE][GRIDSIZE];
};


#endif //ASSIGNMENT4_CITY_H
