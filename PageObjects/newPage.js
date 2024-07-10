const { Module } = require("module")
const {expect} = require("@playwright/test")
const exp = require("constants")

class newPAGE {


constructor(page)
{
    this.page = page
    this.firstName = page.locator("input[name='firstName']")
    this.middleName = page.locator("input[name='middleName']")
    this.lastName = page.locator("input[name='lastName']")
    this.telNO= page.locator("[name='tel']")
    this.emailID = page.locator("[name='email']")
    this.kycAuth = page.locator("label[for='kycAuth']")
    this.wsapAuth = page.locator("label[for='whatsappOptIn']")
    this.primButton = page.locator(".primaryButton")
    this.dogName = page.locator("input[placeholder=' ']")
    this.selectDog = page.locator(".select-btn ")
    this.selectBreed = page.locator("input[placeholder='Search']")
    this.option = page.locator(".options")
    this.weightSelect = page.locator(".select-text")
    this.ageGropu = page.locator(".select-text")
    this.finalClick = page.locator(".primaryButton")

}

// async goTO(url)
// {
//     await this.page.goto("https://pawsindia.com")
// }




async newTablocators()
{
 
    await this.firstName.fill('john')
    await this.middleName.fill('doe')
    await this.lastName.fill('kr')
    await this.telNO.fill('9599676771')
    await this.emailID.fill('singhviveku49@gmail.com')
    await this.kycAuth.check()
    await expect(this.kycAuth).toBeChecked()
    await this.wsapAuth.uncheck()
    expect(await this.wsapAuth.isChecked()).toBeFalsy()
    await this.primButton.click()
    await this.page.waitForTimeout(4000)
    await this.dogName.fill('king')
    await this.selectDog.click()

}

async Selectingbreed()
{
    await this.selectBreed.pressSequentially('German')
    const dropdown = this.option
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
    

        const weightdropdownMenu = this.weightSelect.first()
        await weightdropdownMenu.selectOption("Less than or Equal to 10 Kg")

        const agedropdownMenu = this.ageGropu.last()
        await agedropdownMenu.selectOption("3 Months to 24 Months")


        await this.finalClick.click()



}





}
module.exports = {newPAGE}