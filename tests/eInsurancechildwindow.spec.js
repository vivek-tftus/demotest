import { test, expect } from "@playwright/test";
import exp from "constants";
import { sign } from "crypto";


test("Applying for insurance in child window", async ({browser})=>{

    

    const context = await browser.newContext();
    const page = await context.newPage();
//Hitting the URL and navigating to child window
        
        await page.locator("//span[normalize-space()='DOG HEALTH INSURANCE']").click()
        const InsuranceLink = page.locator(".cta-shadow-btn").nth(3);

        const [newPage] = await Promise.all([
    
            context.waitForEvent('page'),        //listen for new page
            InsuranceLink.click(),                //new page is opened 
        
            ])   
            //Filling the details of owner 
        await newPage.locator("[name='firstName']").fill('john')
        await newPage.locator("[name='middleName']").fill('Doe')
        await newPage.locator("input[name='lastName']").fill('kr')
        await newPage.locator("[name='tel']").fill('95998787665')
        await newPage.locator("[name='email']").fill('singhvivek49@gmail.com')
        //clicking on checkbox and validating it
        await newPage.locator("label[for='kycAuth']").check()
        await expect(newPage.locator("label[for='kycAuth']")).toBeChecked()
        //Unclicking on checkbox and validating if it is unchecked
        await newPage.locator("label[for='whatsappOptIn']").uncheck()
        expect(await newPage.locator("label[for='whatsappOptIn']").isChecked()).toBeFalsy()
        await newPage.locator(".primaryButton").click()

        //Filling the dog details and getting quote
        await newPage.waitForTimeout(5000)
        await newPage.locator("input[placeholder=' ']").fill('king')
        await newPage.locator(".select-btn ").click()
//selecting from dropdown after searching 
        await newPage.locator("input[placeholder='Search']").pressSequentially('German')
        const dropdown = newPage.locator(".options")
        await dropdown.waitFor()
        const optionCounts = await dropdown.locator("li").count()
        for(let i=0; i<optionCounts;i++)
            {
                const text = await dropdown.locator("li").nth(i).textContent()
                if(text === 'German Shepherd')
                    {
                        await dropdown.locator("li").nth(i).click()
                        break;
                    }
            }
//selecting from dropdown after selecting directly for age and weight
        const weightdropdownMenu = newPage.locator(".select-text").first()
        await weightdropdownMenu.selectOption("Less than or Equal to 10 Kg")

        const agedropdownMenu = newPage.locator(".select-text").last()
        await agedropdownMenu.selectOption("3 Months to 24 Months")


        await newPage.locator(".primaryButton").click()

    })