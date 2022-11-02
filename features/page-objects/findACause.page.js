const Page = require('./page');

class FindACausePage extends Page {
  get searchInput() {
    return $('#sagc-hero-search-input')
  }

  async fillInSearchInput(cause) {
    await this.searchInput.click()
    await this.searchInput.setValue(cause)
  }

  open () {
    return super.open('/support-a-good-cause');
  }
} 

module.exports = new FindACausePage();