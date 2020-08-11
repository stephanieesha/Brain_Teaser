 //easy level
    document.getElementById('easy').addEventListener('click', ()=>{
    //localStorage.setItem('name',  JSON.stringify(document.getElementById('easy').value)) ;
    //var d = localStorage.getItem('name')

    //set players name
    localStorage.setItem('input', JSON.stringify(document.getElementById('the-input').value));
    //var c = localStorage.getItem('input')
    // console.log(c);
    // console.log(d);
})

//normal level
    document.getElementById('normal').addEventListener('click', ()=>{
   // localStorage.setItem('name', JSON.stringify(document.getElementById('normal').value)) ;
    //var d = localStorage.getItem('name')

    //set players name
    localStorage.setItem('input', JSON.stringify(document.getElementById('the-input').value)) ;
    //var c = localStorage.getItem('input')
    // console.log(c);
    // console.log(d);
})

//hard level
    document.getElementById('hard').addEventListener('click', ()=>{
   // localStorage.setItem('name', JSON.stringify(document.getElementById('hard').value)) ;
    //var d = localStorage.getItem('name')

   //set players name
   localStorage.setItem('input', JSON.stringify(document.getElementById('the-input').value)) ;
   //var c = localStorage.getItem('input');
    // console.log(c);
    // console.log(d);
})

