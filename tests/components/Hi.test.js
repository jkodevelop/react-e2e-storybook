import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import Hi from '../../source/js/pages/Hi.js';

describe('App component', () => {
  beforeAll(() => {
    render(<Hi />)
  })

  it('should have the right message in the dom', () => {
    // expect(screen.getByText(/hello/i)).toBeInTheDocument()
    const welcomeKey = 'Welcome to React';
    expect(screen.getByText(welcomeKey)).toBeInTheDocument();
    const contentKey = 'hi-content';
    expect(screen.getByText(contentKey)).toBeInTheDocument();
  })

  afterAll(cleanup)
})