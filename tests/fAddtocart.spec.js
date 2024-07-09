import { test, expect } from "@playwright/test";
import exp from "constants";
import { sign } from "crypto";
const{Dashboard} = require('../PageObjects/Dashboard')
const{DogFood} = require('../PageObjects/DogFood')
const{Cart} = require('../PageObjects/Cart')

test.only("Add item to cart and checkout", async ({page})=>
    {

        //Hovering on menu and navigating to item page
        const dashboard = new Dashboard(page)
        await dashboard.goTO()
        await dashboard.Navigationtodogfood()

        //Clicking on instock filter and validating it and also adding the price filter and moving to cart
        const dogfood = new DogFood(page)
        await dogfood.ValidatingFilter()

        //Asserting if the correct prod is added to cart and click on checkout button
        const cart = new Cart(page)
        await cart.Cartvalid()

        

    })