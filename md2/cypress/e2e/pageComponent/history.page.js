import basePage from "./base.page";
class historyPage extends basePage{
    static get url(){
        return "/history.php#history";
    }

    static get historyField(){
        return cy.get(".col-sm-12").find("p");
    }

    static get menuButton(){
        return cy.get("#menu-toggle");
    }

    static get menuSideBar(){
        return cy.get("#sidebar-wrapper");
    }

    static get menuLogout(){
        return cy.contains("a", "Logout");
    }

}

export default historyPage;