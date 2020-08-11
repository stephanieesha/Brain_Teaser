//page load functions
function page_load(){
    flip_time();
    swap_time_out();
    test(); 
}

//adjust speed based on player's level
var b;
var d;

d = localStorage.getItem('name');
b = parseInt(d);
 //console.log(b);


//get players name
var a;
a = localStorage.getItem('input');
console.log(a);
document.getElementById('player-name').innerHTML = a + ",";
if(a == '')document.getElementById('player-name').innerHTML = 'Player,';
if(a == null)document.getElementById('player-name').innerHTML = 'Player,';
localStorage.clear();

//flip cards after shuffle
function flip_time(){

    setTimeout(function(){
        let my_elements = document.querySelectorAll('.card-flip ');

        let new_elements = my_elements.forEach( x => x.classList.add('flipped'));
            
        }
        
    , b * 5);
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
     }, b);

        //end shuffle
        setTimeout(() =>{
            clearInterval(stop_interval);
        }, b * 3)
          
}

//compare selected cards
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
        console.log(openedCards);
   
         if(len === 2){
            var counts = 0;
                if(openedCards[0] === openedCards[1]){
                    we();
                } 
                else {
                    them()
                }
                console.log(openedCards);
                openedCards = [];
                
            }
         })}); }, (b * 5) + 1);


//get total score
setTimeout(()=> {
    var y = [];
document.querySelectorAll('.card-flip').forEach( (n)=> {
    n.addEventListener('click', event => {

   counttttt = 0;
   counttttt++;
   var l = y.push(counttttt);
   console.log(l);

   switch(l){
     case 2:
        document.getElementById("js-total").innerHTML = 1;
     break;

     case 4:
        document.getElementById("js-total").innerHTML = 2;
     break;

     case 6:
        document.getElementById("js-total").innerHTML = 3;
     break;

     case 8:
        document.getElementById("js-total").innerHTML = 4;
     break;

     case 10:
        document.getElementById("js-total").innerHTML = 5;
     break;

     case 12:
        document.getElementById("js-total").innerHTML = 6;
    
        //display alert when user finishes the game
       alertify.alert('CONGRATULATIONS!!! ' + a ,' Your score is ' + document.getElementById("js-total").innerHTML, function(){ alertify.success("Click 'Restart' to play again"); });
     break;
    }
  
    })
});
}, b * 5);



//get user's score
let card1 = document.getElementsByClassName("card-flip");
let card1s = [...card1];

var openedCards1 = [];

document.querySelectorAll('.card-flip').forEach(item1 => {
    item1.addEventListener('click', event => {


        var inputs1 = document.querySelector('.card-flip');
        var me1 =  item1.getAttribute('value');
    
        openedCards1.push(me1);
        

        //disable selected card
        item1.classList.add('disable-card');


        var len1 = openedCards1.length;
        console.log(openedCards1);

        var count2 = 0;
        //count2++;
        //console.log('count2 is' + count2);

        var uuu = [];

       

        // var filtered = openedCards1.filter(function(element, index, array) {
        //     return (index % 2 === 0);
        //   });

        // var filtered2 = openedCards1.filter(function(element, index, array) {
        // return (index % 2 === 1);
        // });
          

        //     count2++;
        // console.log('this is the       count ' + count2);
        //     //return count2;
        //     var vvv = uuu.push(count2);
        //     console.log('this is vvv ' + uuu);

            // var ee =  me1[0].getAttribute('data') + me1[1].getAttribute('data') 
            // uuu.push([...ee]);
            // console.log('this is vvv ' + uuu);
            for(openedCards1[0] === openedCards1[1]; i = 0 ; i++){
                console.log('ssss'+ i);
                
        // if(openedCards1[0] === openedCards1[1]){
        //    // console.log('i ' + i);
        //     }
                //openedCards1 = [];
        }
    
       

        console.log([].push(openedCards1.splice(-1,1)));
        
       
        if(openedCards1[0] === openedCards1[1]){

            count2++;
            // console.log('this is the       count ' + count2);
            //     //return count2;
            
        }
       

        if(openedCards1[2] === openedCards1[3]){
            count2++;
        }
        if(openedCards1[4] === openedCards1[5]){
            count2++;
        }
        if(openedCards1[6] === openedCards1[7]){
            count2++;
        }
        if(openedCards1[8] === openedCards1[9]){
            count2++;
        }
        if(openedCards1[10] === openedCards1[11]){
            count2++;
        }
        console.log('total5 '+count2--);

    })})

    // function cc(){
    //     var c = 0;
    //     c++;
    //     console.log(c+'c');
    //     return c;
    // }
    
    let card2 = document.getElementsByClassName("card-flip");
let card2s = [...card2];

var openedCards2= [];

document.querySelectorAll('.card-flip').forEach(item2 => {
    item2.addEventListener('click', event => {


        var inputs2 = document.querySelector('.card-flip');
        var me2 =  item2.getAttribute('value');
    
        openedCards2.push(me2);

        

        //disable selected card
        item2.classList.add('disable-card');


        var len2 = openedCards2.length;
        console.log(openedCards2);
        let sub1 = openedCards2.slice(-1,2);
        let sub2 = openedCards2.slice(-1,2);
        let sub3 = openedCards2.slice(-1,2);
        let sub4 = openedCards2.slice(-1,2);
        let sub5 = openedCards2.slice(-1,2);
        console.log(openedCards2);

        console.log('sub1'+ sub1);
        console.log('sub2'+ sub2);
        console.log('sub3'+ sub3);
        console.log('sub4'+ sub4);
        console.log('sub5'+ sub5);
    })})



//animations
//pass
function we(){
    let timer = setTimeout(function() {
        const months = ["Nice Match!", "Correct!", " Keep it Up!", "Great Memory!", "Awesome...", "Weldone!", " Good Job!"];
        const random = Math.floor(Math.random() * months.length);
        var para = document.getElementById("alert1").innerHTML = months[random];

        //pass audio
        playAudio('../Audio/pass.mp3');
        
        }, 500)

        //end animation
        setTimeout(() =>{
            var para2 = document.getElementById("alert1").innerHTML = ' ';
        }, 2000)
}

//pass/fail audio
function playAudio(url) {
    new Audio(url).play();
  }
//fail
function them(){
   let timer = setTimeout(function() {
        const months = ["Wrong match", "Sorry. Incorrect", "Wrong Answer", "Oops! incorrect"];
        const random = Math.floor(Math.random() * months.length);
        var para = document.getElementById("alert2").innerHTML = months[random];
        
        //fail audio
        playAudio('../Audio/fail.mp3');
        
        }, 500)
    
        //end animation
        setTimeout(() =>{
            var para2 = document.getElementById("alert2").innerHTML = ' ';
        }, 2000)
    }
