
class AddNoteScreen {

    get getApp() {
        return $('~App');
    }


    get getActionBar() {
        return $('~Action Bar');
    }

    get getTextLink() {
        return $('~Text');
    }

    get getLogTextBox() {
        return $('~LogTextBox');
    }

    get getTextBox() {
        return $('android=new UiSelector().resourceId("io.appium.android.apis:id/text")');
    }




}

export default new AddNoteScreen();