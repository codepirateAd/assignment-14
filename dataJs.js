let info = document.getElementById("data");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn1");

btn.addEventListener("click", function(){
    let ourRequest = new XMLHttpRequest()
    ourRequest.open('GET',"https://learnwebcode.github.io/json-example/animals-1.json");

    ourRequest.onload = function(){
        let myData = JSON.parse(ourRequest.responseText);
        let res="";
        for(let ob of myData){
            res += `<br/> ${ob.name} is a ${ob.species}  he likes to eat ${ob.foods.likes } and dislikes ${ob.foods.dislikes }<Br/>`;
         }
        info.innerHTML = res;
    }
    ourRequest.send();
})

btn2.addEventListener("click", function(){
   
        info.innerHTML = "";
})