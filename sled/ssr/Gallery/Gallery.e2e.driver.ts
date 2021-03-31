/// <reference types="@wix/sled-test-runner" />
import { CommonViewerDriver } from '../CommonViewerDriver';
import componentConfig from '../../../src/components/Gallery/.component.json';

const { id: widgetId } = componentConfig;

export class ViewerE2EDriver extends CommonViewerDriver {
  name: string = 'Gallery';
  widgetId: string = widgetId;

  async getAppTitle() {
    return this.page.$eval('h2', (e: HTMLElement) => e.innerText);
  }
}
