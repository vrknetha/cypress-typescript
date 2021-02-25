declare namespace Cypress {
  interface Chainable {
    search(value: string): Chainable<void>;
  }
}
