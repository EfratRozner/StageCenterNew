const dom=
{
    name: document.querySelector('h1'),
    for:document.querySelector('#for'),
    createor: document.querySelector('#createor'),
    describe:document.querySelector('#describe'),
    weWere: document.querySelector('#weWere'),
    conection:document.querySelector('#conection'),
    details: document.querySelector('#details'),
    red: document.querySelector('#notexist')

};
let currentPlane;
let vids=[];
const url = new URL(location.href);
const currentPlaneName = url.searchParams.get('name');
const createInfo=()=>{
    vids.fore
    vids.forEach((v) => {
        if(currentPlaneName===v.name)
        {
            currentPlane=v;
        }
      })
    dom.name.innerHTML=currentPlane.name;
    dom.for.innerHTML+=currentPlane.for;
    dom.createor.innerHTML+=currentPlane.create;
    dom.conection.innerHTML+=currentPlane.mail;
    dom.describe.innerHTML+=currentPlane.describe;
    dom.weWere.innerHTML+=currentPlane.weWere;
    if(currentPlaneName==='מי בראש?'){
        
        const link=document.createElement('a');
        const i=document.createElement('i');
        i.classList.add('fas');
        i.classList.add('fa-hand-point-left');
        link.appendChild(i);   
        link.innerHTML+="לחץ כאן למשחק דוגמא";     
        link.classList.add('clik');
        link.href='clik.html';
        dom.details.appendChild(link);
        if(!sessionStorage.curent){
            console.log("!!!!!!!!");
            dom.red.classList.remove('hidden');
            link.href='#';
        }
    }

}
$.ajax({
    url: 'center.json',
    success: function( allVidData ) {
        vids = allVidData.vid;
        
        createInfo();
    },
    error: (error) => {
    }
  });