import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppWebDesign from './AppWebDesign';

describe('<AppWebDesign />', () => {
  test('it should mount', () => {
    render(<AppWebDesign />);
    
    const appWebDesign = screen.getByTestId('AppWebDesign');

    expect(appWebDesign).toBeInTheDocument();
  });
});