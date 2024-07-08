const { Module } = require("module")
const {expect} = require("@playwright/test")

class Dashboard {


constructor(page)
{
    this.page = page
    this.wishlisticon = page.locator("a.wishlist[data-id='8230848364796']")
    this.wishlistadd= page.locator('.whislist-added')
    //feedbacktest
    this.feedbackButton = page.locator("._hj-ETLL8__MinimizedWidgetMiddle__label")
    this.smileyButton = page.locator("button[aria-label='Love']")
    this.feedbackText = page.locator("textarea[placeholder='Tell us about your experience...']")
    this.submiFeedback = page.locator("button[class='_hj-SU8LU__styles__primaryButton']")
    this.cancelButton = page.locator("button[class='_hj-F457+__styles__clearButton _hj-rWd-f__EmailStep__clearButton']")
    this.feebackValid = page.locator("._hj-Z5Onj__Title__Title")
    this.cancel = page.locator("button[class='_hj-eEC5y__ExpandedWidget__closeButton']")
    //navigating to dogfood page
    this.hoverDog = page.locator("a[class='menu__moblie ']")
    this.freshFood = page.locator("a[href*='/collections/fresh-food-for-dog']")
    //selecting searchitems
    this.searchBox = page.locator("input[type='search']")
    this.selectingItem = page.locator("a[href*='/search?q=interactive-dog-toys*&type=product']")
    this.searchValidation = page.locator("//header[@class='page-header']//strong[1]")
    this.searchContains = page.locator('.container .page-header')
    //Newsletter 
    this.fillEmail = page.locator("input[name='contact[email]']")
    this.submitButton = page.locator("//input[@value='Submit']")
    this.resultValidation = page.locator("div[class='newsletter-success-modal'] div[class='halo-modal-content']")


}

async goTO(url)
{
    await this.page.goto("https://pawsindia.com")
}




async ValidFunction()
{
    await this.wishlisticon.first().click()
    await this.page.waitForTimeout(3000)
    const bool = await this.wishlistadd.first().isVisible()
    console.log(bool)
    await expect(bool).toBeTruthy()
}

async FeedbackValidation()
{
//Feedback valid function
    await this.feedbackButton.click()
    await this.smileyButton.click()
    await this.feedbackText.fill('wonderful')
    await this.submiFeedback.click()
    await this.cancelButton.click()
//feedbackvalidation
    const submittedBox = await this.feebackValid.textContent()
    expect(submittedBox).toContain('Thank you for sharing your feedback with us!')
    console.log(submittedBox)
    await this.cancel.click()
}

async Navigationtodogfood()
{

//nav to dog food 
    await this.hoverDog.first().hover()
    await this.freshFood.click()    
}

async SearchBox()
{
    await this.page.waitForTimeout(4000)
    await this.searchBox.nth(1).click()
    await this.page.waitForTimeout(4000)
    await this.selectingItem.nth(1).click()
    await expect (this.searchValidation).toHaveText('  "interactive-dog-toys*"  ')
    const textsearch = await this.searchContains.textContent()
    console.log(textsearch)
}

async NewsletterExistinguser()
{
    await this.fillEmail.fill("singhviveku49@gmail.com")
    await this.page.waitForTimeout(4000)
    await this.submitButton.click()
    await this.page.waitForTimeout(4000)
    await expect(this.resultValidation).toHaveText('This email has been registered')

}


}

module.exports = {Dashboard}