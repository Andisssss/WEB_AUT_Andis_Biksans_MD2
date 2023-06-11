import basePage from "./base.page";

class loginPage extends basePage{
    static get url(){
        return "/profile.php#login";
    }

    static get usernameField(){
        return cy.get("#txt-username");
    }

    static get passwordField(){
        return cy.get("#txt-password");
    }

    static get loginButton(){
        return cy.get("#btn-login");
    }
}

export default loginPage;