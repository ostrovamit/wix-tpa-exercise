import { benchmark } from '@wix/perfer-sled';
import { waitForPageInteractive } from '@wix/perfer-viewer-utils';
import { ViewerE2EDriver } from './Gallery.e2e.driver';
import { flowModel } from '../../flowModel';

const componentName = 'Gallery';
const pageUrl = flowModel.components[componentName].viewer.viewerUrl;

benchmark(componentName, async () => {
  const driver = new ViewerE2EDriver();
  await driver.setup(pageUrl, { ssr: false });
  await waitForPageInteractive(driver.page);
});
