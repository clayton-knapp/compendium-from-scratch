import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import List from './List';

describe('Component and Behavioral Tests', () => {
  it('Should test the component for loading state and one pokemon', async () => {
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>
    );

    // screen.debug();

    // see if there is an element with text of "loading"
    screen.getByText(/loading/i);

    // wait and see if an element with the text of "pikachu" appears
    await screen.findByText('pikachu');
  });

  it('Should test the behavior of the filtering', async () => {
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>
    );

    // screen.debug();

    // find the filter input box
    const search = screen.getByPlaceholderText('Find a Pokemon');
  });
});
