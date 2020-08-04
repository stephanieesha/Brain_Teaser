//page load functions

function page_load(){
    flip_time();
    swap_time_out();
    stop_time();
    test();
}


//flip cards to the back
var flips = true ;
if(flips == true){

    function flip_time(){

        setTimeout(function(){
            let my_elements = document.querySelectorAll('.card-flip .card-back');
    
            let new_elements = my_elements.forEach( x => x.style.transform = 'rotateY(0deg)');
            
            return new_elements;
         }
         
        , 15000);
    }
}



//flip cards to the front

    // document.getElementsByClassName('card-flip').addEventListener('click', () => {
        // let myElements = document.querySelectorAll('.card-flip .card-back');

        // let newElements = myElements.forEach( x => x.style.transform = 'rotateY(0deg)');
        
        // return newElements;

    //   let  list = document.getElementsByClassName("card-flip");

    //     let new_list = list.forEach(x = x.addEventListener("click", function () {
    //         alert('hi');
    //         return new_list;
    //     }));

        // document.querySelectorAll('.card-flip').forEach(item => {
        //     item.addEventListener('click', event => {
        //       //handle click

        //       flips = false;
         
        // alert('me');
        
        

        //     })
        //   })
        // for (var i = 0; i < list.length; i++) {
        //   list[i].addEventListener("click", function () {
        //       alert('hi');
        //   });
        // }

       


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