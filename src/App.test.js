// eslint-disable-next-line react/display-name
jest.mock('./components/box', () => () => <div role="box"/>);

import { React } from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	const { getByRole } = render(<App/>);

	expect(getByRole('box')).toBeInTheDocument();
});
