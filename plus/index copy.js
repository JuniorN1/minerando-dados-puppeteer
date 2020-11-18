const puppeteer = require('puppeteer');
const fs = require('fs');


async function screen(){
  
    
    (async () => {
        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();
        // await page.goto('https://www.instagram.com/acnurbrasil/');
        await page.goto('https://www.google.com/search?q=nubank+dados');
        const listImg = await page.evaluate(()=>{

            const searchLinks = document.querySelectorAll('div a');
            const arrayResults = [...searchLinks];
            const listLinks= arrayResults.map(links=>{
                return {links:links.href}

            })
        
            return listLinks
            
        })
        fs.writeFile('data.json',JSON.stringify(listImg,null,2),err=>{
            if(err) throw new Error('something sent wrong');
            console.log('well done')
            
        }  )

       
        await browser.close()
        
    })();
   
    return "pontro";
}

console.log("loading")
screen().then(()=>{
  
    console.log('pronto');
}
)

