import { render } from '@testing-library/react';
import React from 'react';
import { textTestkitFactory } from 'wix-ui-tpa/dist/src/testkit';
import {
  createSettingsParams,
  SettingsObject,
  testkit,
} from 'yoshi-flow-editor/testkit';
import Widget from '.';
import settingsParams from '../settingsParams';

describe('Widget', () => {
  let settings: SettingsObject<any>;

  testkit.beforeAndAfter();

  beforeEach(() => {
    testkit.reset();
    settings = createSettingsParams(settingsParams, {});
  });

  it('renders the widget title', async () => {
    const { TestComponent } = testkit.getWidget(Widget, { settings });
    const { findByTestId } = render(<TestComponent />);
    const baseElement = await findByTestId('gallery-widget');

    const textDriver = textTestkitFactory({
      wrapper: baseElement,
      // Task 1: pass the correct dataHook
      dataHook: 'incorrect-datahook',
    });

    // Task 2: correct the following expectation
    expect(await textDriver.getContent()).toBe('Correct me...');
  });

  it('renders three items in a row', async () => {
    const { TestComponent } = testkit.getWidget(Widget, { settings });
    const { findByTestId } = render(<TestComponent />);
    const baseElement = await findByTestId('gallery-widget');

    // Task 3: use the relevant testkit

    // expect(await gridDriver.itemsPerRow()).toBe(3);
  });

  it('renders the "loading more" button on startup by default', async () => {
    // Task 4: complete the test
  });

  it('hides the "loading more" button after loading all items by clicking it', async () => {
    // Task 5: complete the test
  });
});
