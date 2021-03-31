import React from 'react';
import { render } from '@testing-library/react';
import Widget from '.';
import { createSettingsParams, testkit } from 'yoshi-flow-editor/testkit';
import settingsParams from '../settingsParams';

describe('Widget', () => {
  testkit.beforeAndAfter();

  beforeEach(() => {
    testkit.reset();
  });

  it('should render a title correctly', async () => {
    const settings = createSettingsParams(settingsParams, {
      greetingsText: 'to Test App',
    });

    const {
      TestComponent,
      context: { i18n },
    } = testkit.getWidget(Widget, { settings });

    const { findByTestId } = render(<TestComponent />);
    const element = await findByTestId('app-title');

    expect(element.textContent).toBe(
      `${i18n.t('app.widget.welcome')} ${settings.greetingsText}!`,
    );
  });
});
