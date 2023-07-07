import BasePage from './basePage.js';

class DashboardPage extends BasePage {

    get textKasirAja () {
        return $('#root > div > div > div.css-tnxwfz > div > h3')
    }

    get kategoriMenu () {
        return $('#root > div > div > div.css-tnxwfz > div > a:nth-child(6)')
    }

}
export default new DashboardPage();