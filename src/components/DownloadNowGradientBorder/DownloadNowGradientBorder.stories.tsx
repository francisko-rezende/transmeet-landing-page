import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import DownloadNowGradientBorder from '.'

export default {
  title: 'DownloadNowGradientBorder',
  component: DownloadNowGradientBorder
} as ComponentMeta<typeof DownloadNowGradientBorder>

const Template: ComponentStory<typeof DownloadNowGradientBorder> = () => (
  <DownloadNowGradientBorder />
)

export const Default = Template.bind({})
