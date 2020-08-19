//page load functions
    function page_load(){
        flip_time();
        swap_time_out();
        test(); 
    }

//adjust speed based on player's level
    var bbb;
    var ddd;


//level speed
    ddd = localStorage.getItem('name');
    bbb = parseInt(ddd);


//get players name
    var aaa;
    aaa = localStorage.getItem('input');
    console.log(aaa);
    document.getElementById('player-name').innerHTML = `${aaa},`;
    if(aaa == '')document.getElementById('player-name').innerHTML = 'Player,';
    if(aaa == null)document.getElementById('player-name').innerHTML = 'Player,';
    localStorage.clear();

//flip cards after shuffle
    function flip_time(){

        setTimeout(() => {
            let my_elements = document.querySelectorAll('.card-flip ');

            let new_elements = my_elements.forEach( x => x.classList.add('flipped'));
                
            }
            
        , bbb * 5);
    }


//flip card on click
    document.querySelectorAll('.card-flip').forEach(item => {
    item.addEventListener('click', event => item.classList.toggle('flipped'))
    });
            

    function click_flip(){
        document.querySelectorAll('.card-flip').forEach(item => {
            item.addEventListener('click', event => item.classList.toggle('flipped'))
            });
    }


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


//get total attempts
    setTimeout(()=> {
        var y = [];
        document.querySelectorAll('.card-flip').forEach( (n)=> {
        n.addEventListener('click', event => {

        counttttt = 0;
        counttttt++;
        var l = y.push(counttttt);

        //display attempts
        let attempt = l/2;
        if(Number.isInteger(attempt) == true)  document.getElementById("js-total").innerHTML = attempt;
    
        
        })
    });
    }, bbb * 5);

//compare selected cards
    setTimeout(function(){
    
    let card = document.getElementsByClassName("card-flip");
    let cards = [...card];

    var openedCards = [];
    var openedCards5 = [];
    var flip_cards = [];
    var disabled_cards = [];

    document.querySelectorAll('.card-flip').forEach(item => {
        item.addEventListener('click', event => {

            var inputs = document.querySelector('.card-flip');
            var card_value =  item.getAttribute('value');
           // var cards_ = item.getElementsByClassName('card-flip');
        
             //disable selected card
             item.classList.add('disable-card');


            //push card values into an array
            openedCards.push(card_value);
            console.log(openedCards);

            //push selected cards into an array
            flip_cards.push(item);
            console.log(flip_cards);
           


            var len = openedCards.length;
            console.log(openedCards);
    

            var score_count = 0;
            if(len === 2){
            
                    if(openedCards[0] === openedCards[1]){
                        //pass animation
                        we();

                        //get number of disabled cards
                        disabled_cards.push(item);
                        console.log(disabled_cards);
                        
                        
                        //get player's score count
                        score_count++;
                        openedCards5.push(score_count);
                        var final_score = openedCards5.reduce((x,y) => x + y);
                        

                       // display player's score
                        document.getElementById('js-score').innerHTML = final_score;

                        //end game
                        if(final_score == 6) end_game();
                        
                       
                    } 
                    else {
                        //fail animation
                        them()
                        
                        //reenable cards that don't match
                        flip_cards[0].classList.remove('disable-card');
                        flip_cards[1].classList.remove('disable-card');

                        //flip back cards thar don't match 
                        flip_cards[0].classList.add('flipped');
                        flip_cards[1].classList.add('flipped');
   
                    }
                    //console.log(openedCards);
                    openedCards = [];
                    flip_cards = [];
                    
                }
                if( document.querySelectorAll('.card-flip').item.disabled == true){
                    alert('done');
                }
                
            })}); }, (bbb * 5) + 1);



//display players score when game ends
    function end_game(){
        let players_score = document.getElementById("js-score").innerHTML;
        let total_trials = document.getElementById("js-total").innerHTML;
        let result = (players_score / total_trials) ;
        alertify.alert(`CONGRATULATIONS!!! ${aaa}` ,` Your average is ${result.toFixed(2) * 100} %` ,  () => { alertify.success("Click 'Restart' to play again");
        playAudio('../Audio/congratulations.wav');
     });

    }



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
