const { Builder, By, Key, Until } = require('selenium-webdriver');

const firefox = require('selenium-webdriver/firefox');
let options = new firefox.Options().setBinary('C:/Users/Amiti/AppData/Local/Mozilla Firefox/firefox.exe');

 var driver = new Builder()
     .forBrowser('firefox')
    .setFirefoxOptions(options).build();

describe('Mochaa Test cases', function () {
    this.timeout(50000);
    let driver
    beforeEach(async function () {
        driver = new Builder()
            .forBrowser('firefox')
            .setFirefoxOptions(options).build();
        (await driver).manage().window().maximize();
        
        
    })
    afterEach(async function () {
        await driver.quit();
    })
    it('checkBoxForm', async function () {
        try {
            await driver.manage().setTimeouts( { implicit: 10000, pageLoad: 
                10000, script: 10000 } )
                console.info( await driver.manage().getTimeouts() )
            await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form');
            await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("Srinivas");
            await driver.findElement(By.xpath("//input[@id='comment']")).sendKeys("Hi there how you doin");
            await driver.findElement(By.xpath("(//span[@class='custom-control-indicator'])[3]")).click();
            await driver.findElement(By.xpath("(//span[@class='customised-control-indicator'])[1]")).click();
            await driver.findElement(By.xpath("(//span[@class='customised-control-indicator'])[2]")).click();
            await driver.findElement(By.xpath("(//span[@class='customised-control-indicator'])[3]")).click();
            await driver.findElement(By.xpath("//button[@type='submit']")).click();
        } catch (error) {
            console.log(error);
        }
    })
    it('simpleRegistration', async function () {
        try {
            await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
            await driver.findElement(By.xpath("//input[@id='email']")).sendKeys("srinivas.madnal@gmail.com");
            await driver.findElement(By.xpath("//input[@id='password']")).sendKeys("hello1234");
            await driver.findElement(By.xpath("//button[@id='submit']")).click();

        } catch (error) {
            console.log(error);
        }


    })
    it('radioButton', async function () {
        try {
            await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
            await driver.findElement(By.xpath("//input[@id='title']")).sendKeys("This is radio button");
            await driver.findElement(By.xpath("//input[@id='description']")).sendKeys("This is about radio button test");
            await driver.findElement(By.xpath("(//span[@class='custom-control-indicator'])[2]")).click();
            await driver.findElement(By.xpath("//button[@type='submit']")).click();

        } catch (error) {
            console.log(error);
        }
    })
    it('dropDownMenu', async function () {
        try {
            await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form");
            await driver.findElement(By.xpath("(//button[@type='button'])[1]")).click();
            await driver.findElement(by.xpath("//nb-option[@value='1']")).click();
            await driver.findElement(by.xpath("//nb-option[@value='2']")).click();
            await driver.findElement(by.xpath("//nb-option[@value='3']")).click();
            await driver.findElement(By.xpath("(//button[@type='button'])[1]")).click();
            await driver.findElement(By.linkText("Opel")).click();
            await driver.findElement(By.xpath("(//button[@type='button'])[2]")).click();
            await driver.findElement(By.xpath("//nb-option[@value='3']")).click();
            await driver.findElement(By.xpath("//select[@id='selectCar'])[2]")).click();
            await driver.findElement(By.xpath("//option[@value='saab']")).click();
            await driver.findElement(By.xpath("//button[@type='submit']")).click();

        } catch (error) {
            console.log(error);
        }
    })
    it('datePicker', async function () {
        try {
            await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form");
            await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys("Jun 9, 2020");
            await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys("Jun 10, 2020 - Jul 10, 2020");
            await driver.findElement(By.xpath("//button[@type='submit'")).click();

        } catch (error) {
            console.log(error);
        }
    })
    it('fileUpload', async function () {
        try {
            await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/file-form");
            await driver.findElement(By.xpath("//input[@formcontrolname='file']")).sendKeys(__dirname + "\\download.jpg");
            await (await driver).findElement(By.id("submit")).click();
        } catch (error) {
            console.log(error);
        }
    })
    it('iFrame', async function(){
        try {

            await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
            await (await driver)
                .switchTo()
                .frame(0);
            await driver.findElement(By.xpath("//input[@name='entry.1884265043']")).sendKeys("Srinivas Madnal");
            await driver.findElement(By.xpath("(//div[@class='appsMaterialWizToggleRadiogroupOffRadio exportOuterCircle'])[5]")).click();
            await driver
                .actions()
                .sendKeys(Key.chord(Key.TAB, Key.TAB))
                .perform();
            await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
            await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
            await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
            await driver.actions().sendKeys(Key.SPACE).perform();
            await driver.actions().sendKeys(Key.chord(Key.TAB, "10")).perform();
            await driver.actions().sendKeys(Key.chord(Key.TAB, "07")).perform();
            await driver.actions().sendKeys(Key.chord(Key.TAB, "1996")).perform();
            await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
            await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
            await driver.actions().sendKeys(Key.chord(Key.TAB, "Yes")).perform();
            await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
            await (await driver).quit();
        } catch (error) {
            console.log(error);
        }
    })
})
