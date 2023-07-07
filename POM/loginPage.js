import BasePage from "./basePage"

class LoginPage extends BasePage {

    get emailField() {
        return $('#email')
    }

    get passwordField() {
        return $('#password')
    }

    get loginButton() {
        return $('button[type="submit"]')
    }

    open() {
        return super.open('https://kasirdemo.belajarqa.com')
    }

    get errorMessage() {
        return $('div[role="alert"]')
        utils.pause(5)
    }
}

export default new LoginPage();