import basePage from "./base.page";
class homePage extends basePage{
    static get url(){
        return "/";
    }

    static get makeAppointmentButton(){
        return cy.get("#btn-make-appointment");
    }
}

export default homePage;