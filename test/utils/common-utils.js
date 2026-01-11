class CommonUtils {

    waitForContextsToBeLoaded = async () => {
        await driver.waitUntil(async () => {
            const contexts = await driver.getContexts();
            return contexts.length > 1;
        }, { timeout: 20000, timeoutMsg: 'WebView context not found within time' });
        console.log('context loaded successfully: '+ await driver.getContexts());
        
    }

    getWebViewContext = async () => {
        const contexts = await driver.getContexts();
        console.log(`contexts from getWebViewContext method: ${contexts}`);

        for (const context of contexts) {
            if (context.toUpperCase().includes('WEBVIEW')) {
                return context;
            }
        }
        throw new Error('No WebView context found');
    }

    getNativeContext = async () => {
        const contexts = await driver.getContexts();
        console.log(`contexts from getNativeContext method: ${contexts}`);

        for (const context of contexts) {
            if (context.toUpperCase().includes('NATIVE')) {
                return context;
            }
        }
        throw new Error('No Native context found');
    }

    setNativeContextDriver = async () => {
        await driver.switchContext(await this.getNativeContext());
    }

    setWebViewContextDriver = async () => {
        await driver.switchContext(await this.getWebViewContext());
    }

}

export default new CommonUtils();


