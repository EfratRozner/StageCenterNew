const dom = {
    gallery: document.querySelector('#gallery'),
    header: document.querySelector('h1'),
  }
  
  let vids;
  let filterVids;
 
  const createVid = () => {
    filterVids.forEach((v) => {
      const viDiv = document.createElement('div');
      viDiv.classList.add('vidoes');
      /*viDiv.classList.add('flower');
      viDiv.classList.add('col-lg-3');
      viDiv.classList.add('col-md-4');
      viDiv.classList.add('col-sm-6');
      viDiv.classList.add('bg-light');
      viDiv.classList.add('m-3');*/
  
      const div=document.createElement('div');
      const h4 = document.createElement('h4');
      h4.innerHTML = v.name;
      div.appendChild(h4);
      const link=document.createElement('a');

      const url = new URL('./infromatoin.html', location.href);
      url.searchParams.set('name', v.name);
      link.href = url.href;
      link.innerHTML = v.description;
      link.onclick = () => sessionStorage.setItem('currentProduct', JSON.stringify(v));

      link.classList.add('a');
      link.innerHTML="רוצה לדעת עוד?";
      div.appendChild(link);
      viDiv.appendChild(div);
      
      
  
      const vidoe = document.createElement('video');
      vidoe.src = `vidoe/${v.vid}.mp4`;
      //vidoe.autoplay="autoplay" ;
      vidoe.controls="controls";
      //vidoe.onsubmit="false";
      viDiv.appendChild(vidoe);
  
      dom.gallery.appendChild(viDiv);
    })
  }
  
  $.ajax({
    url: 'center.json',
    success: function( allVidData ) {
      vids = allVidData.vid;
      if(sessionStorage.age&&sessionStorage.age!=0){
        filterVids= vids.filter(v=>v.age.includes(parseInt((sessionStorage.age))));  
        sessionStorage.age=0;
      }
      else{
        if(sessionStorage.cat&&sessionStorage.cat!=0){
          filterVids= vids.filter(v=>v.category===sessionStorage.cat);  
          sessionStorage.cat=0;
        }
        else{
          if(sessionStorage.filt&&sessionStorage.filt!=0){
            filterVids= vids.filter(v=>v.name.includes(sessionStorage.filt));  
            sessionStorage.filt=0;
          }
          else{
            filterVids=vids;
          }
        }
      }
      createVid();
    },
    error: (error) => {
    }
  });
  // בנקודה זו המשתנה flowers
  // עדיין יהיה ריק!!!
  // ואי אפשר לקרוא עדיין לפונקציה שיוצרת את הגלריה!!!
  // createFlowers();