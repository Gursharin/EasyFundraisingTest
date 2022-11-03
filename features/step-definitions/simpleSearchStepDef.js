const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../page-objects/home.page');
const FindACausePage = require('../page-objects/findACause.page')
const SearchResultsPage = require('../page-objects/searchResults.page')

Given(/^I open the Easy Fundraising website$/, async () => {
    await HomePage.open();
    await HomePage.maximise();
});

When(/^I click on the Find A Cause link$/, async () => {
    await HomePage.clickCookiesButton();
    await HomePage.findACause();
});

When(/^I enter '(\w+)' in the search field$/, async (cause) => {
    await FindACausePage.fillInSearchInput(cause);
});

When(/^I select cause number (\d+) in the results$/, async (number) => {
    await FindACausePage.selectCause(number);
});
  
Then(/^I should see '([\w\s]+)' in the search results$/, async (cause) => {
    await SearchResultsPage.findCause(cause);
});