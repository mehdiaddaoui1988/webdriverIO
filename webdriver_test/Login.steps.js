import {Given,When,Then} from  'cucumber';

Given(/^I'm on the login page$/, function(){
Browser.url("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
});

When(/^I log in with a default user$/, function(){
    browser.element("//input[@name='txtUsername']").setValue("opensourcecms");
    browser.element("//input[@name='txtPassword']").setValue("opensourcecms");
    browser.element("//input[@name='Submit']").click();
});

Then(/^I shall be on the Flight Finder page$/, function(){
    var strUrl =browser.getUrl();
    console.log("URL is : "+strUrl);
    
});