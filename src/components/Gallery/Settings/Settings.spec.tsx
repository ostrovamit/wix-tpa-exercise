import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Settings from '.';
import { testkit } from 'yoshi-flow-editor/testkit';

describe('Settings', () => {
  testkit.beforeAndAfter();

  beforeEach(() => {
    testkit.reset();
  });

  it('should render tabs', async () => {
    const { TestComponent } = testkit.getSettings(Settings);

    render(<TestComponent />);

    await screen.findByTestId('settings-tabs');

    expect(await screen.findByTestId('main-tab')).toBeInTheDocument();
  });
});
