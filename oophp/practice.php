<?php
/**
  * Learning about the syntax of classes, properties, and methods in OOPHP.
  */

  // creating a PHP class
  class Genre {
    // assigning a property to the class, Genre
    public $prop = "Hi, I'm a property for the Genre class.";

    // upon the construction of the class, echo the statement
    public function __construct() {
      echo "I am a genre for a video game!" . "<br />";
    }
  }

  //the object! instantiating the class, storing in variable
  $game= new Genre;

  class Action extends Genre {
    public $prop = "I am an Action video game.";

    public function getProperty() {
      return $this->prop . "<br />";
    }
  }

  // create a new object from the new child class, Action
  $newGame = new Action;
  echo $newGame->getProperty();

/**
  * This code prints out the following:
  * I am a genre for a video game!
  * I am a genre for a video game!
  * I am an Action video game.
  *
  * Why?
  * When the class Genre is created, "I am a genre for a video game!" gets echoed out.
  *
  * The subclass Action inherits this __construct() method from the Genre class, so
  * "I am a genre for a video game!" gets echoed out a second time.
  *
  * The Action subclass is assigned the property, "I am an Action video game." Action also
  * has a method called getProperty() that returns the property of Action when called.
  *
  * A new object called $newGame gets instantiated from the Action subclass. The echo
  * statement that follows calls the getProperty() method, which echoes "I am an Action
  * video game."
  */
?>
