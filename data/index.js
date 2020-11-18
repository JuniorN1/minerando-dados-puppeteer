const puppeteer = require('puppeteer');
const fs = require('fs');


  
    
    // (async () => {
    //     const browser = await puppeteer.launch({headless:false});
    //     const page = await browser.newPage();
    //     await page.goto('https://www.instagram.com/acnurbrasil/');    
    //     const resultList = await page.evaluate(()=>{
    //         const searchTags = document.querySelectorAll('article img');        
    //         const arrayResults = [...searchTags];
    //         const listTags= arrayResults.map(tags=>{
    //             return {
    //                 src:tags.src
    //             }
    //         })        
    //         return listTags
            
    //     })
    //     fs.writeFile('C:/Xampp/htdocs/json/pictures.json',JSON.stringify(resultList,null,2),err=>{
    //         if(err) throw new Error('something sent wrong');
    //         console.clear();
    //         console.log('well done')
            
    //     }  )

       
    //      await browser.close()
        
    // })();
    // 
    
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.youtube.com/channel/UC6EzCC6PoJI_l7Uc5ldVlhw/videos');    
        const resultList = await page.evaluate(()=>{

            const searchTags = document.querySelectorAll('div  ytd-grid-renderer ytd-grid-video-renderer ytd-thumbnail  a#thumbnail');
            const arrayResults = [...searchTags];
         
            const listTags= arrayResults.map(tags=>{
                return {href:tags.href}
            })
         
           
            return listTags
            
        })
        fs.writeFile('videos.json',JSON.stringify(resultList,null,2),err=>{
            if(err) throw new Error('something sent wrong');
            console.clear();
            console.log('well done')
            
        }  )

       
       ///  await browser.close()
        
    })();
   



