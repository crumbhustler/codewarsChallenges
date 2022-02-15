// Description:
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
 let answer = (health - damage);
  if (answer < 0){
    return 0
  }else{
    return answer
  }
}

//better answer
const combat = (health, damage) => Math.max(0, health - damage);