const Dom=
{
    conect: document.querySelector('.conect'),
    in: document.querySelector('.button'),
    search: Array.from(document.querySelectorAll('.search')),
    red: document.querySelector('#erorr')

}
Dom.conect.onsubmit=(event)=>{
    event.preventDefault();
    let name=Dom.conect.name.value;
    let pasword=Dom.conect.password.value;
    let i=parseInt(localStorage.num);
    Dom.conect.classList.add('hidden');
    Dom.conect.name.value="";
    Dom.conect.password.value="";
    if(!(checuser(i,name,pasword))){
        Dom.red.classList.remove('hidden');
        removeerror();

    }
    else{
        sessionStorage.curent=name;
        sessionStorage.curentpas=pasword;
    }
       
    }
       


const checuser=(i,name,pasword)=>{
    for(i=i;i>0;i--){
        let curent=JSON.parse(localStorage[`user${i}`]) ;
        console.log(i)
        if(curent.name===name&&curent.password===pasword){
            return true;
        }
      
    }
    return false;
}

Dom.in.onclick=()=>{
    Dom.conect.classList.remove('hidden');
   }
   
const removeerror=()=>{
    setTimeout(() => {
    Dom.red.classList.add('hidden');
  }, 2000);
}
const func=function(){
    Dom.search.forEach(function (s) {
        s.onchange=(event)=>{
            sessionStorage.filt=event.target.value;
            s.value="";
            location.href = '/vidoe.html';
        }
      });
}
func();

