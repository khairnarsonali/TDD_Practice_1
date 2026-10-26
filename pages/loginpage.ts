import { Page } from "@playwright/test";
import { commonmethods } from "../utilities/commonmethods";

export class LoginPage extends commonmethods {
    page: Page;
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    loc_UserName_tb="//input[@name='user_name']";
    loc_Password_tb="//input[@name='user_password']";
    loc_Login_Btn="//input[@title='Login [Alt+L]']";
    loc_Invalid_Credentials_Msg="//td[contains(text(),'You must specify a valid username and password.')]"

    async setUserName(username: string) {
    
        await this.setInput(this.loc_UserName_tb, username);
      
    }

  async setPassword(password: string) {
    
        await this.setInput(this.loc_Password_tb, password);
      
    }

    async clickLoginBtn() {
    await this.clickElement(this.loc_Login_Btn);
    }
    
}