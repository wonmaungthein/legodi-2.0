describe("Legodi Server side testing example", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
  });

  const WeegieTab = () => {
    cy.get("a.nav-link")
      .contains("Weegie")
      .click();
  };
  const LanguageTab = () => {
    cy.get("a.nav-link")
      .contains("Language")
      .click();
  };

  const UsersTab = () => {
    cy.get("a.nav-link")
      .contains("Users")
      .click();
  };

  it("should visit to Legodi server", () => {});

  //  Visit Weegie Tab
  it("should visit and click Weegie Tab", () => {
    WeegieTab();
  });

  it("should find view in Weegie and enter", () => {
    WeegieTab();
    cy.get("div.legodi-menu")
      .find("li")
      .contains("View")
      .click();
  });

  it("should find Edit in Weegie and enter", () => {
    WeegieTab();
    cy.get("div.legodi-menu")
      .find("li")
      .contains("Edit")
      .click();
  });

  it("should find Add in Weegie and enter", () => {
    WeegieTab();
    cy.get("div.legodi-menu")
      .find("li")
      .contains("Add")
      .click();
  });

  // Visit Language Tab
  it("should visit and click Language Tab", () => {
    LanguageTab();
  });

  it("should find view in Language Tab and enter", () => {
    LanguageTab();
    cy.get("div.legodi-menu")
      .find("li")
      .contains("View")
      .click();
  });

  it("should find Edit in Language Tab and enter", () => {
    LanguageTab();
    cy.get("div.legodi-menu")
      .find("li")
      .contains("Edit")
      .click();
  });

  it("should find Add in Language Tab and enter", () => {
    LanguageTab();
    cy.get("div.legodi-menu")
      .find("li")
      .contains("Add")
      .click();
  });

  // Visit Users Tab
  it("should visit and click Users Tab", () => {
    UsersTab();
  });

  it("should find view in Users Tab and enter", () => {
    UsersTab();
    cy.get("div.legodi-menu")
      .find("li")
      .contains("View")
      .click();
  });

  it("should find Edit in Users Tab and enter", () => {
    UsersTab();
    cy.get("div.legodi-menu")
      .find("li")
      .contains("Edit")
      .click();
  });

  it("should find Add in Users Tab and enter", () => {
    UsersTab();
    cy.get("div.legodi-menu")
      .find("li")
      .contains("Add")
      .click();
  });

  //   Visit Articles Tab
  it("should visit and click Articles Tab", () => {
    cy.get("a.nav-link")
      .contains("Articles")
      .click();
  });
  // Visit Categories Tab
  it("should visit and click Categories Tab", () => {
    cy.get("a.nav-link")
      .contains("Categories")
      .click();
  });

  // Visit Logout Tab
  it("should visit and click Logout Tab", () => {
    cy.get("a.nav-link")
      .contains("Logout")
      .click();
  });
});
