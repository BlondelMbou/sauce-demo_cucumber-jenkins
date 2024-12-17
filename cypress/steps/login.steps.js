import loginPage from "../pages/login.page";
import Dashboard from "../pages/dashboard.page";

Given('je suis sur la page orangeHRM', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('je rentre le username correct', () => {
    loginPage.elements.username().type("Admin");
});

When('je rentre le password correct', () => {
    loginPage.elements.password().type('admin123');
});

When('je clique sur le bouton login', () => {
    loginPage.elements.boutonLogin().click();
});

// Then('je suis redirigé vers le dashboard', () => {
//     Dashboard.verifyDashboardIsVisible();
// });
