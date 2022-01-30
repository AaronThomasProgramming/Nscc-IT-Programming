//
// Created by 98adt on 2020-12-18.
//

#ifndef ASSIGNMENT4_ORGANISM_H
#define ASSIGNMENT4_ORGANISM_H


#include <iostream>
using namespace std;

class Zombie;
class Human;
class City;

class Organism
{

public:
    Organism();
    Organism(City *city, int x, int y);
    ~Organism();
    virtual void breed() = 0;// spawn human or zombie
    virtual void move() = 0;// Rules to move the human or zombie
    virtual int getType() =0;// determine if human or zombie
    virtual bool starve() = 0;// zombie cure

protected:
    int x,y;// Position in the world
    int breedTicks;// Number of ticks since breeding
    City *city;
};


#endif //ASSIGNMENT4_ORGANISM_H
