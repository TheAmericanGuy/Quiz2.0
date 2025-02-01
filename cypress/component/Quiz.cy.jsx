import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders the start button correctly', () => {
    mount(<Quiz />);
    cy.contains('Start').should('be.visible');  // Adjust 'Start' based on your button text
  });

  it('shows the first question when the quiz starts', () => {
    mount(<Quiz />);
    cy.contains('Start').click();  // Clicks the start button
    cy.get('.question').should('be.visible');  // Assumes questions have a class "question"
  });
});
