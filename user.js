const dom={
    cant: document.querySelector('#cant'),
    form: document.querySelector('#form'),
    conect: document.querySelector('.conect'),

}

const fill=(name)=>{
    for(i=parseInt(localStorage.num);i>0;i--){
        let curent=JSON.parse(localStorage[`user${i}`]) ;
        console.log(i)
        if(curent.name===name&&sessionStorage.curentpas===curent.password){
            dom.form.fName.value=curent.name.substring(0,curent.name.indexOf(" "));
            dom.form.lName.value=curent.name.substring(curent.name.indexOf(" "),curent.name.length);
            dom.form.mail.value=curent.mail;
            dom.form.pasword.value=curent.password;

            return;
        }
      
    }
}
       





const chec=()=>{
    if(!sessionStorage.curent){
        dom.cant.classList.remove('hidden');
        dom.form.classList.add('hidden');
    }
    else{
        let user=sessionStorage.curent;
        fill(user);
    }
}

chec();


