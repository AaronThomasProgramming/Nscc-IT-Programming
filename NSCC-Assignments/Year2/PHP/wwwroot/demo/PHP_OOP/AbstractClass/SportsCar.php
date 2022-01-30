<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
require_once("Car.php");
class SportsCar extends Car
{
        private $street_legal;

        public function __construct($in_name,$in_owner,$in_mileage,$in_streel_legal)
        {
                parent::__construct1( $in_name,$in_owner,$in_mileage);
	        $this->street_legal  = $in_streel_legal;
        }

        public function driveFiftyMiles()
        {
            if($this->street_legal)
            {
                $this->mileage =  $this->mileage * $this->mileage += 50;
                return "Drove $this->owner's $this->name fifty miles!";
            }
            else
            {
                return "You cannot drive $this->owner's $this->name on the highway!";
            }
        }
}