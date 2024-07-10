const { Module } = require("module")
const {expect} = require("@playwright/test")

class switchtab {


constructor(page)
{
    this.page = page
    this.Insuranceclick = page.locator("//span[normalize-space()='DOG HEALTH INSURANCE']")
    this.applyButton = page.locator(".cta-shadow-btn")
    //New tab locators


}

async goTO(url)
{
    await this.page.goto("https://pawsindia.com")
}




async tabChange(context,pageopenfunction)
{
    const [newPage] = await Promise.all
    ([

        context.waitForEvent('page'),        //listen for new page
        pageopenfunction()                //new page is opened 
    
    ])   
     
      return newPage
}

async OpeninsuranceTab()
{
    await this.Insuranceclick.click()
    await this.applyButton.nth(3).click()
}



}
module.exports = {switchtab}