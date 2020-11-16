const puppeteer = require('puppeteer');
const fs = require('fs');


async function screen(){
    const teste = await
    (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/acnurbrasil/');
   
    const listImg = await page.evaluate(()=>{
        const seachImg = document.querySelectorAll('main article img');
        const arrayResults = [...seachImg];

        const listImg= arrayResults.map(img=>{
            return img.src

        })
        
     return listImg
    })

    fs.writeFile('instagram.json',JSON.stringify(listImg,null,2),err=>{
        if(err) throw new Error('something sent wrong');
        console.log('well done')
    })

    await browser.close();
    })();
    return "pontro";
}
console.clear();
console.log("loading")
screen().then(()=>{
    console.clear();
    console.log('pronto');
}
)

