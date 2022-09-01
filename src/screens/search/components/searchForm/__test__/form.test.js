import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import SearchForm from '..';
import api from 'services/api-service';

async function fetchUsers(query) {
  try {
    const { data } = await api.get(`search/users?q=` + query, {
      headers: {
        Authorization: 'Bearer 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',
      },
    });
    return data;
  } catch (err) {
    console.error(err);
  }
}

test('Have input type search', () => {
  render(
    <Provider store={store}>
      <SearchForm />
    </Provider>
  );
  const queryInput = screen.getByTestId('query');
  expect(queryInput).toHaveValue('');
});

test('get input search value correctly', () => {
  render(
    <Provider store={store}>
      <SearchForm />
    </Provider>
  );
  const queryInput = screen.getByTestId('query');
  fireEvent.change(queryInput, { target: { value: 'joe' } });
  expect(queryInput.value).toBe('joe');
});

test.skip('Input Value more than 3', async () => {
  render(
    <Provider store={store}>
      <SearchForm />
    </Provider>
  );

  const queryInput = screen.getByTestId('query');
  fireEvent.change(queryInput, { target: { value: 'joe' } });
  await waitFor(() =>
    expect(queryInput).toHaveBeenCalledWith(fetchUsers('joe'))
  );
});
