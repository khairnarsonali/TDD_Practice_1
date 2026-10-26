import { expect, test } from '../fixtures/fixture';
import { ContactPage } from '../pages/contactpage';
import { HomePage } from '../pages/homepage';
import contactdata from '../testdata/contactdata.json';
import homepagedata from '../testdata/homepagedata.json';
import { LoginPage } from '../pages/loginpage';
import logindata from '../testdata/logindata.json'

  test.beforeEach(async ({ mypage }) => {
    const lpobj = new LoginPage(mypage);
    await lpobj.setUserName(logindata['TC001_Login with valid credentials'].Username);
    await lpobj.setPassword(logindata['TC001_Login with valid credentials'].Password);
    await lpobj.clickLoginBtn();
});

test('TC001_Create contact with valid data', async ({mypage}) => {
   const contactpageobj=new ContactPage(mypage);
   await contactpageobj.clickNewContactLnk();
   await contactpageobj.selectSalutationType(1);
   await contactpageobj.setFirstName(contactdata['TC001_Create contact with valid data'].FirstName);
   await contactpageobj.setLastName(contactdata['TC001_Create contact with valid data'].LastName);
   const popup=await contactpageobj.clickAccNmChangeBtn();
   const popupobj=new ContactPage(popup);
   await popupobj.pickAccFromPopupList();
   await contactpageobj.checkEmailOptOut();
   await contactpageobj.setSupportEndDate(contactdata['TC001_Create contact with valid data'].SupportEndDate);
   const accountName = await mypage
    .locator(contactpageobj.loc_AccNm_CreateForm)
    .inputValue();
   await contactpageobj.clickSaveBtn();
   await expect(mypage.locator(contactpageobj.Verify_loc_Edit_btn)).toBeVisible();
   await expect(mypage.locator(contactpageobj.Verify_loc_AccName))
    .toHaveText(accountName);
});

test('TC_002_Verify that Cancel button on create contact is working', async({mypage})=>
{ 
   const contactpageobj=new ContactPage(mypage);
   await contactpageobj.clickNewContactLnk();
   await contactpageobj.clickCancleBtn();
   await expect (mypage).toHaveURL("http://localhost:100/index.php?action=index&module=Home");
});

test('TC_003_Verify that user is able to see help page after clicking on Help link', async ({mypage})=>
{
const contactpageoj=new ContactPage(mypage);
await contactpageoj.clickNewContactLnk();
const popup=await contactpageoj.clickHelpLink();
await expect (popup).toHaveURL(/vtiger/);
});

test.only('TC_004_Verify that the user is able to edit the contact', async ({mypage})=>
{
const contactpageobj=new ContactPage(mypage);
await contactpageobj.clickLastViewedContact();
await contactpageobj.clickEditBtn();
await contactpageobj.selectSalutationType(2);
await contactpageobj.setFirstName(contactdata['TC_004_Update contact with valid data'].FirstName);
await contactpageobj.setLastName(contactdata['TC_004_Update contact with valid data'].LastName);
await contactpageobj.setSupportEndDate(contactdata['TC_004_Update contact with valid data'].SupportEndDate);
const popup=await contactpageobj.clickAccNmChangeBtn();
const popupobj=new ContactPage(popup);
await popupobj.pickAccFromPopupList();
const accountName = await mypage
    .locator(contactpageobj.loc_AccNm_CreateForm)
    .inputValue(); 
   await contactpageobj.clickSaveBtn();
await expect(mypage.locator(contactpageobj.Verify_loc_AccName))
    .toHaveText(accountName);
});


