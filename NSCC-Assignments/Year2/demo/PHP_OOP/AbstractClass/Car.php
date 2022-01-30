<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
abstract class Car 
{
        protected $name;
        protected $owner;
        protected $mileage;
        
        // Abstract methods
        abstract public function driveFiftyMiles();

        public function __construct1($in_name,$in_owner,$in_mileage)
        {
                $this->name = $in_name;
                $this->owner = $in_owner;
                $this->mileage = $in_mileage;
        }

        public function getOwner()
        {
            return ($this->owner);
        }

        public function getName()
        {
            return ($this->name);
        }

        public function getMileage()
        {
            return ($this->mileage);
        }
}

?>
