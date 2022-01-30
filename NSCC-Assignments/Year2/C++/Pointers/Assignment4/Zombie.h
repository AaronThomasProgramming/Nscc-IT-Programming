//
// Created by 98adt on 2020-12-18.
//

#ifndef ASSIGNMENT4_ZOMBIE_H
#define ASSIGNMENT4_ZOMBIE_H


#include "Organism.h"


class Zombie : public Organism
{

public:
    Zombie();
    Zombie(City *city, int x, int y);
    void breed();// spawn zombie
    void move();// move to eat or randomly
    int getType();// determine if organism is zombie or human
    bool starve();// zombie cured

private:
    int starveTicks;// days until cured
};


#endif //ASSIGNMENT4_ZOMBIE_H
