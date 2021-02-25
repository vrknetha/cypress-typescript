describe(`google search test`, () => {
  const searchKey = `Michael Jordan`;

  beforeEach(() => {
    cy.visit(`/`);
  });

  it(`search using text and verify field should have the value`, () => {
    cy.search(searchKey);
    cy.get(`input[type="text"]`).should(`have.value`, searchKey);
  });

  it(`verify the number of results generated`, () => {
    let length = 0;
    cy.search(searchKey)
      .get(`div[role="option"]`)
      .each((element) => {
        if (element.text() !== "") {
          length += 1;
          cy.wrap(element)
            .contains(`michael`, { matchCase: false })
            .contains(`jordan`, { matchCase: false });
        }
      })
      .then(() => {
        cy.wrap(length).should(`eq`, 10);
      });
  });
});
