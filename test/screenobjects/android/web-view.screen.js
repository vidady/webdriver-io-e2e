class WebViewScreen {
    
    get nextOverlayButton(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
    }

    get headerMenuButton(){
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
    }

    get facebookLink(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Like us on Facebook"]')
    }

    get closeLoginPopUps(){
        return $$("//*[starts-with(text(), 'ColorNote')]")
    }
}

export default new WebViewScreen();