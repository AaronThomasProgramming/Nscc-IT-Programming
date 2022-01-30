//
// Created by 98adt on 2020-12-18.
//
class Zombie;
class Human;
class City;
#include "Organism.h"
#include "Zombie.h"
#include "City.h"
Organism::Organism()
{
    city = NULL;
    breedTicks = 0;
    x=0;
    y=0;
}

Organism::Organism(City *city, int x, int y)
{
    this->city = city;
    breedTicks = 0;
    this->x=x;
    this->y=y;
    city->setAt(x,y,this);
}


Organism::~Organism()
{

}