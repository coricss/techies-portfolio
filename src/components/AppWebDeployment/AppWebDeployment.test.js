import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppWebDeployment from './AppWebDeployment';

describe('<AppWebDeployment />', () => {
  test('it should mount', () => {
    render(<AppWebDeployment />);
    
    const appWebDeployment = screen.getByTestId('AppWebDeployment');

    expect(appWebDeployment).toBeInTheDocument();
  });
});