import { Page } from "@playwright/test";
import { commonmethods } from "../utilities/commonmethods";

export class HomePage extends commonmethods {
    page: Page;
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    loc_Welcome_lnk="//strong[contains(text(),'Welcome')]";
    loc_Search_tb="input[name='query_string']";
    loc_Search_icon="//input[@name='query_string']//following::input[@type='image']";
    loc_MyAccount_lnk="//a[contains(text(),'My Account')]";       
    loc_CustomizeTab_btn="//input[@title='Customise [Alt+C]']";
    loc_Notes_btn="//td[@id='cl9']";
    loc_HelpDesk_btn="//td[@id='cl11']";
    loc_Verify_NotesLocation="//td[@id='cl11'][contains(text(),'Notes')]";
    



    async searchContact(contact: string)
    {
        await this.setInput(this.loc_Search_tb, contact);
    }

    async clickSearchIncon()
    {
        await this.clickElement(this.loc_Search_icon);
    }

    async clickMyAccountLink()
    {
        await this.clickElement(this.loc_MyAccount_lnk);
    }


    async clickCustomizeTab()
    {
        await this.clickElement(this.loc_CustomizeTab_btn);
    }



    async shiftNotesToHelpDesk(sourceTab: string = this.loc_Notes_btn, targetTab: string = this.loc_HelpDesk_btn)
    {
        await this.handlMouseDragDrop(sourceTab, targetTab);
    }

   
}

