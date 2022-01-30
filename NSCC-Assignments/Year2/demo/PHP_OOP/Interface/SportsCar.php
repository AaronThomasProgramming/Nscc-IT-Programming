<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
require_once("Car.php");
require_once("iCrashable.php");
class SportsCar extends Car implements iCrashable
{
        private $street_legal;

        public function __construct($in_name,$in_owner,$in_mileage,$in_streel_legal)
        {
                parent::__construct( $in_name,$in_owner,$in_mileage);
	        $this->street_legal  = $in_streel_legal; 
        }
        
        // Abstract class method
        public function driveFiftyMiles()
        {
            if($this->street_legal)
            {
                $this->mileage += 50;
                return "Drove $this->owner's $this->name fifty miles!";
            }
            else 
            {
                return "You cannot drive this car on the highway!". $this->runIntoTree();
            }
        }

        // Interface method
        public function runIntoTree() 
        {
            return "Hit a tree. This is the end of $this->owner's $this->name!";
        }
}