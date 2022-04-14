import { action } from '@storybook/addon-actions';
import {
  Title,
  Subtitle,
  Description,
  Primary as PrimaryStory,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import type { Button } from '../..';
import { ButtonGroup, Icon } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';
import ButtonNew from './ButtonNew';

export default {
  title: 'Inputs/ButtonNew',
  component: ButtonNew,
  parameters: {
    docs: {
      description: {
        component: 'Indicates an actionable user action.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <PrimaryStory />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof ButtonGroup>;

export const Default = () => (
  <ButtonNew onClick={action('click')}>Button</ButtonNew>
);

export const Square: ComponentStory<typeof ButtonNew> = () => (
  <ButtonNew square>
    <Icon name='plus' size='x20' />
  </ButtonNew>
);

export const Primary: ComponentStory<typeof ButtonNew> = () => (
  <ButtonNew primary>Primary</ButtonNew>
);

export const Sizes: ComponentStory<typeof ButtonGroup> = () => (
  <>
    <ButtonGroup marginBlockEnd={12}>
      <ButtonNew small>Button</ButtonNew>
      <ButtonNew>Button</ButtonNew>
    </ButtonGroup>
    <ButtonGroup>
      <ButtonNew mini square>
        <Icon name='circled-arrow-down' size='x16' />
      </ButtonNew>
      <ButtonNew tiny square>
        <Icon name='circled-arrow-down' size='x20' />
      </ButtonNew>
      <ButtonNew small square>
        <Icon name='circled-arrow-down' size='x24' />
      </ButtonNew>
      <ButtonNew square>
        <Icon name='circled-arrow-down' size='x20' />
      </ButtonNew>
    </ButtonGroup>
  </>
);

export const AsLink: ComponentStory<typeof ButtonNew> = () => (
  <ButtonNew is='a' href='https://rocket.chat' external>
    Button
  </ButtonNew>
);

export const States = () => (
  <>
    <PropsVariationSection
      component={ButtonNew}
      common={{ onClick: action('click') }}
      xAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus focus-visible' },
        disabled: { disabled: true },
      }}
      yAxis={{
        'square + icon': {
          square: true,
          children: <Icon name='circled-arrow-down' size='x20' />,
        },
        'icon + text': {
          children: (
            <>
              <Icon name='baloon-text' size='x16' /> Button
            </>
          ),
        },
        'text': {
          children: 'Button',
        },
        'primary': {
          children: 'Button',
          primary: true,
        },
        'secondary': {
          children: 'Button',
          secondary: true,
        },
        'secondary-danger': {
          children: 'Button',
          secondaryDanger: true,
        },
        'danger': {
          children: 'Button',
          danger: true,
        },
      }}
    />
    <PropsVariationSection
      component={ButtonNew}
      common={{
        small: true,
        onClick: action('click'),
      }}
      xAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus focus-visible' },
        disabled: { disabled: true },
      }}
      yAxis={{
        'square + icon': {
          square: true,
          children: <Icon name='circled-arrow-down' size='x20' />,
        },
        'icon + text': {
          children: (
            <>
              <Icon name='baloon-text' size='x16' /> Button
            </>
          ),
        },
        'text': {
          children: 'Button',
        },
        'primary': {
          children: 'Button',
          primary: true,
        },
        'secondary': {
          children: 'Button',
          secondary: true,
        },
        'secondary-danger': {
          children: 'Button',
          secondaryDanger: true,
        },
        'danger': {
          children: 'Button',
          danger: true,
        },
      }}
    />
  </>
);
