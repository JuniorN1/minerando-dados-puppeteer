const puppeteer = require('puppeteer');
const fs = require('fs');


async function instagram(){ 
    //alert("call me")
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/acnurbrasil/');    
    const resultList = await page.evaluate(()=>{

        const searchTags = document.querySelectorAll('article img');
        const arrayResults = [...searchTags];
        const listTags= arrayResults.map(tags=>{
            return {src:tags.src}
        })
    
        return listTags
        
    })
    fs.writeFile('data.json',JSON.stringify(resultList,null,2),err=>{
        if(err) throw new Error('something sent wrong');
        console.clear();
        console.log('well done')
        
    }  )
    await browser.close()

   
 
}

instagram()
