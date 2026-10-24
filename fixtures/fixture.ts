import {test as base, Page, expect} from '@playwright/test';
import config from '../testdata/config.json';

type MyFixtures = {
    mypage: Page;
};

export const test = base.extend<MyFixtures>({
    mypage: async ({ page }, use) => {
        await page.goto(config.AppUrl);
        await use(page);
    }

});
export{expect} from '@playwright/test';

