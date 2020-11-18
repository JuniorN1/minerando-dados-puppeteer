var fs = require("fs");
const puppeteer = require('puppeteer');

var jsonData = fs.readFileSync("./data.json", "utf8");

var jsonData1 = JSON.parse(jsonData)
const data =(jsonData1[0].links)



  a(data);
    
    async function a(data){
 
        const browser = await puppeteer.launch();
        const page = await browser.newPage();    
        await page.goto(`${data}`);
        const listImg = await page.evaluate(()=>{

            const searchLinks = document.querySelectorAll('p');
            const arrayResults = [...searchLinks];
      
            const listLinks= arrayResults.map(links=>{
                return {paragraphi:links.textContent}

            })
          
            return listLinks
            
        })
        fs.writeFile('p.json',JSON.stringify(listImg,null,2),err=>{
            if(err) throw new Error('something sent wrong');
            console.log('well done')
            
        }  )

       
         await browser.close()
        

   

        
    };
   
