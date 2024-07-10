import { test, expect } from "@playwright/test";
import exp from "constants";
import { sign } from "crypto";
const{switchtab} = require('../PageObjects/switchtab')
const{newPAGE} = require('../PageObjects/newPage')

test.only("Applying for insurance in child window", async ({page, context})=>
 {
    
    const SWITCHTAB = new switchtab(page)
    
    await SWITCHTAB.goTO()
    const newtab =  await SWITCHTAB.tabChange(context, async ()=>
    await SWITCHTAB.OpeninsuranceTab()
    )

    await newtab.waitForTimeout(5000)

    const NEWPAGE = new newPAGE(newtab)
    await NEWPAGE.newTablocators()
    await NEWPAGE.Selectingbreed()
    

})