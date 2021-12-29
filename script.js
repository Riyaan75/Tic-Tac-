console.log("Welcome to Tic Tac Toe")
let music=new Audio("music.mp3");
let music1 =new Audio("coffin dance green screen  AETrim1640759927744.mp3")
let audioturn = new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3")
let turn="X"
let isgameover=false;

//Function to change the turn
const changeTurn = ()=>{
 return turn === "X"?"0":"X"
}

//Fuction to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        //first 3 elements are for winning and last 3 are for line drawing
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            if(typeof music1.loop == 'boolean')
            {
                music1.loop=true;
            }
            else
            {
                music1.addEventListener('ended',function(){
                    this.currentTime=0;
                    this.play();

                },false);
            }
            music1.play("coffin dance green screen  AETrim1640759927744.mp3");
            
        }
    })
}

//main logic
music.play()
let boxes =document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext= element.querySelector('.boxtext')
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioturn.play();
            checkWin()
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText ="turn for " + turn;   
               
            }
        }
    }    )

})
//add on click listener to reset 
reset.addEventListener('click',(e)=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText=""
        turn="X";
        isgameover=false
        music1.loop=false;
        document.querySelector(".line").style.width = "0vw";
            document.getElementsByClassName("info")[0].innerText ="turn for " + turn;   
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = 0;
           
           
    })
})