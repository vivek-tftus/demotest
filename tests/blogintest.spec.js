import { test, expect } from "@playwright/test";
import exp from "constants";
import { sign } from "crypto";
const {loginpage} = require('../PageObjects/loginpage')

test("Sign in", async ({page})=>
    {
        

        //sign in and validating the sign in is successful or not
        const email = "singh.vivek@tftus.com"
        const password = "10@Dominoz"
        const Loginpage = new loginpage(page)
        await Loginpage.goTO()
        await Loginpage.ValidLogin(email,password)

        
        // await page.waitForTimeout(1000);
        // const signinValidation = Loginpage.signinvalidation
        // expect((Loginpage.signinvalidation.innerText()).trim()).toBe("MY ACCOUNT");
        // console.log(signinValidation);


    //     //Going back to home page and searching the product
        // await page.locator('.header-logo:visible').click();
        
        // await page.locator("input[type='search']").nth(1).pressSequentially('BENEBONE');
        
        // await page.locator("div[class='nav-search'] div[class='header-search__form'] button[type='submit'] svg").click();
        
        
    //     //Scrolling to the bottom of page and validating all prod on the page of BENEBONE
    //     await page.evaluate(async () => {
    //         await new Promise((resolve, reject) => {
    //             let totalHeight = 0;
    //             const distance = 100; // scroll distance
    
    //             const scrollInterval = setInterval(() => {
    //                 const scrollHeight = document.documentElement.scrollHeight;
    //                 window.scrollBy(0, distance);
    //                 totalHeight += distance;
    //                 if (totalHeight >= scrollHeight) {
    //                     clearInterval(scrollInterval);
    //                     resolve();
    //                 }
    //             }, 100); // scroll every 100ms, adjust as needed
    //         });
    //     });


    //     //verifying the sold out product button is clickable or not
    //     await page.waitForLoadState('networkidle');
    //     await page.waitForSelector('div[data-product-id="product-7786981982460"]');
    //     const disabledButton = await page.locator("button[disabled='disabled']");
    //     const isDisabled = await disabledButton.evaluate(Element=> Element.disabled);
    //     expect(isDisabled).toBeTruthy();
    
    
    })