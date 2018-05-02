function game() {
    document.getElementById("text").innerHTML = "The land of Minia stretches before you, its vast plains open and inviting. A bustling city filled with vibrant life and bustling people. There are a few places you could go from here.";
var local = prompt("You look around. Where do you choose to go?\nMarket, Castle, or Woods?");

if (local === "Market"){
  document.getElementById("text").innerHTML = "The market is bustling but you find nothing that could help you with your quest. You are about to turn around, when suddenly...";
  questgiver();
}
  else if (local === "Castle"){
    document.getElementById("text").innerHTML = "There is the castle, looming in the distance. It is a beautiful structure, but not one that you could easily get access to. You turn away, defeated, when suddenly...";
    questgiver();
  }
  else if (local === "Woods"){
    document.getElementById("text").innerHTML = "For a moment, you consider the woods. However, there might be a scary monster in there, so you decline to go. All hope seems lost, when suddenly...";
    questgiver();
  }
  else {
    document.getElementById("text").innerHTML = "Your not? Well then you are no use to me!";
  alert("You lost! Don't be afraid to be adventurous!"); }
} 


function questgiver() {
    document.getElementById("text").innerHTML = "A shady looking man approaches you, he asks if you are a brave man who would love to go on a thrilling adventure.";
    var adventurer=confirm("Would you?");
    if (adventurer===true){
      document.getElementById("text").innerHTML = "I thought so. What's your name then?";
      var name = prompt("Whats your name?");
      document.getElementById("text").innerHTML = "Well then, Hero . Could you do me a favour?";
      var choice = confirm("Do the man a favour?");
      if (choice===false) {
        document.getElementById("text").innerHTML = "Ahh... Go on then! Shoo!";
        alert("You lost! Don't be afraid to be adventurous!");
      }
      else {
        document.getElementById("text").innerHTML = "That's a good lad! Now listen here. There is a small cave outside of town, and you see, I am an old feeble man. I can't go out there! But inside this cave there is a horde of dragon treasure! If you can get this for me, I will give you 30 percent! No more! Ahh... Fuf! Fine! 50 percent!";
        var quest = confirm("Accept the Quest?");
        if (quest===true) {
          //treasureQuest();
        }
        else {
          alert("You lost! Don't be afraid to be adventurous!");
        }
      }
      console.log("encountered man");
    }
    else {
      document.getElementById("text").innerHTML = "Your not? Well then you are no use to me!";
    alert("You lost! Don't be afraid to be adventurous!"); }
  } 

//Class used for battle skills

class skills {
  constructor (name, type, hit=0, power=0){
    this.name = name;
    this.type = type;
    this.hit = hit;
    this.power = power;
  }
};

//class used for battle characters
class actor {
  constructor(name, max_hp=0, skill=[]){
      this.name = name;
      this.max_hp = max_hp;
      this.hp = hp;
      this.skills = skills;
  }
};

//define skills

var testAttack = new skills ("Attack", "attack", 90, 100);

//define actors

var hero = new actor ("Hero", 30, [testAttack]);
var grue = new actor ("Grue", 10, [testAttack]);

// var player = var
function battle(player, enemy){

//To start battling, call this label with 2 actor objects: player and enemy.
// Preparation
//Copying enemy object prevents modifying an original data.

  var player = copy(player)
  var enemy=copy(enemy);
  alert("[enemy.name] appeared");

    if (player.hp <= 0){
      alert ("You drop to your knees, unable to continue.");
      function lose();}
    
      else if (enemy.hp <= 0){
        alert ("The enemy staggers back");
        function win();}
        
        else{
          function _battle();
        }
 }

 function lose(){
   console.log ("win");
 }

 function win(){
   console.log ("lose");
 }

 function _battle(){
  while True:
  player.skill = player.skill
  $ enemy.skill = random.choice(enemy.skills)
 }