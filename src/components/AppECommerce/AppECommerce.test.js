import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppECommerce from './AppECommerce';

describe('<AppECommerce />', () => {
  test('it should mount', () => {
    render(<AppECommerce />);
    
    const appECommerce = screen.getByTestId('AppECommerce');

    expect(appECommerce).toBeInTheDocument();
  });
});