// get doc ready
document.addEventListener("DOMContentLoaded", function() {
    var currentValue = ""; 

    //start the calculate
    document.querySelectorAll(".buttons div").forEach(function(butts) {
        butts.addEventListener("click", function() {
            var val = this.innerText; 
            var screen = document.querySelector(".screen");
            //clear screen
            if(val === "Clear"){
               currentValue = ""; 
               screen.innerHTML = ""; 
            } 
            //to calculate
            else if(val === "="){
               try {
                   var result = eval(currentValue);
                   if (result === undefined || isNaN(result)) {
                       throw new Error("Invalid operation");
                   }
                   screen.innerHTML = result;
                   currentValue = result.toString(); 
               } catch (e) {
                   screen.innerHTML = "Syntax error, please check your input";
                   currentValue = ""; 
               }
            } 
            else {
               currentValue += val;
               screen.innerHTML = currentValue; 
            }
        });
    });
});
