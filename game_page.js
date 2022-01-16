player_1 = localStorage.getItem("player_1_username");
player_2 = localStorage.getItem("player_2_username");
player_1_score = 0;
player_2_score = 0;
document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;
document.getElementById("player_1").innerHTML = player_1 + ":";
document.getElementById("player_2").innerHTML = player_2 + ":";
function send() {
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type = 'text' id= 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'> Check </button>"
    row =  question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";;
}
question_turn ="player1";
answer_turn ="player2";
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
     if(answer_turn == "player1")
     {
        player_1_score = player_1_score + 1;
        document.getElementById("player_1_score").innerHTML = player_1_score;
    
     }
     else 
     {
        player_2_score = player_2_score + 1;
        document.getElementById("player_2_score").innerHTML = player_2_score;   
     }

    }

if(question_turn == "player1")
{
question_turn = "player2";
document.getElementById("player_question").innerHTML = "Question turn:" + question_turn;
}
else 
{
    question_turn = "player1";
    document.getElementById("player_question").innerHTML = "Question turn:" + question_turn;
}
if(answer_turn == "player1")
{
answer_turn = "player2";
document.getElementById("player_answer").innerHTML = "Answer turn:" + answer_turn;
}
else 
{
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML = "Answer turn:"  + answer_turn;
}




}