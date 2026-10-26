import { expect, test } from '../fixtures/fixture';
import { HomePage } from '../pages/homepage';
import { LoginPage } from '../pages/loginpage';
import homepagedata from '../testdata/homepagedata.json';
import logindata from '../testdata/logindata.json';

  test.beforeEach(async ({ mypage }) => {
    const lpobj = new LoginPage(mypage);
    await lpobj.setUserName(logindata['TC001_Login with valid credentials'].Username);
    await lpobj.setPassword(logindata['TC001_Login with valid credentials'].Password);//shift testdata to test case
    await lpobj.clickLoginBtn();
});

test('TC_001_Search Contact with valid data', async ({ mypage }) => {
  const homepageObj = new HomePage(mypage);
  const expectedResult = homepagedata['TC_001_Search Contact with valid data'].SearchContactInput;
  await homepageObj.searchContact(expectedResult);
  await homepageObj.clickSearchIncon();
  const actualResult = mypage.locator("a[href*='action=DetailView']").filter({ hasText: expectedResult }).first();
  await expect(actualResult).toBeVisible();
  
});

test('TC_002_Verify that the user is able to drag and drop the tabs', async ({mypage}) => {
  const homepageObj=new HomePage(mypage);
  await homepageObj.clickMyAccountLink();
  await homepageObj.clickCustomizeTab();
  await mypage.waitForTimeout(3000);
  await homepageObj.shiftNotesToHelpDesk(homepageObj.loc_Notes_btn, homepageObj.loc_HelpDesk_btn);
  await expect(mypage.locator(homepageObj.loc_Verify_NotesLocation)).toBeVisible();
});


