const dom={
    form: document.querySelector('#form')
}

let i=0;


const users=(first,last,mail,pass)=>{
    return{
        name:first+" "+last,
        mail,
        password:pass
    }
}
dom.form.onsubmit=(event)=>{
    if(!(localStorage.num)){
        localStorage.num=1;
    }
    else{
        localStorage.num=(parseInt(localStorage.num)+1);
    }
    let user=users(dom.form.fName.value,dom.form.lName.value,dom.form.mail.value,dom.form.pasword.value);
    localStorage[`user${localStorage.num}`]=JSON.stringify(user);
    location.href = '/center.html';
}
