
import { expect, test } from '../fixtures/fixture';
import { LeadPage } from '../pages/leadpage';
import { LoginPage } from '../pages/loginpage';
import logindata from '../testdata/logindata.json'

  test.beforeEach(async ({ mypage }) => {
    const lpobj = new LoginPage(mypage);
    await lpobj.setUserName(logindata['TC001_Login with valid credentials'].Username);
    await lpobj.setPassword(logindata['TC001_Login with valid credentials'].Password);//shift testdata to test case
    await lpobj.clickLoginBtn();
});

test('TC001_Create lead with empty fieds', async ({mypage}) => {

const leadpageobj=new LeadPage(mypage);
await leadpageobj.clickNewLeadLink(); 
const alertmessage= await leadpageobj.clickLeadSaveBtn();
 expect (alertmessage).toBe('Last Name cannot be empty');

});


