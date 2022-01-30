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
                parent::__construct( $in_name,$in_owner,$in_mileage);
	        $this->street_legal  = $in_streel_legal; 
        }
        
        public function driveSupeFiftyMiles()
        {
            if($this->street_legal)
            {
                return parent::driveFiftyMiles();
            }
            else 
            {
                return "You cannot drive $this->owner's $this->name on the highway!";
            }
        }
}