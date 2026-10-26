    import {test, expect}from '../fixtures/fixture';
    import { HomePage } from '../pages/homepage';
    import { LoginPage } from '../pages/loginpage';
    import logindata from '../testdata/logindata.json';

  
    test('TC001_Login with valid credentials', async ({mypage}) => {
        const lpobj=new LoginPage(mypage);
        await lpobj.setUserName(logindata['TC001_Login with valid credentials'].Username);
        await lpobj.setPassword(logindata['TC001_Login with valid credentials'].Password);//shift testdata to test case
        await lpobj.clickLoginBtn();
        const homepageobj=new HomePage(mypage);
        await expect(await mypage.locator(homepageobj.loc_Welcome_lnk)).toBeVisible();
    });

     test('TC002_Login with invalid credentials', async ({mypage}) => {
        const loginPageObj = new LoginPage(mypage);
        await loginPageObj.setUserName(logindata['TC002_Login with invalid credentials'].Username);
        await loginPageObj.setPassword(logindata['TC002_Login with invalid credentials'].Password); 
        await loginPageObj.clickLoginBtn();
        await expect(await mypage.locator(loginPageObj.loc_Invalid_Credentials_Msg)).toBeVisible();
    });
    