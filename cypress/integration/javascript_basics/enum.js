const browsers = {
    CHROME : 'chrome',
    FF : 'firefox',
    EDGE : 'Edge',
    SAFARİ : 'safari'
}
let browser = browsers.CHROME

function execute() {
    switch(browsers){
    case browsers.CHROME:
        console.log('execute chrome')
        break;

    case browsers.CHROME:
        console.log('execute firefox')
        break;

    case browsers.CHROME:
        console.log('execute Edge')
        break;

    case browsers.CHROME:
        console.log('execute safari')
        break;
    }
    
}
console.log(execute());