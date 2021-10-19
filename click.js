const dom={
    timmer: document.querySelector('#timer'),
    red: document.querySelector('#red'),
    green: document.querySelector('#green'),
    question: document.querySelector('#question'),
    options: Array.from(document.querySelectorAll('.option')),
    game: document.querySelector('#game'),
    end: document.querySelector('#end'),
    curentuser: document.querySelector('#currentuser h1'),
    places:Array.from(document.querySelectorAll('td')),
    
    
};

let place1="",place2="",place3="";
    if(localStorage.place1)
        place1=JSON.parse(localStorage.place1);
    if(localStorage.place2)
        place2=JSON.parse(localStorage.place2);
    if(localStorage.place3)
        place3=JSON.parse(localStorage.place3);
let point=0;
let i=-1,countseconds=0;
let v=0;
const data=[{question:"מי הלחין את השיר הידוע יהי החודש הזה?",ans:["האדמור מבעלזא","ר' ירמי דמן","הרב בריער"],correct:0},
{question:"מי אמרה 'בתוך עמי אנוכי יושבת?' ",ans:["האישה הצרפתית","האישה השונמית","יעל הנביאה"],correct:1},
{question:"באיזו שנה נחתם הסכם ריבנטרופ מולטוב?",ans:["1933","1939","1941"],correct:1},
{question:"מי כתב את הספר מאור עיניים?",ans:["רבי מנחם נחום מצ'רנוביל","ר' חיים מוולוזין","רבי פנחס מקוריץ"],correct:0},
{question:"מי אמר את המשפט: ההצלחה היא מעבר מכשלון לכשלון מבלי לאבד את ההתלהבות?",ans:["קלינטון","ביל גייטס","וינסטון צ'רצ'יל"],correct:2}];

const choose=() =>{
    for(let j=0;j<3;j++){
        dom.options[j].onclick=()=>{
            clearInterval(v);
            dom.options.forEach((op)=>{
                op.disabled=true;
            });
            if(j===data[i].correct){
               point+=countseconds;
               console.log(point);
               createquestion();
            }
            else{
                dom.options[j].classList.add('wrongans');
                dom.options[data[i].correct].classList.add('corectans');
                count_s(j);
            }
        }

    }
}
choose();
const manageTimer = () => {
    dom.red.classList.remove('onred');
    dom.green.classList.add('ongreen')
    countseconds=10;
    dom.timmer.innerHTML=countseconds;
    const intervalId = setInterval(() => {
    countseconds--;
    dom.timmer.innerHTML=countseconds;
    if (countseconds ===0){ 
       clearInterval(intervalId);
       dom.options.forEach((op)=>{
           op.disabled=true;
       });
       dom.red.classList.add('onred');
       dom.green.classList.remove('ongreen')  
       console.log(i); 
       dom.options[data[i].correct].classList.add('corectans');
       count_s();
     }
   }, 1000);
   return intervalId;
  }
const createquestion=()=>{
    i++;
    if(i===data.length)
    {
        finsh();
    }
    else{
        dom.options.forEach((op)=>{
            op.disabled=false;
        });
        dom.question.innerHTML=data[i].question;
        dom.options[0].innerHTML=data[i].ans[0];
        dom.options[1].innerHTML=data[i].ans[1];
        dom.options[2].innerHTML=data[i].ans[2];
        v=manageTimer();
    }
    
}
let p={name:"fas",age:"15"};
const count_s = (j=0) => {
    let count =0;
     const intervalIdentity = setTimeout(() => { 
           clearInterval(intervalIdentity);
           dom.options[data[i].correct].classList.remove('corectans');
           dom.options[j].classList.remove('wrongans');
           createquestion();
      
       
     }, 2000);
   
     return intervalIdentity;
   }

const finsh=()=>{
    dom.game.classList.add('hidden');
    dom.timmer.classList.add('hidden');
    dom.end.classList.remove('hidden');
    yourpoint();
    thewin();
    firstplaces();
}
createquestion();

const firstplaces=()=>{
    dom.places[1].innerHTML=place1.name;
    dom.places[2].innerHTML=place1.point;
    dom.places[4].innerHTML=place2.name;
    dom.places[5].innerHTML=place2.point;
    dom.places[7].innerHTML=place3.name;
    dom.places[8].innerHTML=place3.point;
    dom.places.forEach((p) => {
        if(p.innerHTML==="undefined"){
            p.innerHTML="";
        }
    });

}

const yourpoint=()=>{
    dom.curentuser.innerHTML=`${sessionStorage.curent} ${point} נקודות`;
}
const thewin=()=>{
    let name=sessionStorage.curent;
    if(localStorage.place1)
        place1=JSON.parse(localStorage.place1);
    if(localStorage.place2)
        place2=JSON.parse(localStorage.place2);
    if(localStorage.place3)
        place3=JSON.parse(localStorage.place3);
    if(!localStorage.place1||point>parseInt(place1.point)){
        if(localStorage.place1){
            if(localStorage.place2){
                localStorage.place3=localStorage.place2;
                localStorage.place2=localStorage.place1;
            }
            else{
                localStorage.place2=localStorage.place1;
            }
            
        }
        localStorage.place1=JSON.stringify({
            point:point,name:name
        });
    }
    else{
        if(!localStorage.place2||point>parseInt(place2.point)){
            if(localStorage.place2){
                localStorage.place3=localStorage.place2;
            }
            localStorage.place2=JSON.stringify({
                point:point,name:name
            });
        }
        else{
            if(!localStorage.place3||point>parseInt(place3.point)){
                localStorage.place3=JSON.stringify({
                    point:point,name:name
                });
            }
        }
    }
    if(localStorage.place1)
        place1=JSON.parse(localStorage.place1);
    if(localStorage.place2)
        place2=JSON.parse(localStorage.place2);
    if(localStorage.place3)
        place3=JSON.parse(localStorage.place3);
}



