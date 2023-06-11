import appointmentPage from "./pageComponent/appointment.page";
import basePage from "./pageComponent/base.page";
import historyPage from "./pageComponent/history.page";
import homePage from "./pageComponent/home.page";
import loginPage from "./pageComponent/login.page";

describe("CuraHealthcareService spec", () => {
  context("Make an appointment", () => {
    beforeEach(() => {
      basePage.visit();
    });


    it("testcase1", () =>{
      homePage.makeAppointmentButton.click();

      loginPage.usernameField.type("John Doe");
      loginPage.passwordField.type("ThisIsNotAPassword");
      loginPage.loginButton.click();

      appointmentPage.facilityMenu.select("Seoul CURA Healthcare Center");
      appointmentPage.applyForReadmissionCheck.click();
      appointmentPage.mediciadRadio.click();
      appointmentPage.visitDateMenu.click();
      appointmentPage.dateButtons.contains("30").click();
      appointmentPage.appointmentArea.click("right");
      appointmentPage.commentField.type("CURA Healthcare Service");
      appointmentPage.bookAppointmentButton.click();

    });

  });
  
  context("Appointment history empty", () => {
    beforeEach(() => {
      basePage.visit();
    });

    it("testcase2", () =>{
      homePage.makeAppointmentButton.click();

      loginPage.usernameField.type("John Doe"); 
      loginPage.passwordField.type("ThisIsNotAPassword");
      loginPage.loginButton.click();
      
      basePage.menuButton.click();
      basePage.menuSideBar.should("have.class", "active");
      basePage.historyButton.click();

      historyPage.historyField.should("have.text", "No appointment.");

      historyPage.menuButton.click();
      historyPage.menuSideBar.should("have.class", "active");
      historyPage.menuLogout.click(); 
    });
  });
});