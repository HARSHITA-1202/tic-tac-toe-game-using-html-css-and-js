let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#hg");
let nbtn=document.querySelector("#hgk");
let msgc=document.querySelector(".msg-c");
let msg=document.querySelector("#msg");
let turn0=true;
let count=0;
const winpt=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>
{
    box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turn0){
    box.innerText="O";
    turn0=false;
   }
   else{
    box.innerText = "X";
    turn0=true;
   }
   box.disabled=true;
   count++;
   let iswinner =checkwinner();
   if(count==9&&!iswinner){
    gamedraw();}
   
});
});
const gamedraw=()=>{
    msgc.innerText=`game was a draw`;
    msgc.classList.remove("hide");
    disableboxes();
}
const disableboxes=()=>
{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>
    {
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }
    const resetbtn=()=>
    {
        turn0=true;
        count=0;
        enableboxes();
        msgc.classList.add("hide");
    }
    const showwinner = (winner) => {
        msg.innerText = `Congratulations, winner is ${winner}`;
        msgc.classList.remove("hide");
        disableboxes();
    };
    
const checkwinner=()=>{
    for(let pt of winpt){
        let pos1=boxes[pt[0]].innerText;
        let pos2=boxes[pt[1]].innerText;
        let pos3=boxes[pt[2]].innerText;
        if(pos1 !=""&&pos2 !=""&&pos3 !=""){
            if(pos1==pos2&&pos2==pos3){
                console.log("winner",pos1);
            showwinner(pos1);}
        }
    }
};
nbtn.addEventListener("click",resetbtn);
reset.addEventListener("click",resetbtn);