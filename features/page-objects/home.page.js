const Page = require('./page');

class HomePage extends Page {
  get cookiesPopup () {
    return $('#cookieConsentPopup');
  }
  
  get findACauseLink() {
    return $('span=Find a cause');
  }

  async clickCookiesButton () {
    await this.cookiesPopup.$('button=I accept').click();
  }

  async findACause() {
    await this.findACauseLink.click();
  }

  open () {
    return super.open('');
  }
} 

module.exports = new HomePage();