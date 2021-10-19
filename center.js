const dom=
{
    sentences: document.querySelector('#sentences'),
    byAge: document.querySelector('.white'),
    byCategory: document.querySelector('.gray'),
    category: document.querySelector('#_category'),
    age: document.querySelector('#age'),
    child: document.querySelector('.c1'),
    yong: document.querySelector('.c2'),
    teenager: document.querySelector('.c3'),
    adult: document.querySelector('.c4'),
    movie: document.querySelector('.c5'),
    act: document.querySelector('.c6'),
    event: document.querySelector('.c7'),
    lecture: document.querySelector('.c8'),
    
}


const sent=["שימו לב: לחיצה על הזמן מאפשרת לשלוח הודעה ישירות לבעל\ת התוכנית",
"מספרי טלפון ישירים לכל התוכניות באתר","על מבצע החזר כספי למזמינים דרך האתר שמעת?","אפשרות כניסה למופעים בסלון"];
const manageTimer = () => {
 let value =0;
 dom.sentences.innerHTML = sent[value];

  const intervalId = setInterval(() => {
    value++;
    if (value === sent.length) { 
       value=0;
    }
    dom.sentences.innerHTML = sent[value];
    
  }, 5000);

  
  return intervalId;
}
manageTimer();
dom.byAge.onclick=()=>{
    dom.age.classList.remove('hidden');
    dom.category.classList.remove('categoryBy');
    dom.age.classList.add('categoryBy');
    dom.category.classList.add('hidden');
    dom.byAge.classList.remove('gray');
    dom.byAge.classList.add('white');
    dom.byCategory.classList.add('gray');
    dom.byCategory.classList.remove('white');

}
dom.byCategory.onclick=()=>{
    dom.age.classList.add('hidden');
    dom.age.classList.remove('categoryBy');
    dom.category.classList.add('categoryBy');
    dom.category.classList.remove('hidden');
    dom.byAge.classList.add('gray');
    dom.byAge.classList.remove('white');
    dom.byCategory.classList.remove('gray');
    dom.byCategory.classList.add('white');

}
sessionStorage.cat=0;
sessionStorage.age=0;
sessionStorage.filt=0;
dom.child.onclick=()=>{
    sessionStorage.age=1;
    location.href = '/vidoe.html';
}
dom.yong.onclick=()=>{
    sessionStorage.age=2;
    location.href = '/vidoe.html';
}
dom.teenager.onclick=()=>{
    sessionStorage.age=3;
    location.href = '/vidoe.html';
}
dom.adult.onclick=()=>{
    sessionStorage.age=4;
    location.href = '/vidoe.html';
}
dom.movie.onclick=()=>{
    sessionStorage.cat="movie";
    location.href = '/vidoe.html';
}
dom.act.onclick=()=>{
    sessionStorage.cat="act";
    location.href = '/vidoe.html';
}
dom.event.onclick=()=>{
    sessionStorage.cat="event";
    location.href = '/vidoe.html';
}
dom.lecture.onclick=()=>{
    sessionStorage.cat="lecture";
    location.href = '/vidoe.html';
}













