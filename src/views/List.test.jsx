import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import List from './List';

describe('Component and Behavioral Tests', () => {
  it('Should test the component for loading state and one pokemon', async () => {
    render(<List />);

    // screen.debug();

    // see if there is an element with text of "loading"
    screen.getByText(/loading/i);

    // wait and see if an element with the text of "pikachu" appears
    await screen.findByText('pikachu');
  });

  it('Should test the behavior of the filtering', async () => {
    render(<List />);
    //could wait for loading message to be removed
    await waitForElementToBeRemoved(screen.getByText(/loading/i));
    // find the filter input box
    const search = screen.getByPlaceholderText('Find a Pokemon');

    //type the word "jiggly" into our search

    userEvent.type(search, 'jiggly');

    //check that only "jigglypuff" character appears
    return waitFor(() => {
      const result = screen.getByText('jigglypuff');
      screen.debug();
      expect(result.textContent).toEqual('jigglypuff');
    });

    // other methods
    // return waitFor(() => {
    //   const result = screen.getByLabelText('name');
    //   screen.debug();
    //   console.log('result', result);
    //   expect(result.textContent).toEqual('jigglypuff');
    // });

    // other methods
    // return waitFor(() => {
    //   const result = screen.getByRole('heading', {
    //     level: 2,
    //   });
    //   screen.debug();
    //   console.log('result', result);
    //   expect(result.textContent).toEqual('jigglypuff');
    // });
  });
});
