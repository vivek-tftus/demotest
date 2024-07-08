import { test, expect } from "@playwright/test";
import exp from "constants";
import { sign } from "crypto";
const{Dashboard} = require('../PageObjects/Dashboard')
const{Wishlist} = require('../PageObjects/Wishlistbox')


test("Adding item to wishlist and validating", async ({page})=>
    {
    //Clicking on wishlist icon and verifying if icon if clicked or not
        const dashboard = new Dashboard(page)
        await dashboard.goTO()
        await dashboard.FeedbackValidation()

    //Navigating to wishlist box and procedding to checkout
    const wishlist = new Wishlist(page)
    await wishlist.WishlistValidFunction()

    //successfully added prod to wishlist and validated also added to cart and removed 
    


})