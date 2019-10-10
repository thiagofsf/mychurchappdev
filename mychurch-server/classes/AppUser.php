<?php

class AppUser
{
    public $email;
    public $res;
    public $nome;

    public function __construct($res, $email, $nome){
        $this->email =      $email;
        $this->res =        $res;
        $this->nome =       $nome;
    } 
}

?>