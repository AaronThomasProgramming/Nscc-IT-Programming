<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
class Car 
{
        protected $name;
        protected $owner;
        protected $mileage;

        public function __construct($in_name,$in_owner,$in_mileage)
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

        public function driveFiftyMiles()
        {
            $this->mileage += 50;
            return "Drove $this->owner's $this->name fifty miles!";
        }
}

?>
