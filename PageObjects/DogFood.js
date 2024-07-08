const { Module } = require("module")
const {expect} = require("@playwright/test")
const exp = require("constants")

class DogFood {


constructor(page)
{
    this.page = page
    this.inStock = page.locator("label[for='Filter-Availability-1']")
    this.filter1 = page.locator("#Filter-Price-2")
    this.filter2 = page.locator("#Filter-Price-2")
    this.applyFilter = page.locator(".apply__button")
    this.selectProduct = page.locator("form[id='grid-product-form--7088405446816-template--16728825200892__main'] a[title='Paneer & Brown Rice 300gm']")
    // this.selectPack = page.locator("label[title='Pack of 5'][for='SingleOptionSelector0-Pack of 5-7088405446816-template--16728825200892__main']")
    // this.addToCart = page.locator("a[data-href*='/products/paneer-brown?_pos=1&_fid=8470fcc40&_ss=c&variant=41219752755360']")
    this.selectPack = page.locator("label[title='Pack of 5'][for='SingleOptionSelector0-Pack of 5-7088405446816-template--16728825200892__main']")
    this.submitButton = page.locator("button[data-form-id='#swatch-grid-product-form--7088405446816-template--16728825200892__main-']")
    this.cartMovement = page.locator("div[class='btn-actions'] a[class='btn btn-view-cart']")
}


async goTO(url)
{
    await this.page.goto("https://pawsindia.com")
}




async ValidatingFilter()
{
    await this.inStock.click()
    await expect(await this.inStock).toBeChecked()
    await this.page.waitForTimeout(3000)
    await this.filter1.nth(0).fill('1000')
    await this.filter2.nth(1).fill('3000')
    await this.applyFilter.click()
    await this.page.waitForTimeout(4000)
    await this.selectProduct.first().click()
    await this.page.waitForTimeout(5000)
    await this.selectPack.click()
    await this.page.waitForTimeout(5000)
    await this.submitButton.click()
    await this.cartMovement.click()
   


}



}
module.exports = {DogFood}