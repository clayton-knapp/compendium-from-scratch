import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
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

    // find the filter input box
    const search = screen.getByPlaceholderText('Find a Pokemon');

    //type the word "venusaur" into our search

    await userEvent.type(search, 'jiggly');

    screen.debug();

    //check that only "jigglypuff" character appears

    //FAILED ATTEMPT 1
    const result = await screen.findByText('jigglypuff', {}, { timeout: 2000 });
    expect(result.textContent).toEqual('jigglypuff');

    // FAILED ATTEMPT 2
    // return waitFor(async () => {
    // const result = await screen.findByLabelText('name');
    // console.log('result', result);
    // expect(result.textContent).toEqual('venusaur');
    // });

    // FAILED ATTEMPT 3
    // waitFor(async () => {
    //   const result = await screen.findByRole('heading');
    //   console.log('result', result);
    //   expect(result.textContent).toEqual('venusaur');
    // });
  });
});
