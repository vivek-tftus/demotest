import { test, expect } from "@playwright/test";
import exp from "constants";
import { sign } from "crypto";
const{Dashboard} = require('../PageObjects/Dashboard')

test("Feedback submition and validation then closing the window", async ({page})=>{

        const dashboard = new Dashboard(page)
        await dashboard.goTO()
        await dashboard.ValidFunction()
 
    })