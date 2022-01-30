//
// Created by 98adt on 2020-12-18.
//
#include <vector>
#include <cstdlib>
#include <ratio>

#include "Zombie.h"
#include "Human.h"
#include "GameSpecs.h"
#include "City.h"

using namespace std;

Zombie::Zombie() : Organism()
{
    //starveTicks = 0;
}

Zombie::Zombie(City *world, int x, int y) : Organism(world, x, y)
{
    //starveTicks = 0;
}

// Look in each direction for a human if found eat it and move there
// if human not found move randomly
void Zombie::move()
{

    if ((y>0) && (city->getAt(x,y-1)!=NULL) &&
        (city->getAt(x,y-1)->getType() == HUMAN_ID))
    {
        delete (city->grid[x][y-1]);// Kill ant
        if(breedTicks == 8){
            starveTicks =0 ;  // Reset hunger
            Zombie *newDoodle = new Zombie(city, x, y-1);
        } else{
            city->grid[x][y-1] = this;    // Move to spot
            city->setAt(x,y,NULL);
            starveTicks =0 ;  // Reset hunger
            y--;
        }
        return;
    }

    else if ((y<GRIDSIZE-1) && (city->getAt(x,y+1)!=NULL) &&
             (city->getAt(x,y+1)->getType() == HUMAN_ID))
    {
        delete (city->grid[x][y+1]);// Kill ant
        if(breedTicks == 8){
            starveTicks =0 ;  // Reset hunger
            Zombie *newDoodle = new Zombie(city, x, y+1);
        } else{
            city->grid[x][y+1] = this;    // Move to spot
            city->setAt(x,y,NULL);
            starveTicks =0 ;  // Reset hunger
            y++;
        }
        return;
    }

    else if ((x>0) && (city->getAt(x-1,y)!=NULL) &&
             (city->getAt(x-1,y)->getType() == HUMAN_ID))
    {
        delete (city->grid[x-1][y]);// Kill ant
        if(breedTicks == 8){
            starveTicks =0 ;  // Reset hunger
            Zombie *newDoodle = new Zombie(city, x-1, y);
        } else{
            city->grid[x-1][y] = this;    // Move to spot
            city->setAt(x,y,NULL);
            starveTicks =0 ;  // Reset hunger
            x--;
        }
        return;
    }

    else if ((x<GRIDSIZE-1) && (city->getAt(x+1,y)!=NULL) &&
             (city->getAt(x+1,y)->getType() == HUMAN_ID))
    {
        delete (city->grid[x+1][y]);// Kill ant
        if(breedTicks == 8){
            starveTicks =0 ;  // Reset hunger
            Zombie *newDoodle = new Zombie(city, x+1, y);
        } else{
            city->grid[x+1][y] = this;    // Move to spot
            city->setAt(x,y,NULL);
            starveTicks =0 ;  // Reset hunger
            x++;
        }
        return;
    }
//If no human found move to random spot

//zombie starve trigger
    int dir = rand() % 4;
//move up
    if (dir==0)
    {
        if ((y>0) && (city->getAt(x,y-1)==NULL))
        {
            if(starveTicks == ZOMBIE_STARVE){
                delete (city->grid[x][y-1]);// Kill zombie
                Human *newHuman = new Human(city, x, y-1); // spawn/cure human
            }else{
                city->setAt(x,y-1,city->getAt(x,y));  // Move to new spot
                city->setAt(x,y,NULL);
                y--;
            }
        }
    }

//move down
    else if (dir==1)
    {
        if ((y<GRIDSIZE-1) && (city->getAt(x,y+1)==NULL))
        {
            if(starveTicks == ZOMBIE_STARVE){
                delete (city->grid[x][y+1]);// Kill zombie
                Human *newHuman = new Human(city, x, y+1); // spawn/cure human
            }else{
                city->setAt(x,y+1,city->getAt(x,y));  // Move to new spot
                city->setAt(x,y,NULL);
                y++;
            }
        }
    }

//move left
    else if (dir==2)
    {
        if ((x>0) && (city->getAt(x-1,y)==NULL))
        {
            if(starveTicks == ZOMBIE_STARVE){
                delete (city->grid[x-1][y]);// Kill zombie
                Human *newHuman = new Human(city, x-1, y); // spawn/cure human
            }else{
                city->setAt(x-1,y,city->getAt(x,y));  // Move to new spot
                city->setAt(x,y,NULL);
                x--;
            }
        }
    }

//move right
    else
    {
        if ((x<GRIDSIZE-1) && (city->getAt(x+1,y)==NULL))
        {
            if(starveTicks == ZOMBIE_STARVE){
                delete (city->grid[x+1][y]);// Kill zombie
                Human *newHuman = new Human(city, x+1, y); // spawn/cure human
            }else{
                city->setAt(x+1,y,city->getAt(x,y));  // Move to new spot
                city->setAt(x,y,NULL);
                x++;
            }
        }
    }
    starveTicks++;// Increment starve tick zombie didnt eat
}

//determine of zombie or human
int Zombie::getType()
{
    return ZOMBIE_ID;
}

//spawn zombie
void Zombie::breed()
{
    breedTicks++;
    if (breedTicks == ZOMBIE_BREED)
    {
        breedTicks = 0;

// Try to make a new zombie either above, left, right, or down
        if ((y>0) && (city->getAt(x,y-1)==NULL))
        {
            Zombie *newZombie = new Zombie(city, x, y-1);
        }
        else if ((y<GRIDSIZE-1) && (city->getAt(x,y+1)==NULL))
        {
            Zombie *newDoodle = new Zombie(city, x, y+1);
        }
        else if ((x>0) && (city->getAt(x-1,y)==NULL))
        {
            Zombie *newDoodle = new Zombie(city, x-1, y);
        }
        else if ((x<GRIDSIZE-1) && (city->getAt(x+1,y)==NULL))
        {
            Zombie *newDoodle = new Zombie(city, x+1, y);
        }
    }
}

//zombie cured if hasnt eat in 3 days
bool Zombie::starve()
{
    if (starveTicks > ZOMBIE_STARVE)
    {
        return true;
    }
    else
    {
        return false;
    }
}