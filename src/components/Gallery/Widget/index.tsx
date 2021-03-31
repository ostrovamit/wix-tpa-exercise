import React, { FC } from 'react';
import { useExperiments, useTranslation, WidgetProps } from 'yoshi-flow-editor';
import { useSettings } from 'yoshi-flow-editor/tpa-settings/react';
import { Button } from 'wix-ui-tpa/Button';
import settingsParams from '../settingsParams';
import { st, classes } from './Widget.st.css';

export type ControllerProps = {
  // Here, props passed via controller's `setProps` should be defined.
};

const Widget: FC<WidgetProps<ControllerProps>> = () => {
  const settings = useSettings();
  const { experiments } = useExperiments();
  const { t } = useTranslation();

  return (
    <div className={st(classes.root, {})} data-hook="Gallery-wrapper">
      <div className={classes.header}>
        <h2 data-hook="app-title">
          {t('app.widget.welcome')} {settings.get(settingsParams.greetingsText)}
          !
        </h2>
      </div>
      {/* {This is a dummy experiment. To generate a new experiment,
            check this guide: https://github.com/wix-private/fed-handbook/blob/master/EXPERIMENTS.md#create-experiment} */}
      {experiments.enabled('specs.test.ShouldHideButton') ? null : (
        <Button className={classes.mainButton}>Click me</Button>
      )}
    </div>
  );
};

export default Widget;
