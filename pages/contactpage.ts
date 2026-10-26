import { Page } from "@playwright/test";
import { commonmethods } from "../utilities/commonmethods";

export class ContactPage extends commonmethods {
    page: Page;
    constructor(page: Page) {
        super(page);//This will send page object to parent class
        this.page = page;
    }

    //+++++++ Create Page Locators +++++++++++++++++
   loc_NewContact_lnk="//a[contains(text(),'New Contact')]";
   loc_SalutationType_Chkb="//select[@name='salutationtype']";
   loc_FirstName_tb="//input[@name='firstname']"
   loc_LastName_tb="//input[@name='lastname']";
   loc_AccountName_Change_btn="//input[@type='button'][@value='Change'][1]";
   loc_AccNm_PopUp_Acc_From_List="(//table[5]//td//a[@href])[3]";
   loc_AccNm_CreateForm="//input[@name='account_name']";
   loc_EmailOptOut_chkb="//td[contains(text(),'Email Opt Out:')]//following::input[@type='checkbox'][@name='emailoptout']";
   loc_Support_End_Date="//input[@name='support_end_date']";
   loc_SaveBtn="(//input[@title='Save [Alt+S]'])[1]";
   loc_Cancel_Btn="(//input[@title='Cancel [Alt+X]'])[1]";
   loc_Help_lnk="(//a[@href='http://www.vtiger.com/products/crm/document.html'][contains(text(),'Help')])[2]";


   //+++++++++ Edit Page +++++++++++++++++

   Verify_loc_Edit_btn="//input[@title='Edit [Alt+E]']";
   Verify_loc_AccName="(//a[@href='index.php?module=Accounts&action=DetailView&record=1'])[1]";
   Loc_Last_Viewed_Contact="//table//tbody//tr//td//a[@title='[Alt+1]']";


   async clickNewContactLnk() {
    await this.clickElement(this.loc_NewContact_lnk);
    }

    async selectSalutationType(index: number) {
        await this.selectFromDropDown(this.loc_SalutationType_Chkb, index);
    }

    async setFirstName(firstname: string)
    {
        await this.setInput(this.loc_FirstName_tb,firstname);
    }

    async setLastName (lastname: string)
    {
        await this.setInput(this.loc_LastName_tb,lastname);
    }

    async clickAccNmChangeBtn ()
    {
        return await this.handlepopup(this.loc_AccountName_Change_btn);
    }

    async pickAccFromPopupList()
    {
        await this.page.waitForTimeout(2000);
        await this.clickElement(this.loc_AccNm_PopUp_Acc_From_List);
        await this.page.waitForTimeout(2000);
    }

    async checkEmailOptOut()
    {
        await this.selectCheckBox(this.loc_EmailOptOut_chkb);
    }

    async setSupportEndDate(supportdate: string)
    {
        await this.setInput(this.loc_Support_End_Date, supportdate);
    }

    async clickSaveBtn()
    {
        await this.clickElement(this.loc_SaveBtn);
    }

    async clickCancleBtn()
    {
        await this.clickElement(this.loc_Cancel_Btn);
    }

    async clickHelpLink()
    {
        return await this.handlepopup(this.loc_Help_lnk);
    }

    async clickLastViewedContact()
    {
        await this.clickElement(this.Loc_Last_Viewed_Contact);
    }

    async clickEditBtn()
    {
        await this.clickElement(this.Verify_loc_Edit_btn);
        
    }

}


