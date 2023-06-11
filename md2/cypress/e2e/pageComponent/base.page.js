class basePage{

    static get url(){
        return"";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get menuButton(){
        return cy.get("#menu-toggle");
    }

    static get menuSideBar(){
        return cy.get("#sidebar-wrapper");
    }

    static get historyButton(){
        return cy.contains("a", "History");
    }
}

export default basePage;