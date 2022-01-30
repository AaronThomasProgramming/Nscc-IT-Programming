<?php


interface iActorDataModel
{
    public function connectToDB();

    public function closeDB();

    public function selectActors();

    public function selectActorById($actorID);

    public function fetchActor();

    public function updateActor($actorID,$first_name,$last_name);

    public function deleteActor($actorID);

//    public function actorSearch($search);
    public function selectSearchActors($sString);

    // field access functions
    public function fetchActorID($row);

    public function fetchActorFirstName($row);

    public function fetchActorLastName($row);

    public function fetchAddressID($row);

    public function fetchAddress1($row);

    public function fetchAddress2($row);
}