

 async function instagram(){
  document.getElementById('paginacao').innerHTML=''
  document.getElementById('root').innerHTML=''
    const tags = document.getElementById('root');
    var file = "./data/pictures.json"; 
    const response = await fetch(file);
    const data = await response.json();

    
   data.map(items=>{
        const novo = document.createElement('img')
         novo.setAttribute('src',items.src)   
         novo.setAttribute('class','imgList') 
         tags.appendChild(novo);
       
       

    })

}
async function readJsonFileYoutube(){  
  var selectFileYoutube = "./data/videos.json"; 
  const response = await fetch(selectFileYoutube)
  const dataFileYoutube = await  response.json();
  return dataFileYoutube;

}
 async function showMore(countShowVideos){
  const getElementIdRoot = document.getElementById('root'); 
  const setInitialForValue = countShowVideos;
  const allUrlVideosYoutubeChannelAcnur = await readJsonFileYoutube();
  const countAllvideosYoutubeChannelAcnur = allUrlVideosYoutubeChannelAcnur.length;
  const setTotalShowVideoForClick = 4 ;
  countShowVideos +=  setTotalShowVideoForClick;
  if(countShowVideos > countAllvideosYoutubeChannelAcnur){
    const localValueTemp = countShowVideos;
    localValueTemp-= countAllvideosYoutubeChannelAcnur;
    countShowVideos -=localValueTemp;
  }
  for(var i = setInitialForValue; i<countShowVideos;i++){
      const newVideoIframeYoutube  =  await document.createElement('iframe')
     await newVideoIframeYoutube.setAttribute('class','videoList') 
     await  newVideoIframeYoutube.setAttribute('src',allUrlVideosYoutubeChannelAcnur[i].href.replace('/watch?v=','/embed/')) 
    
     await getElementIdRoot.appendChild(newVideoIframeYoutube);
  }  
  document.querySelector('button').setAttribute('onclick','showMore('+countShowVideos+')')
  }

async function paginacaoYoutube(pagina,tam){
  document.getElementById('root').innerHTML=''
  document.querySelector('footer').innerHTML =''
  const getTagFooter = document.querySelector('footer');
  const createButtonShowMore = document.createElement('button');
  createButtonShowMore.setAttribute('onclick','showMore(0)')
  createButtonShowMore.setAttribute('class','buttonShowMore')
  const createTextButton = document.createTextNode('Mostrar Mais');
  createButtonShowMore.appendChild(createTextButton);
  getTagFooter.appendChild(createButtonShowMore)
  await showMore(5)
}