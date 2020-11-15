 const puppeteer = require('puppeteer');
 (async () => {
            const browser = await puppeteer.launch({handler:false});
            const page = await browser.newPage();
            await page.goto('https://www.instagram.com/ibgeoficial/');
            await page.evaluate(()=>{
                
                const listDados = document.querySelector('article img');
                const arrayList = [...listDados];
                

               const list = arrayList.map(img=>{
                    return {
                        a:img
                    }
                })
            console.log(list);
            }
            );
        
            await browser.close();
        })();