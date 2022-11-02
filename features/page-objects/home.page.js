const Page = require('./page');

class HomePage extends Page {
  get findACauseLink() {
    return $('span=Find a cause')
  }

  async findACause() {
    await this.findACauseLink.click()
  }

  open () {
    return super.open('');
  }
} 

module.exports = new HomePage();