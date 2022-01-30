//
// Created by 98adt on 2020-12-18.
//

#ifndef ASSIGNMENT4_HUMAN_H
#define ASSIGNMENT4_HUMAN_H


#include "Organism.h"

class Human : public Organism
{

public:
    Human();
    Human(City *city, int x, int y);
    void breed();// Must define this since virtual
    void move();// Must define this since virtual
    int getType();// Must define this since virtual
    bool starve()   // Return false, ant never starves
    { return false; }
};


#endif //ASSIGNMENT4_HUMAN_H
