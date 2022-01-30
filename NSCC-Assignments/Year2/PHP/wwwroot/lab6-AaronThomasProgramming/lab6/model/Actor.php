<?php

require_once('../model/Address.php');

class Actor
{
    private $m_actorId; //int
    private $m_firstName; //string
    private $m_lastName; //string
    private $m_address; //address object
    private $m_search;

    //$in_id <-integer
    //$in_fname <-string
    //$in_lname <-string
    //$in_address <-address object
//    public function __construct($in_id,$in_fname,$in_lname,$in_address, $in_search)
    public function __construct($in_id,$in_fname,$in_lname,$in_address)
    {
        $this->m_actorId = $in_id;
        $this->m_firstName = $in_fname;
        $this->m_lastName = $in_lname;
        $this->m_address = $in_address;
//        $this->m_search = $in_search;

    }

    public function getID()
    {
        return ($this->m_actorId);
    }

    public function getFirstName()
    {
        return ($this->m_firstName);
    }

    public function setFirstName($in_firstName)
    {
        $this->m_firstName = $in_firstName;
    }

    public function getLastName()
    {
        return ($this->m_lastName);
    }

    public function setLastName($in_lastName)
    {
        $this->m_lastName = $in_lastName;
    }

    public function getAddress()
    {
        return ($this->m_address); //rememeber - this returns
        //the entire address object!
    }

//    public function getSearch()
//    {
//        return ($this->m_search);
//    }
//
//    public function setSearch($in_search)
//    {
//        $this->m_search = $in_search;
//    }
}