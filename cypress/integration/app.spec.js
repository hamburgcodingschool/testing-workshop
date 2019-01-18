const longNoteText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

it('Tests the core flow of the app', () => {
    cy.visit('http://localhost:3000')
    // ensuring visual integrity of the initial app screen
    cy.matchImageSnapshot('initial-view')

    // create two notes
    cy.get('[data-testid="composer-input"]')
        .type('This is a new short note')
    cy.get('[data-testid="submit-button"]')
        .click()
    cy.get('[data-testid="composer-input"]')
        .type(longNoteText, { delay: 1 })
    cy.get('[data-testid="submit-button"]')
        .click()
    // pin the second note
    cy.get('[data-testid="pin-note"]').eq(1)
        .click()

    // reload and make sure notes are still there
    cy.reload()
    cy.get('.note').should(($notes) => expect($notes).to.have.length(2))

    // ensuring visual integrity of notes list
    cy.matchImageSnapshot('notes-list')

    // use search to filter notes list
    cy.get('[data-testid="search-input"')
        .type('Lorem')
    cy.get('.note').should(($notes) => expect($notes).to.have.length(1))

    // reset search and filter for pinned notes
    cy.get('[data-testid="search-input"')
        .clear()
    cy.get('[data-testid="pinned-toggle"]')
        .click()
    cy.get('.note').should(($notes) => expect($notes).to.have.length(1))

    // reset pinned toggle and delete all notes
    cy.get('[data-testid="pinned-toggle"]')
        .click()
    cy.get('[data-testid="delete-all"]')
        .click()
    cy.get('[data-testid="confirm-deletion"]')
        .click()
})
