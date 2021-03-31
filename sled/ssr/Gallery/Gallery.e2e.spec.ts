/// <reference types="@wix/sled-test-runner" />
import applicationConfig from '../../../.application.json';
import { ViewerE2EDriver } from './Gallery.e2e.driver';
import { flowModel } from '../../flowModel';

const { appName } = applicationConfig;
const componentName = 'Gallery';

const pageUrl = flowModel.components[componentName].viewer.viewerUrl;

describe(componentName, () => {
  let driver: ViewerE2EDriver;

  beforeEach(async () => {
    driver = new ViewerE2EDriver();
    // You can remove this condition after viewerUrl will be updated to real viewer website.
    const homeUrl = pageUrl.includes('artemy1.wixsite.com/editor-flow-app')
      ? pageUrl + `&compName=${componentName}`
      : pageUrl;
    await driver.setup(homeUrl, { ssr: true });
    await driver.componentReady();
  });

  afterEach(async () => {
    await driver.closePage();
  });

  it('should render a widget with needed content', async () => {
    const appTitle = await driver.getAppTitle();
    expect(appTitle).toContain(appName);
  });
});
