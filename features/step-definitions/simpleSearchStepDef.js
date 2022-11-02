const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../page-objects/home.page');
const FindACausePage = require('../page-objects/findACause.page')

Given(/^I open the Easy Fundraising website$/, async () => {
    await HomePage.open()
});

When(/^I click on the Find A Cause link$/, async () => {
    await HomePage.findACause()
});

When(/^I enter (\w+) in the search field$/, async (cause) => {
    await FindACausePage.fillInSearchInput(cause)
});

