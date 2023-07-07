import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../POM/loginPage';
import DashboardPage from '../POM/dashboardPage';

Given('The user is on the login page', async () => {
    await LoginPage.open();
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/login');

});

When('The user inputs email {string} and password {string}', async function (email, password) {
    await LoginPage.emailField.setValue(email);
    await LoginPage.passwordField.setValue(password);
});

When('The user clicks on button login', async () => {
    await LoginPage.loginButton.click();
})

Then('The user should see error message saying {string}', async function (errorMessage) {
    await expect(LoginPage.errorMessage).toExist();
    await expect(LoginPage.errorMessage).toHaveTextContaining(errorMessage);
})

Then('The user is redirected to the dashboard page', async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
    await expect(DashboardPage.textKasirAja).toExist();
});