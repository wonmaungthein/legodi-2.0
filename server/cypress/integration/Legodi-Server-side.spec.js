
describe('Legodi Server side testing example', () => {
  const LoginForm = () => {
    cy.visit('/')
    cy.get('form').within(($form) => {
      // cy.get() will only search for elements within form,
      // not within the entire document
      cy.get('input[name="email"]').type('wonmaungthein@gmail.com')
      cy.get('input[name="password"]').type('testing123!')
      cy.root().submit()
      cy.url().should('eq', 'http://localhost:3001/')
    })
  }

  // it('should log in and go to Weegie Tab', () => {
  //   LoginForm()
  //   cy.get('a.nav-link')
  //     .contains('Weegie')
  //     .click()
  //   cy.url().should('eq', 'http://localhost:3001/admin/weegie')
  // })

  // it('should visit to Weegie tab and click Add Button', () => {
  //   cy.url('http://localhost:3001/admin/weegie')
  //     .get('button.btn-primary').click()
  //   cy.url().should('eq', 'http://localhost:3001/admin/weegie/questions/add')
  // })

  // it('should visit to add Question page and click Submit button', () => {
  //   cy.url('http://localhost:3001/admin/weegie/questions/add')
  //   cy.get('form').within(($form) => {
  //     // cy.get() will only search for elements within form,
  //     // not within the entire document
  //     cy.get('input[id="title"]').type('wonmaungthein@gmail.com')
  //     cy.get('input[id="choiceA"]').type('testing123!')
  //     cy.get('input[id="choiceB"]').type('testing123!')
  //     cy.get('input[id="choiceC"]').type('testing123!')
  //     cy.get('input[id="choiceD"]').type('testing123!')
  //     // cy.get('input[id="answer"]').type('testing123!')
  //     cy.get('select')
  //       .select('a').should('have.value', 'a')
  //       .select('b').should('have.value', 'b')
  //       .select('c').should('have.value', 'c')
  //       .select('d').should('have.value', 'd')
  //     cy.root().submit()
  //   })
  // })

  // it('should find view icon and click within Weegie Tab', () => {
  //   cy.get('tbody>tr>td').eq(2).click()
  // })

  // it('should find delete button and click', () => {
  //   cy.url('http://localhost:3001/admin/weegie/questions/view/2')
  //   cy.get('div').eq(1).find('button', 'delete').click()
  // })

  // it('should find Edit button and click within Weegie Tab', () => {
  //   cy.get('tbody>tr>td').eq(3).click()
  // })

  // it('should click update button', () => {
  //   cy.url('http://localhost:3001/admin/weegie/questions/edit/9')
  //   cy.get('form').within(($form) => {
  //     cy.root().submit()
  //   })
  // })


  // // Visit to Language Tab
  // it('should log in and go to Language Tab', () => {
  //   LoginForm()
  //   cy.get('a.nav-link')
  //     .contains('Language')
  //     .click()
  //   cy.url().should('eq', 'http://localhost:3001/admin/language')
  // })


  // it('should visit to Language tab and click Add Button', () => {
  //   cy.url('http://localhost:3001/admin/language')
  //     .get('button.btn-primary').click()
  //   cy.url().should('eq', 'http://localhost:3001/admin/language/add')
  // })

  // it('should visit to add Language page and click Submit button', () => {
  //   cy.url('http://localhost:3001/admin/language/add')
  //   cy.get('form').within(($form) => {
  //     // cy.get() will only search for elements within form,
  //     // not within the entire document
  //     cy.get('input[id="languageId"]').type('wonmaungthein@gmail.com')
  //     cy.get('input[id="originalName"]').type('testing123!')
  //     cy.get('input[id="longName"]').type('testing1!')
  //     cy.get('input[id="shortName"]').type('testi23!')
  //     cy.root().submit()
  //   })
  // })

  // it('should find Edit icon and click within language Tab', () => {
  //   cy.get('a.nav-link')
  //     .contains('Language')
  //     .click()
  //   cy.url().should('eq', 'http://localhost:3001/admin/language')
  //   cy.get('tbody>tr>td').eq(2)
  //     .click()
  // })

  // it('should click submit button', () => {
  //   cy.url('http://localhost:3001/admin/weegie/questions/view/2')
  //   cy.get('form').within(($form) => {
  //     cy.root().submit()
  //   })
  // })

  // it('should find Delete button and click within language Tab', () => {
  //   cy.get('tbody>tr>td').eq(3).click()
  // })


  // Visit Users Tab

  // const UsersTab = () => {
  //   cy.get('a.nav-link')
  //     .contains('Users')
  //     .click()
  // }

  // it('should log in and go to Users Tab', () => {
  //   LoginForm()
  //   UsersTab()
  //   cy.url().should('eq', 'http://localhost:3001/admin/users')
  // })

  // it('should find view icon and click within User Tab', () => {
  //   cy.get('tbody>tr>td').eq(2)
  //   // .click()
  // })

  // it('should find Edit icon and click within User Tab', () => {
  //   cy.get('tbody>tr>td').eq(3)
  //   // .click()
  // })

  // it('should click update button', () => {
  //   cy.url('http://localhost:3001/admin/users/edit/2')
  //   cy.get('form').within(($form) => {
  //     cy.root()
  //     // .submit()
  //   })
  // })
  // it('should log in and go to Users Tab', () => {
  //   LoginForm()
  //   UsersTab()
  //   cy.get('tbody>tr>td').eq(4)
  //     .click()
  //   cy.url().should('eq', 'http://localhost:3001/admin/users')
  // })


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

  it('should visit to Articles tab and click Add Button', () => {
    cy.url('http://localhost:3001/admin/articles')
      .get('button.btn-primary').click()
    cy.url().should('eq', 'http://localhost:3001/admin/articles/add')
  })


  it('should visit to add articles page and click Submit button', () => {
    cy.url('http://localhost:3001/admin/articles/add')
    cy.get('form').within(($form) => {
      // cy.get() will only search for elements within form,
      // not within the entire document
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
      // cy.get('input[type=file]').click()
        // cy.root().submit()

    })
  })
})

























  // it('should find edit icon in language Tab and enter', () => {
  //   LoginForm()
  //   cy.get('div.legodi-menu')
  //     .find('li')
  //     .contains('View')
  //     .click()
  // })
  // it('should find Edit in Weegie and enter', () => {
  //   LoginForm()
  //   cy.get('div.legodi-menu')
  //     .find('li')
  //     .contains('Edit')
  //     .click()
  // })
  // it('should find Add in Weegie and enter', () => {
  //   LoginForm()
  //   cy.get('div.legodi-menu')
  //     .find('li')
  //     .contains('Add')
  //     .click()
  // })

  // Visit Language Tab

  // const LanguageTab = () => {
  //   cy.get('a.nav-link')
  //     .contains('Language')
  //     .click()
  // }
  // it('should visit and click Language Tab', () => {
  //   LoginForm()

  //   LanguageTab()
  // })
 // const WeegieTab = () => {
    //   cy.get('a.nav-link')
    //     .contains('Weegie')
    //     .click()
    // }


//   it('should visit to Legodi server', () => {
//     cy.visit('http://localhost:3001/users/login')
//   })
//   const WeegieTab = () => {
//     cy.get('a.nav-link')
//       .contains('Weegie')
//       .click()
//   }



//   const CategoriesTab = () => {
//     cy.get('a.nav-link')
//       .contains('Categories')
//       .click()
//   }

//   it('should click "Add a question button"', () => {
//     WeegieTab()
//     cy.get('div.legodi-menu')
//       .find('li')
//       .contains('Add')
//       .click()
//       .url('http://localhost:3001/admin/weegie/questions/add')
//     cy.get('button.btn.btn-lg.btn-danger').click()
//   })

//   it('should find view button in Language Tab and enter', () => {
//     LanguageTab()
//     cy.get('div.legodi-menu')
//       .find('li')
//       .contains('View')
//       .click()
//   })

//   it('should find Edit button in Language Tab and enter', () => {
//     LanguageTab()
//     cy.get('div.legodi-menu')
//       .find('li')
//       .contains('Edit')
//       .click()
//   })

//   it('should find Add button in Language Tab and enter', () => {
//     LanguageTab()
//     cy.get('div.legodi-menu')
//       .find('li')
//       .contains('Add')
//       .click()
//   })

//   it('should click "Submit button"', () => {
//     LanguageTab()
//     cy.get('div.legodi-menu')
//       .find('li')
//       .contains('Add')
//       .click()
//       .url('http://localhost:3001/admin/language/add')
//     cy.get('button.btn.btn-lg.btn-danger').click()
//   })

//   it('should visit and click Users Tab', () => {
//     UsersTab()
//   })

//   it('should find view in Users Tab and enter', () => {
//     UsersTab()
//     cy.get('div.legodi-menu')
//       .find('li')
//       .contains('View')
//       .click()
//   })

//   it('should find Edit in Users Tab and enter', () => {
//     UsersTab()
//     cy.get('div.legodi-menu')
//       .find('li')
//       .contains('Edit')
//       .click()
//   })

//   it('should find Add in Users Tab and enter', () => {
//     UsersTab()
//     cy.get('div.legodi-menu')
//       .find('li')
//       .contains('Add')
//       .click()
//   })

//   it('should find submit button in Users Tab', () => {
//     UsersTab()
//     cy.get('div.legodi-menu')
//       .find('li')
//       .contains('Add')
//       .click()
//       .url('http://localhost:3001/admin/users/add')
//     cy.get('button.btn.btn-lg.btn-danger').click()
//   })

//   









//   // it.only('should ')
//   it('should find Add in Articles Tab and enter', () => {
//     ArticlesTab()
//     cy.get('div.legodi-menu')
//       .find('li')
//       .contains('Add')
//       .click()
//   })

//   it('should click Submit button in Add section in Articles', () => {
//     ArticlesTab()
//     cy.get('div.legodi-menu')
//       .find('li')
//       .contains('Add')
//       .click()
//       .url('http://localhost:3001/admin/articles/add')
//     cy.get('button.btn.btn-lg.btn-danger').click()
//   })

//   // Visit Categories Tab
//   it('should visit and click Categories Tab', () => {
//     CategoriesTab()
//   })

//   it('should click Submit button in Add section in Categories', () => {
//     CategoriesTab()
//     cy.get('div.legodi-menu')
//       .find('li')
//       .contains('Add')
//       .click()
//       .url('http://localhost:3001/admin/categories/add')
//     cy.get('button.btn.btn-lg.btn-danger').click()
//   })

//   // Visit Logout Tab
//   it('should visit and click Logout Tab', () => {
//     cy.get('a.nav-link')
//       .contains('Logout')
//       .click()
//   })
// })

// Extra
  //  Visit Weegie Tab
  // it('should find Weegie Tab',()=>{
  //   cy.get('a.nav-link')
  //       .contains('Weegie')
  //       .click()
  // })
  // it('should visit and click Weegie Tab', () => {
  //   // WeegieTab()
  //   cy.find('nav')
  //   // .contains('Weegie')
  //   // .click()
  // })
  //   .and().find('nav')
  // it('should visit localhost', () => {
  //   visit.url('http://localhost:3001/')
  // })
  // it('should find nav',()=>{
  //   cy.get('nav')
  // })