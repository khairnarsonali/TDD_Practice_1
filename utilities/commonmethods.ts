import { Page } from "playwright";

export class commonmethods {
    page:Page;// page is a variable in which we store the playwright page object

    constructor(page:Page){ //here the constructor got parameter i.e. page
        this.page=page;   //here whichever page object we are getting from outside we are putting in this.page of our class. So that, the methods in the class can use it.
    }

    async waitForElement(locator: string) {
            await this.page.waitForSelector(locator, {state:"visible"});  
       
        }

        
    async setInput(locator: string, value: string) {
        try {
            await this.waitForElement(locator);
            await this.page.fill(locator, value);
        } catch (error) {
            console.error("Error while setting input value:", error);
            throw error;
        }
    }

    async clickElement(locator: string) {
        try {
            await this.page.click(locator);
        } catch (error) {
            console.error("Error while clicking element:", error);
            throw error;
        }
    }

    async selectFromDropDown(locator: string, index: number) {
        try {
            await this.waitForElement(locator);
            await this.page.selectOption(locator, { index });
        } catch (error) {
            console.error("Error while selecting dropdown option:", error);
            throw error;
        }

}

    async handlepopup(locator:string)
    {
      
        const popuppromise=this.page.waitForEvent("popup");//Wait for the poup to be open
        await this.clickElement(locator);//click on the element which will open the popup
        const popup=await popuppromise;//once the pop up will open get the page object of it so that i can work on new popup
        await popup.waitForLoadState();//wait till the pop up loads
        return popup;//Give me that popup

    }

    async selectCheckBox(locator:string)
    {
        try{
        await this.waitForElement(locator);
        await this.page.check(locator);
        }catch (error){
        console.error("Error while selecting checkbox", error);
        throw error;
    }
        
    }

    async handlMouseDragDrop(sourcelocator: string, targetlocator: string)
    {
        try {
            await this.waitForElement(sourcelocator);
            await this.waitForElement(targetlocator);
            await this.page.locator(sourcelocator).dragTo(this.page.locator(targetlocator));
        } catch (error) {
            console.error("Error while handling the drag and drop operation", error);
            throw error;
        }
    }
    

async handleAlert(locator: string) {
    let message = "";

    this.page.on("dialog", async (dialog) => {
        message = dialog.message();
        // await new Promise(resolve => setTimeout(resolve, 1000));
        await this.page.waitForTimeout(3000);
        await dialog.accept();
    });
    await this.clickElement(locator);
    return message;
}

async handlemousehover(locator: string)
{
    await this.page.locator(locator).hover();
}


async setNextWorkingDate(locator: string) {
    const date = new Date();

    // Public holiday dates in YYYY-MM-DD format
    const holidays = [
        "2026-10-26",
        "2026-12-25",
        "2027-01-26"
    ];

    do {
        date.setDate(date.getDate() + 1);

        const formattedDate = [
            date.getFullYear(),
            String(date.getMonth() + 1).padStart(2, "0"),
            String(date.getDate()).padStart(2, "0")
        ].join("-");

        const isWeekend =
            date.getDay() === 0 || date.getDay() === 6;

        const isHoliday = holidays.includes(formattedDate);

        if (!isWeekend && !isHoliday) {
            await this.page.locator(locator).fill(formattedDate);
            return;
        }

    } while (true);
}


}
