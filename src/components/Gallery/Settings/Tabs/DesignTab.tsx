import React from 'react';
import {
  useSettings,
  useStyles,
  SectionHeader,
  OpacityColorPicker,
  FontAndColorPicker,
} from 'yoshi-flow-editor/tpa-settings/react';
import { Divider, Composites, TextLabel, TextInput } from '@wix/wix-base-ui';

import stylesParams from '../../stylesParams';
import settingsParams from '../../settingsParams';

export const DesignTab: React.FC = () => {
  const settings = useSettings();
  const styles = useStyles();

  return (
    <>
      <SectionHeader text="Styles preferences" />
      <OpacityColorPicker
        title="Background Color"
        dataHook="design-tab-color-picker"
        value={styles.get(stylesParams.backgroundColor)}
        onChange={(value) => {
          styles.set(stylesParams.backgroundColor, value);
        }}
      />

      <Divider />

      <FontAndColorPicker
        title="Font settings"
        panelTitle="Choose your font"
        value={{
          color: styles.get(stylesParams.textColor),
          font: styles.get(stylesParams.textFont),
        }}
        onColorChange={(value) => styles.set(stylesParams.textColor, value)}
        onFontChange={(value) => styles.set(stylesParams.textFont, value)}
        fontPickerOptions={{
          fontMinSize: 12,
          fontMaxSize: 60,
        }}
      />
      <SectionHeader text="Settings preferences" />
      <Composites.TextInputLabeled>
        <TextLabel value="Greetings Text" />
        <TextInput
          value={settings.get(settingsParams.greetingsText)}
          placeholder="Enter loading text"
          onChange={(value: string) => {
            settings.set(settingsParams.greetingsText, value);
          }}
        />
      </Composites.TextInputLabeled>
    </>
  );
};
