const { Module } = require("module")

class loginpage {


constructor(page)
{
    this.page = page
    this.loginnavbutton = page.locator('.sign_in_md')
    this.useremail = page.locator('[placeholder="Email Address"]')
    this.userpassword = page.locator('[placeholder="Password"]')
    
    this.SigninButton = page.locator('.btn-login')
    this.signinvalidation = page.locator('.page-header')

}

async goTO(url)
{
    await this.page.goto("https://pawsindia.com")
}




async ValidLogin(username, password)
{
    await this.loginnavbutton.click()
    await this.useremail.fill(username)
    await this.userpassword.fill(password)
    await this.page.waitForTimeout(3000)
    await this.SigninButton.click()
    await this.signinvalidation.textContent()
    
}
}
module.exports = {loginpage}
