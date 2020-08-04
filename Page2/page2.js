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
item.addEventListener('click', event => item.classList.toggle('flipped')
    )});
        


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

//correct cards
// var correct = document.querySelectorAll('.card-flip');

// document.querySelectorAll('.card-flip').forEach(item => {
//     item.addEventListener('click', event => {
//         if(divs.getAttribute)

//     }
//         )});
var oneClick = 0;
function  setupCookie(){
    var inputs3 = document.querySelector('.card-flip');

    
        oneClick++;
        if(oneClick ==1 ){
            return a();
        }
    
        else if(oneClick ==2){
            return b();
        }

        if (a() == b()){
            alert('yipp');
        }
        else{
            alert('up');
        }
    

    
}

// //click card to select
var count = 0
var a = function select_card1(){
//     // var card1 = document.querySelectorAll('.card-flip');
//     // var card2 = document.querySelectorAll('.card-flip');
//     // var y = card1.isSameNode(card2); 

    var inputs = document.querySelector('.card-flip');
   var me =  inputs.getAttribute('value');


count++;
console.log(count);
if(count == 1){

    console.log('card1: ' + me);
    return me;
;}
}
// var card_1 = select_card1();
// console.log(card_1);

var count1 = 0;


var b = function select_card2(){
//     // var card1 = document.querySelectorAll('.card-flip');
//     // var card2 = document.querySelectorAll('.card-flip');
//     // var y = card1.isSameNode(card2); 

    var inputs = document.querySelector('.card-flip');
   var us =  inputs.getAttribute('value');


count1++;
console.log(count1);
if(count1 == 1){

    
    console.log('card2: ' + us);
    return us;
;}
}

// var card_2 = select_card2();

// console.log(card_2);



//    console.log(me1);
//    //console.log(us);
//     //console.log(Arr);

//     // console.log(card1);
//     // console.log(card2);

//     // console.log(y);


// function setupCookie() {
//     document.cookie = document.cookie="click=1; expires=.......";
// }
function sss(){
    if (a == b){
        alert('yipp');
    }
    else{
        alert('up');
    }
}


function card_select(){
    
    //select_card2();
    setupCookie();
    sss();
}




// create a one-time event
document.querySelector('.card-flip').addEventListener("click", function us() {
    console.log('u');
});

// handler function
// function handler(e) {
// 	// remove this handler
// 	e.target.removeEventListener(e.type, arguments.callee);

// 	alert("You'll only see this once!");
// }