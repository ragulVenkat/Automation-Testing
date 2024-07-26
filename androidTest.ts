//"appium:appPackage": "com.saucelabs.mydemoapp.rn ",
//"appium:appActivity": ".MainActivity"




describe('My Login application', () => {


    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });
    it('should login with valid credentials', async () => {


        await (await $('~open menu')).click()
        await driver.pause(2000)

        await (await $('~menu item log in')).click();
        await browser.pause(2000)
    
        await (await $('~Username input field')).setValue("madhu.com");
        await (await $('~Password input field')).setValue("10203040");
        await (await $('~Login button')).click();
        await browser.pause(2000)
    });
});

      describe('My Login application', () => {


            var originalTimeout;
        
            beforeEach(function() {
                originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
            });
            it('should login with valid credentials', async () => {
        
        
                await (await $('~open menu')).click()
                await driver.pause(2000)
        
                await (await $('~menu item log in')).click();
                await browser.pause(2000)
            
                await (await $('~Username input field')).setValue("madhu.com");
                await (await $('~Password input field')).setValue("10203040");
                await (await $('~Login button')).click();
                await browser.pause(2000)
    //    // LOGIN 
    //     await (await $('~open menu')).click()
    //     await driver.pause(2000)

    //     await (await $('~menu item log in')).click();
    //     await browser.pause(2000)
    
    //     await (await $('~Username input field')).setValue("bob@examplecom");
    //     await (await $('~Password input field')).setValue("10203040");
    //     // await browser.pause(5000)
    //     await (await $('~Login button')).click();
        
        // console.log("Output Data: " + await (await $('~Username input field')).getText());
        // console.log("Output Data: " + await (await $('~Username-error-message')).getText());
        
        
        // await browser.pause(5000)

           //URL LINK
        /**await (await $('~open menu')).click()
        await driver.pause(2000)

        await (await $('~container header')).click();
        await browser.pause(2000)
        
        await (await $('~URL input field')).setValue("https://www.facebook.com/");
        await (await $('~Go To Site button')).click();
        await browser.pause(2000)

        **/
        //SHOPPING A PRODUCT
/**
        await (await $('~store item')).click()
        await driver.pause(2000)

        await (await $('~Add To Cart button')).click();
        await browser.pause(2000)

        await (await $('~cart badge')).click()
        await driver.pause(2000)

        await (await $('~Proceed To Checkout button')).click();
        await browser.pause(2000)

        await (await $('~Username input field')).setValue("bob@example.com");
        await (await $('~Password input field')).setValue("10203040");
        await (await $('~Login button')).click();
        await browser.pause(2000)
        
        await (await $('~Full Name* input field')).setValue("Venkat ram");
        await (await $('~Address Line 1* input field')).setValue("10/20");
        await (await $('~Address Line 2 input field')).setValue("XYZ S07th street ");
        await (await $('~City* input field')).setValue("ABC City");
        await (await $('~State/Region input field')).setValue("Saratov");
        await (await $('~Zip Code* input field')).setValue("3232");
        await (await $('~Country* input field')).setValue("RUSSIA");
        await browser.pause(2000)
        await (await $('~To Payment button')).click();


        await browser.pause(2000)
        await (await $('~Full Name* input field')).setValue("Venkat ram");
        await (await $('~Card Number* input field')).setValue("452425245254257");
        await (await $('~Expiration Date* input field')).setValue("854");
        await (await $('~Security Code* input field')).setValue("545");
        await (await $('~Review Order button')).click();
        await browser.pause(2000)

        await (await $('~checkout review order screen')).scrollIntoView();

        await browser.pause(2000)
        await (await $('~Place Order button')).click();
        
        await browser.pause(2000)
        await (await $('~Continue Shopping button')).click();
        await browser.pause(3000)
        
        
        await (await $('~open menu')).click()
        await driver.pause(2000)

        await (await $('~menu item log in')).click();
        await browser.pause(2000)
    
        await (await $('~Username input field')).setValue("bob@example.com");
        await (await $('~Password input field')).setValue("10203040");
        await (await $('~Login button')).click();
        await browser.pause(2000)
**/
    });
});