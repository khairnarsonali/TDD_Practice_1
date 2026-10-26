import {Page} from '@playwright/test';
import { commonmethods } from '../utilities/commonmethods';

export class NewTaskPage extends commonmethods{

     page: Page;
  
    constructor(page:Page){
           super(page);
       this.page=page;
    }

    loc_Show_Sub_Menu="//img[@src='themes/blue/images/showsubmenu.gif']";
    loc_NewTask_SubMenu_lnk="//a[contains(text(),'New Task')]";
    loc_Subeject_tb="//input[@name='subject']";
    loc_Select_DropDown_Value="//select [@name='parent_type']";
    loc_taskInfo_Change_Btn="//input[@title='Change [Alt+G]']";
    loc_popup_LastName_tb="//input[@name='last_name']";
    loc_popup_Search_Btn="//input[@title='Search [Alt+Q]']";
    loc_popup_select_FirstName_FromList="//table//tbody//tr//td//tr[5]//a";
    loc_StartDate_tb="//input[@name='date_start']";
    loc_taskinfo_Save_btn="input[title='Save [Alt+S]']";
    loc_taskinfo_DueDate_tb="input[name='due_date']";
    loc_verify_Last_Viewed="//a[@title='[Alt+1]']";

 async clickShowSubMenu()
    {
        await this.handlemousehover(this.loc_Show_Sub_Menu);
    }
    
   async clickNewTaskSubMenulink()
   {
    await this.clickElement(this.loc_NewTask_SubMenu_lnk);
   } 

   async setSubject(subject: string)
   {
    await this.setInput(this.loc_Subeject_tb, subject);
   }

   async selectInputFromDropDown(index: number)
   {
    await this.selectFromDropDown(this.loc_Select_DropDown_Value, index);
   }

   async clickChangeButton()
   {
    return await this.handlepopup(this.loc_taskInfo_Change_Btn);
   }

   async setLastNameInPopup(lastname: string)
   {
    await this.setInput(this.loc_popup_LastName_tb, lastname);
   }

   async clickSearchBtninpopup()
   {
    await this.clickElement(this.loc_popup_Search_Btn);
   }

   async selectNamefrompopup()
   {
    await this.clickElement(this.loc_popup_select_FirstName_FromList);
   }

   async setStartDate()
   {
    await this.setNextWorkingDate(this.loc_StartDate_tb);
   }

   async setDueDate(duedate: string)
   {
    await this.setInput(this.loc_taskinfo_DueDate_tb, duedate);
   }

   async clickSaveBtn()
   {
    await this.clickElement(this.loc_taskinfo_Save_btn);
   }

}
