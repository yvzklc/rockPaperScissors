var btn = document.querySelectorAll("button");



for(var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e)=>{
        const game = function(){
         const wBtn = e.target.textContent;
         const options = ["ROCK","PAPER","SCISSORS"]
         const index = Math.floor(Math.random() * 2)
         if(wBtn == options[0] && index == 1){
            console.log("You lose against paper")
         }
         if(wBtn == options[0] && index == 2){
            console.log("Congratulations you won!")
         }
         if(wBtn == options[0] && index == 0){
            console.log("Round draw!")
         }
        } 
        game()
    })
    
}