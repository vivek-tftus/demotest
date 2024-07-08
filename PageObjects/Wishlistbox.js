const { Module } = require("module")
const {expect} = require("@playwright/test")

class Wishlist {


constructor(page)
{
    this.page = page
    this.wishListHeader = page.locator('.header-wishlist')
    this.wishListpage = page.locator('#wishlist-product-form-8230848364796')
    this.addToCart = page.locator('#product-add-to-cart')
    this.deleteCart = page.locator("//div[@class='ajax-success-modal halo-modal']")
    
   
}

async goTO(url)
{
    await this.page.goto("https://pawsindia.com")
}




async WishlistValidFunction()
{
 await this.wishListHeader.click()
 await this.wishListpage.click()
 await this.addToCart.click()
 await this.deleteCart.click()
}
}
module.exports = {Wishlist}