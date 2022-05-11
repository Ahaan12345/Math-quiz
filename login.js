function login(){
    player1_name=document.getElementById("player1input").innerHTML;
    player2_name=document.getElementById("player2input").innerHTML;
    
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location="quiz_game_page.html";
}