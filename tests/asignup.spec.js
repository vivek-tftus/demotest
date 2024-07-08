import { test, expect } from "@playwright/test";

test("Sign up", async ({page})=>
    {
        await page.goto("https://pawsindia.com")
        
        await page.locator("#customer_register_link").click()
        await page.locator('#first_name').fill('xyz')
        await page.locator('#last_name').fill('abc')
        await page.locator('#email').fill('keloloc914@bsidesmn.com')
        await page.locator('#create_password').fill('10@Dominoz')
        await page.waitForTimeout(3000)
        await page.locator("[value='Create An Account']").click()
        //page.on('dialog',dialog => dialog.dismiss())
        await page.waitForTimeout(9000)
        
        
        
        const signupValidation = await page.locator('#customer_logout_link').first().textContent()
        
        console.log(signupValidation)
        
        // await expect ((await page.locator('#customer_logout_link').innerText()).trim()).toBe("Log out")
        await expect((await page.locator('#customer_logout_link').first().innerText()).trim()).toBe('Log out');
        










    })