//"appium:appPackage": "com.rnfirstproject",
//"appium:appWaitActivity": "com.rnfirstproject.MainActivity",


/**
describe('My calculator application', () => {


    it('should calculate', async () => { 
       //numbers check
    
       await (await $('~Buttonzero')).click()
       
       await (await $('~Button1')).click()

       await (await $('~ButtonAdd')).click()
       await driver.pause(2000)
       
       await (await $('~Button2')).click()

       await (await $('~Button3')).click()
       
       await (await $('~Button4')).click()

       await (await $('~ButtonSub')).click()
       await driver.pause(200)
       
       await (await $('~Button5')).click()

       await (await $('~Button6')).click()

       await (await $('~ButtonMul')).click()
       await driver.pause(200)
       
       await (await $('~Button7')).click()

       await (await $('~Button8')).click()

       await (await $('~ButtonDiv')).click()
       await driver.pause(200)


       await (await $('~Button9')).click()
       await (await $('~Buttonequalto')).click()

       await driver.pause(900)

       //del
        await (await $('~ButtonCLR')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
    
      //sub
      await (await $('~Button5')).click()
       await driver.pause(200)
       await (await $('~Button7')).click()
       await driver.pause(200)


       await (await $('~ButtonSub')).click()
       await driver.pause(2000)

       await (await $('~Button7')).click()
       await driver.pause(200)
       await (await $('~Button4')).click()
       await driver.pause(2000)
       await (await $('~Buttonequalto')).click()
       await driver.pause(200)
       //del
       await (await $('~ButtonCLR')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()

       //mul
       await (await $('~Button9')).click()
       await driver.pause(200)
       await (await $('~Button8')).click()
       await driver.pause(200)


       await (await $('~ButtonMul')).click()
       await driver.pause(200)

       await (await $('~Button3')).click()
       await driver.pause(200)
       await (await $('~Buttondot')).click()
       await driver.pause(200) 
       await (await $('~Button4')).click()
       await driver.pause(200)
       await (await $('~Buttonequalto')).click()
       await driver.pause(300)
       //del
       await (await $('~ButtonCLR')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()

       //div
       await (await $('~Button8')).click()
       await driver.pause(200)
       await (await $('~Button2')).click()
       await driver.pause(200)


       await (await $('~ButtonDiv')).click()
       await driver.pause(200)

       await (await $('~Button3')).click()
       await driver.pause(200)
       await (await $('~Button4')).click()
       await driver.pause(200)
       await (await $('~Buttonequalto')).click()
       await driver.pause(200)
       //del
       await (await $('~ButtonCLR')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()

       
        
   });
});
**/

 /**
var assert = require('assert');


async function getData() {
  try {
    //return await $('~resultMenu').getText()
    //return await (await $('~resultMenu')).getValue();
     return await (await $('~resultMenu')).getText();
    // return await (await $('~resultMenu')).nextElement();
    // return await (await $('~resultMenu')).parentElement();
    // return await (await $('~resultMenu')).previousElement();
    // await (await $('~Full Name* input field')).setValue("Venkat ram");
    //return "Test Data";
  }
  catch (error) {
    console.log('error' + error);
  }
  finally {
    console.log('final');
  }
}


describe('My calculator application', () => {


  it('should calculate', async () => {



     await (await $('~Button5')).click()
     await driver.pause(200)
     await (await $('~Button7')).click()
     await driver.pause(200)
     
     
     await (await $('~ButtonAdd')).click()
     await driver.pause(200)

     await (await $('~Button7')).click()
     await driver.pause(200)
     await (await $('~Button4')).click()
     await driver.pause(200)
     await (await $('~Buttonequalto')).click() 
    await driver.pause(300)
     //del
     //await (await $('~ButtonCLR')).click()
     //await driver.pause(5000)

    //  await getData().then(data => {
    //   console.log("Output Data: " + data);
    //  });
     
    // console.log("Output Data: " + await (await $('~ButtonResult')).getText());
     //console.log("Output Data: " + await (await $('~resultMenu')).previousElement())

     await driver.pause(500)
     
     



      //var res = await (await $('~resultMenu')).isExisting();
       var res = await (await $('~ButtonResult')).getText();
      // var res = await (await $('~resultTextMenu')).isFocused();
      // console.log(await  (await $('~resultMenu')).getText()); 
      await assert.equal(res, 131,'should be equal');
     
     //await (await $('~resultMenu')).getText();
      //await assert.equal(('~resultMenu'), 131, 'should be equal');
      //await assert.equal(131, 131, 'should be equal');
      await (await $('~ButtonCLR')).click()
    // await assert.equal(('~Button4'), ('~Button4'),'should be equal');
    // await assert.equal($('~resultMenu'), $('~resultMenu'),'should be equal');

     //await assert.notEqual(('~resultMenu'),131 ,'should be equal');

   
 
    
            
  });
});


**/

describe('My calculator application', () => {


  it('should calculate has a correct identity', async () => {




await (await $('~Button5')).click()
     await driver.pause(200)
     await (await $('~Button7')).click()
     await driver.pause(200)


     await (await $('~ButtonSub')).click()
     await driver.pause(200)

     await (await $('~Button7')).click()
     await driver.pause(200)
     await (await $('~Button4')).click()
     await driver.pause(200)
     await (await $('~Buttonequalto')).click()
     await driver.pause(400)
     //clr
     await (await $('~ButtonCLR')).click()
     await driver.pause(300)
            
  });
});


/**


describe('My calculator application', () => {


  it('should calculate has a correct identity', async () => {


await (await $('~Button9')).click()
       await driver.pause(200)
       await (await $('~Button8')).click()
       await driver.pause(200)


       await (await $('~ButtonMul')).click()
       await driver.pause(200)

       await (await $('~Button3')).click()
       await driver.pause(200)
       await (await $('~Buttondot')).click()
       await driver.pause(200) 
       await (await $('~Button4')).click()
       await driver.pause(200)
       await (await $('~Buttonequalto')).click()
       await driver.pause(200)
       //del
       await (await $('~ButtonCLR')).click()
      
      });
    });
    


    

describe('My calculator application', () => {


  it('should calculate has a correct identity', async () => {


await (await $('~Button9')).click()
       await driver.pause(200)
       await (await $('~Button8')).click()
       await driver.pause(200)


       await (await $('~ButtonMul')).click()
       await driver.pause(200)

       await (await $('~Button3')).click()
       await driver.pause(200)
       await (await $('~Buttondot')).click()
       await driver.pause(200) 
       await (await $('~Button4')).click()
       await driver.pause(200)
       await (await $('~Buttonequalto')).click()
       await driver.pause(900)
       //del
       await (await $('~ButtonCLR')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()

      });
    });
    
    

describe('My calculator application', () => {


  it('should calculate has a correct identity', async () => {


       await (await $('~Button9')).click()
       await driver.pause(200)
       await (await $('~Button8')).click()
       await driver.pause(200)


       await (await $('~ButtonDiv')).click()
       await driver.pause(200)

       await (await $('~Button3')).click()
       await driver.pause(200)
       await (await $('~Buttondot')).click()
       await driver.pause(200) 
       await (await $('~Button4')).click()
       await driver.pause(200)
       await (await $('~Buttonequalto')).click()
       await driver.pause(900)
       //del
       await (await $('~ButtonCLR')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()
      //  await (await $('~ButtonDel')).click()

      });
    });
    **/