import thunk from 'redux-thunk';
import { configureMockStore } from 'react-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

const middlewares = [thunk];
export const mockStore = configureMockStore(middlewares);

export const renderWithMockStore = (store, comp) =>
	render(<Provider store={store}> {comp} </Provider>);
