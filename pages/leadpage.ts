import {Page}from "@playwright/test";
import { commonmethods } from "../utilities/commonmethods";

export class LeadPage extends commonmethods{

page:Page;

constructor (page:Page){
    super(page);
    this.page=page;

}

loc_lead_Save_btn= "(//input[@title='Save [Alt+S]'])[1]";
loc_NewLead_lnk= "//a[contains(text(),'New Lead')]";

async clickNewLeadLink()
{
    await this.clickElement(this.loc_NewLead_lnk);
}

async clickLeadSaveBtn(){

    return await this.handleAlert(this.loc_lead_Save_btn);

}


}