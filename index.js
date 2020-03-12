/***** Deliverable 1 *****/
const header = document.querySelector("#header");
console.log("Here's your header:", header)

console.log(document.getElementById("header"))

/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)
players = document.querySelector('.player-container')

PLAYERS.forEach(function(player){
    players.innerHTML += `
    <div class="player" data-number="${player.number}">
      <h3>
        ${player.name} (<em>${player.nickname}</em>)
      </h3>
     <img src="${player.photo}" alt="${player.name}">
    </div>
    `
})

console.log("PLAYERS array looks like this:", PLAYERS)

/***** Deliverable 4 *****/

const deletePlayer = divContainer.querySelector(`div[data-number="7"]`).remove()