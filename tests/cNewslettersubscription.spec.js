import { test, expect } from "@playwright/test";
import exp from "constants";
import { sign } from "crypto";
const{Dashboard} = require('../PageObjects/Dashboard')

test("Already Subscribed user Subscribe for newsletter", async ({page})=>
    {

        //If user has already signed up for newletter then already reg user should be displayed 
        const dashboard = new Dashboard(page)
        await dashboard.goTO()
        await dashboard.NewsletterExistinguser()

    })