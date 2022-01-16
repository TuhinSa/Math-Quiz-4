function adduser(){
player_1_name = document.getElementById("player_1_username").value;
player_2_name = document.getElementById("player_2_username").value;
localStorage.setItem("player_1_username", player_1_name);
localStorage.setItem("player_2_username", player_2_name);
window.location = "quiz_game.html";
}
