<?php


abstract class Shape
{

    protected $name;
    protected $num1;
    protected $num2;

    // Abstract methods
    abstract public function calculate();

    public function __construct1($in_name,$in_num1,$in_num2)
    {
        $this->name = $in_name;
        $this->num1 = $in_num1;
        $this->num2 = $in_num2;
    }

    public function getName()
    {
        return ($this->name);
    }

}