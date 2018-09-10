
describe('Legodi Server side testing example', () => {
  const LoginForm = () => {
    cy.visit('/')
    cy.get('form').within(($form) => {
      cy.get('input[name="email"]').type('wonmaungthein@gmail.com')
      cy.get('input[name="password"]').type('testing123!')
      cy.root().submit()
      cy.url().should('eq', 'http://localhost:3001/')
    })
  }

  it('should log in', () => {
    LoginForm()
  })

  const WeegieTab = () => {
    cy.get('a.nav-link')
      .contains('Weegie')
      .click()
    cy.url().should('eq', 'http://localhost:3001/admin/weegie')
  }

  const LanguageTab = () => {
    cy.get('a.nav-link')
      .contains('Language')
      .click()
    cy.url().should('eq', 'http://localhost:3001/admin/language')
  }

  it('should log in and go to Weegie Tab', () => {
    LoginForm()
    WeegieTab()
  })

  it('should visit to Weegie tab and click Add Button', () => {
    cy.url('http://localhost:3001/admin/weegie')
      .get('button.btn-primary').click()
    cy.url().should('eq', 'http://localhost:3001/admin/weegie/questions/add')
  })

  it('should visit to add Question page and click Submit button', () => {
    cy.url('http://localhost:3001/admin/weegie/questions/add')
    cy.get('form').within(($form) => {
      cy.get('input[id="title"]').type('wonmaungthein@gmail.com')
      cy.get('input[id="choiceA"]').type('testing123!')
      cy.get('input[id="choiceB"]').type('testing123!')
      cy.get('input[id="choiceC"]').type('testing123!')
      cy.get('input[id="choiceD"]').type('testing123!')
      cy.get('select')
        .select('a').should('have.value', 'a')
        .select('b').should('have.value', 'b')
        .select('c').should('have.value', 'c')
        .select('d').should('have.value', 'd')
      cy.root().submit()
      cy.url().should('eq', 'http://localhost:3001/admin/weegie')
    })
  })

  it('should find view icon and click within Weegie Tab', () => {
    cy.get('tbody>tr>td').eq(2).click()
  })

  it('should find delete button and click', () => {
    cy.get('div').eq(1).find('button', 'delete').click()
    cy.url().should('eq', 'http://localhost:3001/admin/weegie')
  })

  it('should find Edit button and click within Weegie Tab', () => {
    cy.get('tbody>tr>td').eq(3).click()
  })

  it('should click update button', () => {
    cy.get('form').within(($form) => {
      cy.root().submit()
    })
  })

  // Visit to Language Tab
  it('should log in and go to Language Tab', () => {
    LanguageTab()
  })

  it('should visit to Language tab and click Add New Button', () => {
    cy.get('button.btn-primary').click()
    cy.url().should('eq', 'http://localhost:3001/admin/language/add')
  })

  it('should visit to add Language page and click Submit button', () => {
    LoginForm()
    LanguageTab()
    cy.url('http://localhost:3001/admin/language/add')
    cy.get('form').within(($form) => {
      cy.get('input[id="languageId"]').type('am')
      cy.get('input[id="originalName"]').type('testing123!')
      cy.get('input[id="longName"]').type('testing1!')
      cy.get('input[id="shortName"]').type('testi23!')
      cy.root().submit()
      cy.url().should('eq', 'http://localhost:3001/admin/language')
    })
  })

  it('should find Edit icon and click it within language Tab', () => {
    cy.url().should('eq', 'http://localhost:3001/admin/language')
    cy.get('tbody>tr>td').eq(2)
      .click()
  })

  it('should click submit button', () => {
    cy.url('http://localhost:3001/admin/weegie/questions/view/2')
    cy.get('form').within(($form) => {
      cy.root().submit()
      cy.url().should('eq', 'http://localhost:3001/admin/language')
    })
  })

  it('should find Delete button and click within language Tab', () => {
    cy.get('tbody>tr>td').eq(3).click()
  })


  // Visit Users Tab
  const UsersTab = () => {
    cy.get('a.nav-link')
      .contains('Users')
      .click()
  }

  it('should log in and go to Users Tab', () => {
    LoginForm()
    UsersTab()
    cy.url().should('eq', 'http://localhost:3001/admin/users')
  })

  it('should find view icon and click within User Tab', () => {
    cy.get('tbody>tr>td').eq(2)
      .click()
  })

  it('should find Edit icon and click within User Tab', () => {
    LoginForm()
    UsersTab()
    cy.url('http://localhost:3001/admin/users')
    cy.get('tbody>tr>td').eq(3)
      .click()
  })

  it('should click update button', () => {
    cy.get('form').within(($form) => {
      cy.root()
        .submit()
    })
  })

  it('should log in, find delete button and click in Users Tab', () => {
    LoginForm()
    UsersTab()
    cy.get('tbody>tr>td').eq(4)
      .click()
    cy.url().should('eq', 'http://localhost:3001/admin/users')
  })

  // Visit to Article Tab
  const ArticlesTab = () => {
    cy.get('a.nav-link')
      .contains('Articles')
      .click()
  }

  it('should visit and click Articles Tab', () => {
    LoginForm()
    ArticlesTab()
  })

  it('should click Add Button', () => {
    cy.url('http://localhost:3001/admin/articles')
      .get('button.btn-primary').click()
    cy.url().should('eq', 'http://localhost:3001/admin/articles/add')
  })

  it('should visit to add articles page and click Submit button', () => {
    cy.url('http://localhost:3001/admin/articles/add')
    cy.get('form').within(($form) => {
      cy.get('input[id="articleTitle"]').type('one')
      cy.get('input[id="articleOrder"]').type('2')
      cy.get('select#status')
        .select('pending').should('have.value', 'pending')
        .select('approved').should('have.value', 'approved')
        .select('rejected').should('have.value', 'rejected')
        .select('hidden').should('have.value', 'hidden')
      cy.get('select#categoryId')
        .select('1').should('have.value', '1')
        .select('2').should('have.value', '2')
        .select('3').should('have.value', '3')
        .select('4').should('have.value', '4')
      cy.get('textarea[id="shortContent"]').type('write shortContent')
      cy.get('textarea[id="fullContent"]').type('write fullContent!')
      //I Need to find a way to upload the file testing
      // cy.get('input[type=file]').click()
      cy.root().submit()
    })
  })

  // Visit to Categories Tab
  const CategoriesTab = () => {
    cy.get('a.nav-link')
      .contains('Categories')
      .click()
  }
  const autoCategoriesTab = () => {
    LoginForm()
    CategoriesTab()
    cy.url().should('eq', 'http://localhost:3001/admin/categories')
  }

  it('should visit to Categories tab and Click ', () => {
    autoCategoriesTab()
  })

  it('should visit to Categories tab and click Add Button', () => {
    cy.url('http://localhost:3001/admin/categories')
      .get('button.btn-primary').click()
    cy.url().should('eq', 'http://localhost:3001/admin/categories/add')
  })

  it('should visit to add categories page and click Submit button', () => {
    cy.url('http://localhost:3001/admin/categories/add')
    cy.get('form').within(($form) => {
      cy.get('input[id="categoryTitle"]').type('one')
      cy.get('input[id="order"]').type('2')
      cy.get('input[id="icon"]').type('icon')
      cy.get('select#categoryStatus')
        .select('pending').should('have.value', 'pending')
        .select('approved').should('have.value', 'approved')
        .select('rejected').should('have.value', 'rejected')
        .select('hidden').should('have.value', 'hidden')
      cy.get('select#categoryLanguageId')
        .select('ar').should('have.value', 'ar')
        .select('am').should('have.value', 'am')
        .select('en').should('have.value', 'en')
      cy.get('select#categoryCityId')
        .select('GLA').should('have.value', 'GLA')
        .select('EDI').should('have.value', 'EDI')
        .select('PAI').should('have.value', 'PAI')
      cy.get('textarea[id="categoryShortContent"]').type('write categoryShortContent')
      cy.get('textarea[id="categoryFullContent"]').type('write categoryFullContent!')
      cy.root().submit()
    })
  })

  it('should find view icon and click', () => {
    autoCategoriesTab()
    cy.get('tbody>tr>td').eq(2)
      .click()
  })

  it('should find delete button and click', () => {
    cy.url('http://localhost:3001/admin/categories/view/1')
    cy.get('div').eq(1).find('button', 'delete')
      .click()
  })

  it('should find Edit icon and click', () => {
    autoCategoriesTab()
    cy.get('tbody>tr>td').eq(3)
      .click()
  })

  it('should visit to Edit categories page and click Submit button', () => {
    cy.get('form').within(($form) => {
      cy.get('input[id="categoryTitle"]').type('one')
      cy.get('input[id="order"]').type('23')
      cy.get('input[id="icon"]').type('icon')
      cy.get('textarea[id="categoryShortContent"]').type('write categoryShortContent')
      cy.get('textarea[id="categoryFullContent"]').type('write categoryFullContent!')
      cy.root().submit()
    })
  })

  it('should log out', () => {
    LoginForm()
    cy.get('a.nav-link')
      .contains('Logout')
      .click()
    cy.url().should('eql', 'http://localhost:3001/users/login')
  })
})




















