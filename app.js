var btn = document.querySelectorAll("button");
var result = document.querySelector(".result")


for(var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e)=>{
        const game = function(){
         const wBtn = e.target.textContent;
         const options = ["ROCK","PAPER","SCISSORS"]
         const index = Math.floor(Math.random() * 3)
         if(wBtn == options[0] && index == 1){
           
            result.textContent = "You lose against paper"
         }
         else if(wBtn == options[0] && index == 2){
          
            result.textContent = "Congratulations you won!"
         }
         else if(wBtn == options[0] && index == 0){
          
            result.textContent = "Round draw!"

         }
         if(wBtn == options[1] && index == 2){
         
            result.textContent = "You lose against scissors"
         }
         else if(wBtn == options[1] && index == 0){
            result.textContent = "Congratulations you won!"
         }
         else if(wBtn == options[1] && index == 1){
            result.textContent = "Round draw!"

         }
         if(wBtn == options[2] && index == 0){
            result.textContent = "You lose against rock"

            
         }
         else if(wBtn == options[2] && index == 1){
            result.textContent = "Congratulations you won!"

         }
         else if(wBtn == options[2] && index == 2){
            result.textContent = "Round draw!"


         }
        } 
        game()
    })
    
}