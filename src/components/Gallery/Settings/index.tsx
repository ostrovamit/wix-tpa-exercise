import React from 'react';
import { useExperiments, useTranslation } from 'yoshi-flow-editor';
import { SettingsTabLayout } from 'yoshi-flow-editor/tpa-settings/react';

import { MainTab } from './Tabs/MainTab';
import { DesignTab } from './Tabs/DesignTab';

export default () => {
  const { experiments } = useExperiments();
  const { t } = useTranslation();

  return (
    <SettingsTabLayout dataHook="settings-tabs">
      {experiments.enabled('specs.test.HideMainTab') ? null : (
        <SettingsTabLayout.Tab
          title={t('app.settings.tabs.main')}
          dataHook="main-tab-button"
          articleId="xxx-xxx-xxx-xxx"
          Component={() => <MainTab />}
        />
      )}
      <SettingsTabLayout.Tab
        title={t('app.settings.tabs.design')}
        dataHook="design-tab-button"
        articleId="xxx-xxx-xxx-xxx"
        Component={() => <DesignTab />}
      />
    </SettingsTabLayout>
  );
};
