import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

function AllTheProviders({ children }) {
  return <Router>{children}</Router>;
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
