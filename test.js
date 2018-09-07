const wdio = require("webdriverio");

const opts = {
    port: 4723,
    desiredCapabilities: {
        platformName: "Android",
        platformVersion: "7.1.1",
        deviceName: "AndroidPhone",
        // app: "/Users/wonmaungthein/Desktop/sample-code/ApiDemos-debug.apk",
        app: "/Users/wonmaungthein/Desktop/Coding/legodi-2.0/legodi-6ce44261e0b8716a9c75413da663cba5-signed.apk",
        automationName: "UiAutomator2"
    }
};

const client = wdio.remote(opts);

client
    .init()
    .click("~App")
    .back()
    .click("~Alert Dialogs")
    .back()
    .back()
    .click("~Accessibility")
    .click(("android:id/text1")[0])
    // let els2 = driver.elements("android:id/text1");
    // let els3 = driver.elements("android.widget.TextView");
    .click("/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.view.View")
    .back()
    .click("~Custom View")
    .back()
    .back().back()
    .end();






    // .click(("android.widget.FrameLayout")[1])
    // .back()
    // .click(("android.widget.FrameLayout")[0])
    // .click(("//android.view.ViewGroup[@content-desc=\"Home\"]/android.view.ViewGroup/android.widget.TextView"))











// let els3 = driver.elements("android.widget.TextView");
// els3[0].click();
// els3[1].click();
// let el2 = driver.element("//android.view.ViewGroup[@content-desc=\"Game\"]/android.view.ViewGroup/android.widget.TextView");
// el2.click();
// let els4 = driver.elements("android.widget.TextView");
// els4[4].click();
// let el3 = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView");
// el3.click();
// let els5 = driver.elements("android.widget.ImageView");
// els5[0].click()