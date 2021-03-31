import {
  createSettingsParams,
  SettingsParamType,
} from 'yoshi-flow-editor/tpa-settings';
import applicationJson from '../../../.application.json';

export type ISettingsParams = {
  greetingsText: SettingsParamType.Text;
};

export default createSettingsParams<ISettingsParams>({
  greetingsText: {
    type: SettingsParamType.Text,
    getDefaultValue: ({ t }) =>
      `${t('app.settings.defaults.greetingsPretext')} ${
        applicationJson.appName
      }`,
  },
});
