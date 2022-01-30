//
// Created by 98adt on 2020-12-18.
//

#include "Human.h"
#include "City.h"
Human::Human() : Organism()
{

}

Human::Human(City *city, int x, int y) : Organism(city, x, y)
{

}

//move human to empty cell if no cell empty stay
void Human::move()
{
//random direction to move
    int dir = rand() % 4;
//move up
    if (dir==0)
    {
        if ((y>0) && (city->getAt(x,y-1)==NULL))
        {
            city->setAt(x,y-1,city->getAt(x,y));  // Move to new spot
            city->setAt(x,y,NULL);
            y--;
        }
    }

//move down
    else if (dir==1)
    {
        if ((y<GRIDSIZE-1) && (city->getAt(x,y+1)==NULL))
        {
            city->setAt(x,y+1,city->getAt(x,y));  // Move to new spot
            city->setAt(x,y,NULL);  // Set current spot to empty
            y++;
        }
    }

//move left
    else if (dir==2)
    {
        if ((x>0) && (city->getAt(x-1,y)==NULL))
        {
            city->setAt(x-1,y,city->getAt(x,y));  // Move to new spot
            city->setAt(x,y,NULL);  // Set current spot to empty
            x--;
        }
    }

//move right
    else
    {
        if ((x<GRIDSIZE-1) && (city->getAt(x+1,y)==NULL))
        {
            city->setAt(x+1,y,city->getAt(x,y));  // Move to new spot
            city->setAt(x,y,NULL);  // Set current spot to empty
            x++;
        }
    }
}

//determine if organism is human or zombie
int Human::getType()
{
    return HUMAN_ID;
}

//spawn new human
void Human::breed()
{
    breedTicks++;
    if (breedTicks == HUMAN_BREED)
    {
        breedTicks = 0;

// spawn make a new human in an empty spot
        if ((y>0) && (city->getAt(x,y-1)==NULL))
        {
            Human *newHuman = new Human(city, x, y-1);
        }
        else if ((y<GRIDSIZE-1) && (city->getAt(x,y+1)==NULL))
        {
            Human *newHuman = new Human(city, x, y+1);
        }
        else if ((x>0) && (city->getAt(x-1,y)==NULL))
        {
            Human *newHuman = new Human(city, x-1, y);
        }
        else if ((x<GRIDSIZE-1) && (city->getAt(x+1,y)==NULL))
        {
            Human *newAnt = new Human(city, x+1, y);
        }
    }
}