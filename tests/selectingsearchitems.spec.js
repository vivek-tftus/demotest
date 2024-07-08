import { test, expect } from "@playwright/test";
import exp from "constants";
import { sign } from "crypto";
const{Dashboard} = require('../PageObjects/Dashboard')


test("selecting search items and validating it ", async ({page})=>
    {
        //selecting 1 recomended search result
        const dashboard = new Dashboard(page)
        await dashboard.goTO()
        await dashboard.SearchBox()


        //Succesfully searched and validated the result
        

        





    })