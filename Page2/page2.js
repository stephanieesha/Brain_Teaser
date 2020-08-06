//page load functions

function page_load(){
    flip_time();
    swap_time_out();
   
    test();
    
 

    
}



//flip cards to the back after 10 seconds
function flip_time(){

    setTimeout(function(){
        let my_elements = document.querySelectorAll('.card-flip ');

        let new_elements = my_elements.forEach( x => x.classList.add('flipped'));
            
        }
        
    , 10000);
}


//flip card on click
document.querySelectorAll('.card-flip').forEach(item => {
item.addEventListener('click', event => item.classList.toggle('flipped'))
});
        


//get card data-value
function test(){       
    var inputs = document.querySelectorAll('.card-flip');

    var Arr = [];

    let val =  inputs.forEach((input) => Arr.push(parseInt(input.getAttribute('value'))));
    console.log(Arr);

    let sortted = Arr.sort(() => Math.random() - 0.5);

    console.log(sortted);

}


//shuffle cards
function swap_time_out(){
    var stop_interval = setInterval( function swap() {
        //shuffle top row
        var parent = document.getElementById("child1");
        var divs = parent.children;
        var frag = document.createDocumentFragment();
        while (divs.length) {
            frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
        }
        parent.appendChild(frag);
    
    
        //shuffle bottom row
        var parent = document.getElementById("child2");
        var divs = parent.children;
        var frag = document.createDocumentFragment();
        while (divs.length) {
            frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
        }
        parent.appendChild(frag);
    
      
    }, 2000);

        //end shuffle
        setTimeout(() =>{
            clearInterval(stop_interval);
        }, 6000)
          
}


setTimeout(function(){
  
let card = document.getElementsByClassName("card-flip");
let cards = [...card];

var openedCards = [];

document.querySelectorAll('.card-flip').forEach(item => {
    item.addEventListener('click', event => {


        var inputs = document.querySelector('.card-flip');
        var me =  item.getAttribute('value');
    
        openedCards.push(me);

        //disable selected card
        item.classList.add('disable-card');


        var len = openedCards.length;
         if(len === 2){
            // moveCounter();
                if(openedCards[0] === openedCards[1]){
                    we();
                } 
                else {
                    them()
                }

                openedCards = [];
         }

    })});
        
    }
    
, 11000);


//animations
//pass
function we(){
let timer = setTimeout(function() {
   // var u = document.createElement("p");
   const months = ["Nice Match!", "Correct! Keep it Up!", "Great Memory!", "Awesome...", "Weldone!", " Good Job!"];

const random = Math.floor(Math.random() * months.length);
    var para = document.getElementById("alert1").innerHTML = months[random];
   
    
    }, 500)

    setTimeout(() =>{
        var para2 = document.getElementById("alert1").innerHTML = ' ';
    }, 3000)
}
//fail
function them(){
    const months = ["Oops! Wrong match", "Sorry. Incorrect", "Wrong Answer", "Oops! incorrect Answer"];

const random = Math.floor(Math.random() * months.length);

    let timer = setTimeout(function() {
       // var u = document.createElement("p");
        var para = document.getElementById("alert2").innerHTML = months[random];
      // para.classList.add('animated swing');
        
        }, 500)
    
        setTimeout(() =>{
            var para2 = document.getElementById("alert2").innerHTML = ' ';
        }, 3000)
    }
