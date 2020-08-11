//page load functions
    function page_load(){
        flip_time();
        swap_time_out();
        test(); 
    }


//adjust speed based on player's level
    var bbb;
    //var ddd;


//level speed
   // ddd = JSON.parse(localStorage.getItem('name'));
    bbb = 500 ;


//get players name
    var aaa;
    aaa = JSON.parse(localStorage.getItem('input'));
    console.log(aaa);
    document.getElementById('player-name').innerHTML = `${aaa},`;
    if(aaa == '')document.getElementById('player-name').innerHTML = 'Player,';
    if(aaa == null)document.getElementById('player-name').innerHTML = 'Player,';
    localStorage.clear();

//flip cards after shuffle
    function flip_time(){

        setTimeout(function(){
            let my_elements = document.querySelectorAll('.card-flip ');

            let new_elements = my_elements.forEach( x => x.classList.add('flipped'));
                
            }
            
        , bbb * 5);
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
       // console.log(Arr);

        let sortted = Arr.sort(() => Math.random() - 0.5);

       // console.log(sortted);

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
        }, bbb);

            //end shuffle
            setTimeout(() =>{
                clearInterval(stop_interval);
            }, bbb * 3)
            
    }

//compare selected cards
    setTimeout(function(){
    
    let card = document.getElementsByClassName("card-flip");
    let cards = [...card];

    var openedCards = [];
    var openedCards5 = [];

    document.querySelectorAll('.card-flip').forEach(item => {
        item.addEventListener('click', event => {

            var inputs = document.querySelector('.card-flip');
            var card_value =  item.getAttribute('value');
        
            openedCards.push(card_value);
            console.log(openedCards);

            //disable selected card
            item.classList.add('disable-card');


            var len = openedCards.length;
            console.log(openedCards);
    

            var score_count = 0;
            if(len === 2){
            
                    if(openedCards[0] === openedCards[1]){
                        //pass animation
                        we();

                        //get player's score count
                        score_count++;
                        openedCards5.push(score_count);
                        var final_score = openedCards5.reduce((x,y) => x + y);
                       // console.log(final_score);
                        document.getElementById('js-score').innerHTML = final_score;
                    
                    } 
                    else {
                        //fail animation
                        them()
                    }
                    //console.log(openedCards);
                    openedCards = [];
                    
                }
            })}); }, (bbb * 5) + 1);


//get total score
    setTimeout(()=> {
        var y = [];
        document.querySelectorAll('.card-flip').forEach( (n)=> {
        n.addEventListener('click', event => {

        counttttt = 0;
        counttttt++;
        var l = y.push(counttttt);
        
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
            //if(a === null || a === '') a = 'Player';
                alertify.alert(`CONGRATULATIONS!!! ${aaa}` ,` Your score is ${document.getElementById("js-score").innerHTML} out of ${document.getElementById("js-total").innerHTML}` ,  () => { alertify.success("Click 'Restart' to play again");
                playAudio('../Audio/congratulations.wav');
             });

            //stop game sound
            var x = document.getElementById("game_on");
                x.pause();
                
            break;
            }
        
        })
    });
    }, bbb * 5);



//animations
//pass animation
    function we(){
        let timer = setTimeout(function() {
            const months = ["Nice Match!", "Correct!", " Keep it Up!", "Great Memory!", "Awesome...", "Weldone!", " Good Job!"];
            const random = Math.floor(Math.random() * months.length);
            var para = document.getElementById("alert1").innerHTML = months[random];

            //pass audio
            playAudio('../Audio/pass3.wav');
            
            }, 500)

            //end animation
            setTimeout(() =>{
                var para2 = document.getElementById("alert1").innerHTML = ' ';
            }, 2000)
    }

//play audio function
    function playAudio(url) {
        new Audio(url).play();
    }

//pause audio function
    function pauseAudio() {
        x.pause();
      }


//fail animation
    function them(){
    let timer = setTimeout(function() {
            const months = ["Wrong match", "Sorry. Incorrect", "Wrong Answer", "Oops! incorrect"];
            const random = Math.floor(Math.random() * months.length);
            var para = document.getElementById("alert2").innerHTML = months[random];
            
            //fail audio
            playAudio('../Audio/fail2.wav');
            
            }, 500)
        
            //end animation
            setTimeout(() =>{
                var para2 = document.getElementById("alert2").innerHTML = ' ';
            }, 2000)
        }
