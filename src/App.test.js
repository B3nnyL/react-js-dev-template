import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
	render(<App />);
	const header = screen.getByRole('heading', { level: 1 });
	expect(header).toBeInTheDocument();
	const headerContent = header.textContent;
	expect(headerContent).toEqual('Hello world');
});
