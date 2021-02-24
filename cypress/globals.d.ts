declare namespace Cypress {
  interface Chainable<Subject> {
    search(value: string): Chainable<void>;
  }
}
