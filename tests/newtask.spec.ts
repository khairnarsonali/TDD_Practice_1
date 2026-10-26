import {test, expect} from '../fixtures/fixture';
import { NewTaskPage } from '../pages/taskpage';
import taskpagedata from '../testdata/taskpagedata.json';
import { LoginPage } from '../pages/loginpage';
import logindata from '../testdata/logindata.json';

  test.beforeEach(async ({ mypage }) => {
    const lpobj = new LoginPage(mypage);
    await lpobj.setUserName(logindata['TC001_Login with valid credentials'].Username);
    await lpobj.setPassword(logindata['TC001_Login with valid credentials'].Password);//shift testdata to test case
    await lpobj.clickLoginBtn();
});

test('TC_001_Create Task', async ({mypage})=>{
const taskpageobj=new NewTaskPage(mypage)
await taskpageobj.clickShowSubMenu();
await taskpageobj.clickNewTaskSubMenulink();
await taskpageobj.setSubject(taskpagedata['TC_001_Create task with valid data'].Subject);
await taskpageobj.selectInputFromDropDown(0); 

const popup=await taskpageobj.clickChangeButton();
const popupobj=new NewTaskPage(popup);
await popupobj.setLastNameInPopup(taskpagedata['TC_001_Create task with valid data'].FirstName);
await popupobj.clickSearchBtninpopup();
await popupobj.selectNamefrompopup();

await taskpageobj.setStartDate();
await taskpageobj.setDueDate(taskpagedata['TC_001_Create task with valid data'].Duedate);
await taskpageobj.clickSaveBtn();
const expectedresult=taskpagedata['TC_001_Create task with valid data'].Subject;
await expect(mypage.locator(taskpageobj.loc_verify_Last_Viewed)).toHaveText(expectedresult);
});


