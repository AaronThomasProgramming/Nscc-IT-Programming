<?php

require_once("Shape.php");
require_once("iResizable.php");
class Rectangle extends Shape implements iResizable
{
    private $resize;

    public function __construct($in_name,$in_num1,$in_num2,$in_resize)
    {
        parent::__construct1( $in_name,$in_num1,$in_num2);
        $this->resize  = $in_resize;
    }

    public function calculate()
    {

        return $this->num1 * $this->num2;

    }

    public function Resize()
    {
        return $this->resize;
    }

}