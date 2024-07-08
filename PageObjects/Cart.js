const { Module } = require("module")
const {expect} = require("@playwright/test")

class Cart {


constructor(page)
{
    this.page = page
    this.cartValidation = page.locator("div[class='cart--info'] span")
    this.checkout = page.locator("div[class='gokwik-checkout']")
    
   
}

async goTO(url)
{
    await this.page.goto("https://pawsindia.com")
}




async Cartvalid()
{
    const productName = await this.cartValidation.innerText()
    expect(productName).toContain('Paneer & Brown Rice 300gm')
    console.log(productName)
    await this.checkout.first().click()


}
}
module.exports = {Cart}