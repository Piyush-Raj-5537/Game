let userscore =0;
let computerscore =0;
let userscoreupdate=document.querySelector("#user");
let computerscoreupdate=document.querySelector("#computer");
const choices =document.querySelectorAll(".choice");
let msg=document.querySelector("#message");



const computerchoice=()=>{
    const option=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    return option[index];
};

const draw =()=>{
    // console.log("Game is Draw");
    msg.innerText=("Game was draw, Play again");
    msg.style.backgroundColor="black";
}


showwinner=(userwin,userchoice,cpmchoice)=>{
    if(userwin===true){
        // console.log("you won");
        userscore++;
        userscoreupdate.innerText=userscore;
        msg.innerText=`you won, Your ${userchoice} beat ${cpmchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        // console.log("you lose");
        computerscore++;
        computerscoreupdate.innerText=computerscore;
        msg.innerText=`you lose, ${cpmchoice} beat your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    // console.log("user choice is ",userchoice);
    const cpmchoice=computerchoice();
    // console.log("computer choice is ",cpmchoice);

    if(userchoice===cpmchoice){
        draw();
    }
    else{
        let userwin =true;
        if(userchoice==="rock"){
            userwin=cpmchoice==="paper"? false : true;
        }
        else if(userchoice==="scissors"){
            userwin=cpmchoice==="rock"? false:true;
        }
        else{
            userwin=cpmchoice==="scissors"? false:true;
        }
        showwinner(userwin,userchoice,cpmchoice);
    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
