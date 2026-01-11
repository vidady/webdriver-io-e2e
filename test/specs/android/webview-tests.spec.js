import webViewScreen from "../../screenobjects/android/web-view.screen.js";
import commonUtils from "../../utils/common-utils.js";


describe('Android WebView Tests', () => {
    it.only('should switch to WebView context and interact with web elements', async () => {

        await webViewScreen.nextOverlayButton.click();
        await webViewScreen.headerMenuButton.click();
        await expect(webViewScreen.facebookLink).toBeExisting();
        await webViewScreen.facebookLink.click();
        await commonUtils.waitForContextsToBeLoaded();
        await commonUtils.setWebViewContextDriver();
        const size = await webViewScreen.closeLoginPopUps.length;
        console.log('pop up size:::: ' + size);
        await driver.takeScreenshot();
        // for(let i=0; i<size; i++){
        //     await webViewScreen.closeLoginPopUps[i].click();
        // }


        // const nextButton =$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
        // await nextButton.click();
        // const headerMenu =$('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
        // await headerMenu.click();
        // const fbLink =  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Like us on Facebook"]');
        // await expect(fbLink).toBeExisting();
        // await fbLink.click();
        // await driver.pause(5000);
        // const contexts = await driver.getContexts();
        // console.log(contexts);
        // await driver.switchContext(contexts[1]);
        // console.log('context::::: ' + await driver.getContext());
        // const closeLoginPopUp = $$("//*[starts-with(text(), 'ColorNote')]");
        // console.log('pop up size:::: ' + await closeLoginPopUp.length);
        
        // await driver.pause(5000);
    });
})
