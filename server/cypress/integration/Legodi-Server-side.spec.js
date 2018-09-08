import cy from 'cypress'

describe('Legodi Server side testing example', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const WeegieTab = () => {
    cy.get('a.nav-link')
      .contains('Weegie')
      .click()
  }
  const LanguageTab = () => {
    cy.get('a.nav-link')
      .contains('Language')
      .click()
  }

  const UsersTab = () => {
    cy.get('a.nav-link')
      .contains('Users')
      .click()
  }

  const ArticlesTab = () => {
    cy.get('a.nav-link')
      .contains('Articles')
      .click()
  }

  const CategoriesTab = () => {
    cy.get('a.nav-link')
      .contains('Categories')
      .click()
  }
  it('should visit to Legodi server', () => { })

  //  Visit Weegie Tab
  it('should visit and click Weegie Tab', () => {
    WeegieTab()
  })

  it('should find view in Weegie and enter', () => {
    WeegieTab()
    cy.get('div.legodi-menu')
      .find('li')
      .contains('View')
      .click()
  })

  it('should find Edit in Weegie and enter', () => {
    WeegieTab()
    cy.get('div.legodi-menu')
      .find('li')
      .contains('Edit')
      .click()
  })

  it('should find Add in Weegie and enter', () => {
    WeegieTab()
    cy.get('div.legodi-menu')
      .find('li')
      .contains('Add')
      .click()
  })

  it('should click "Add a question button"', () => {
    WeegieTab()
    cy.get('div.legodi-menu')
      .find('li')
      .contains('Add')
      .click()
      .url('http://localhost:3001/admin/weegie/questions/add')
    cy.get('button.btn.btn-lg.btn-danger').click()
  })

  // Visit Language Tab
  it('should visit and click Language Tab', () => {
    LanguageTab()
  })

  it('should find view button in Language Tab and enter', () => {
    LanguageTab()
    cy.get('div.legodi-menu')
      .find('li')
      .contains('View')
      .click()
  })

  it('should find Edit button in Language Tab and enter', () => {
    LanguageTab()
    cy.get('div.legodi-menu')
      .find('li')
      .contains('Edit')
      .click()
  })

  it('should find Add button in Language Tab and enter', () => {
    LanguageTab()
    cy.get('div.legodi-menu')
      .find('li')
      .contains('Add')
      .click()
  })


  it('should click "Submit button"', () => {
    LanguageTab()
    cy.get('div.legodi-menu')
      .find('li')
      .contains('Add')
      .click()
      .url('http://localhost:3001/admin/language/add')
    cy.get('button.btn.btn-lg.btn-danger').click()
  })

  // Visit Users Tab
  it('should visit and click Users Tab', () => {
    UsersTab()
  })

  it('should find view in Users Tab and enter', () => {
    UsersTab()
    cy.get('div.legodi-menu')
      .find('li')
      .contains('View')
      .click()
  })

  it('should find Edit in Users Tab and enter', () => {
    UsersTab()
    cy.get('div.legodi-menu')
      .find('li')
      .contains('Edit')
      .click()
  })

  it('should find Add in Users Tab and enter', () => {
    UsersTab()
    cy.get('div.legodi-menu')
      .find('li')
      .contains('Add')
      .click()
  })


  it('should find submit button in Users Tab', () => {
    UsersTab()
    cy.get('div.legodi-menu')
      .find('li')
      .contains('Add')
      .click()
      .url('http://localhost:3001/admin/users/add')
    cy.get('button.btn.btn-lg.btn-danger').click()
  })



  //   Visit Articles Tab
  it('should visit and click Articles Tab', () => {
    ArticlesTab()
  })


  // it.only('should ')

  it('should find Add in Articles Tab and enter', () => {
    ArticlesTab()
    cy.get('div.legodi-menu')
      .find('li')
      .contains('Add')
      .click()
  })

  it('should click Submit button in Add section in Articles', () => {
    ArticlesTab()
    cy.get('div.legodi-menu')
      .find('li')
      .contains('Add')
      .click()
      .url('http://localhost:3001/admin/articles/add')
    cy.get('button.btn.btn-lg.btn-danger').click()
  })

  // Visit Categories Tab
  it('should visit and click Categories Tab', () => {
    CategoriesTab()
  })

  it('should click Submit button in Add section in Categories', () => {
    CategoriesTab()
    cy.get('div.legodi-menu')
      .find('li')
      .contains('Add')
      .click()
      .url('http://localhost:3001/admin/categories/add')
    cy.get('button.btn.btn-lg.btn-danger').click()
  })

  // Visit Logout Tab
  it('should visit and click Logout Tab', () => {
    cy.get('a.nav-link')
      .contains('Logout')
      .click()
  })
})
