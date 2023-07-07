import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../POM/loginPage';
import DashboardPage from '../POM/dashboardPage';
import CategoryPage from '../POM/categoryPage';

Given('The user successful to login using email {string} and password {string}', async () =>{
    await LoginPage.open();
    await LoginPage.emailField.setValue(email);
    await LoginPage.passwordField.setValue(password);
    await LoginPage.loginButton.click();
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
})

When('The user clicks on kategori button', async () =>{
    await DashboardPage.menuKategori().click();
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/categories');
})

When('The user clicks on tambah button', async () => {
    await CategoryPage.buttonTambah.click();
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/categories/create');
})

When('The user inputs nama kategori {string} and deskripsi {string}', async () => {
    await CategoryPage.namaTextfield.setValue(namaKategori);
    await CategoryPage.deskripsiTextfield.setValue(deskripsi);
    await CategoryPage.buttonSimpan.click();
})
When('The user clicks on button simpan', async () => {
    await CategoryPage.buttonSimpan.click();
})
Then('The user should see a successful message {string} {string}', async()=>{
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/categories');
    await expect(CategoryPage.itemDitambahkan).toExist()
})

        
