import React from 'react';
import { Text, TYPOGRAPHY } from 'wix-ui-tpa/Text';
import { WidgetProps } from 'yoshi-flow-editor';
import { classes, st } from './Widget.st.css';
import { Grid } from 'wix-ui-tpa/Grid';
import { Card } from 'wix-ui-tpa/Card';
import { ThumbnailImage } from 'wix-ui-tpa/ThumbnailImage';
import { Button } from 'wix-ui-tpa/Button';

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
  isShowing = true;
  state = { numOfItemsToShow: 12 };

  handleShowMore = () => {
    this.setState({ numOfItemsToShow: this.props.items.length });
    this.isShowing = false;
  };

  render() {
    const { items } = this.props;

    return (
      <div data-hook="gallery-widget" className={st(classes.root, {})}>
        <Text data-hook="widget-title" typography={TYPOGRAPHY.smallTitle}>
          OOI Gallery
        </Text>
        <Grid
          data-hook="grid"
          maxColumns={3}
          width={500}
          maxColumnWidth={300}
          minColumnWidth={Card.MIN_WIDTH_MOBILE}
          showRowDivider
        >
          {this.props.items.map((data, index) => {
            if (index < this.state.numOfItemsToShow) {
              return (
                <Grid.Item colSpan={1} rowSpan={1}>
                  <Card
                    stacked
                    mediaAspectRatio={16 / 9}
                    media={<ThumbnailImage src={data.uri} />}
                    info={
                      <div>
                        <Text typography={TYPOGRAPHY.largeTitle}>
                          {data.title}
                        </Text>
                      </div>
                    }
                  ></Card>
                </Grid.Item>
              );
            }
          })}
        </Grid>{' '}
        {this.isShowing && (
          <Button
            data-hook="load-more-button"
            upgrade
            onClick={() => this.handleShowMore()}
          >
            Load More
          </Button>
        )}
      </div>
    );
  }
}

export default Widget;
