import React from 'react';
import { Text, TYPOGRAPHY } from 'wix-ui-tpa/Text';
import { WidgetProps } from 'yoshi-flow-editor';
import { classes, st } from './Widget.st.css';

export type ControllerProps = {
  items: [
    {
      uri: string;
      width: number;
      height: number;
      title: string;
      guid: string;
      mediaType: string;
      subtype: string;
      fileUrl: string;
    },
  ];
};

export class Widget extends React.Component<WidgetProps<ControllerProps>> {
  render() {
    const { items } = this.props;

    return (
      <div data-hook="gallery-widget" className={st(classes.root, {})}>
        <Text typography={TYPOGRAPHY.smallTitle}>OOI Gallery</Text>
        <div>Complete me...</div>
      </div>
    );
  }
}

export default Widget;
