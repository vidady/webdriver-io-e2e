
import AddNoteScreen from '../../screenobjects/android/add-note.screen';
beforeEach(async () => {
  await driver.execute('mobile: activateApp', { appId: 'io.appium.android.apis' });

});

afterEach(async () => {
  await driver.execute('mobile: terminateApp', { appId: 'io.appium.android.apis' });
});


describe('Android Find Elements Suite', () => {
  it('Find elements by accessibility id', async () => {

    await AddNoteScreen.getApp.click();
    await expect(AddNoteScreen.getActionBar).toBeExisting();
    await driver.back();
    // const appOption = await $('~App');
    // await appOption.click();
    // const actionBar = await $('~Action Bar');
    // await expect(actionBar).toBeExisting();
    // await driver.back();
    // await driver.execute('mobile: terminateApp', { appId: 'io.appium.android.apis' });

  });

  it('Add text test', async () => {

    await AddNoteScreen.getTextLink.click();
      await AddNoteScreen.getLogTextBox.click();
      await AddNoteScreen.getTextBox.setValue('Hello Appium');
    // await driver.execute('mobile: activateApp', { appId: 'io.appium.android.apis' });
    // const textLink = await $('~Text')
    // await textLink.click();
    // const logTextBox = await $('~LogTextBox');
    // await logTextBox.click();
    // const textBox = await $('android=new UiSelector().resourceId("io.appium.android.apis:id/text")');
    // textBox.setValue('Hello Appium');


  })

});