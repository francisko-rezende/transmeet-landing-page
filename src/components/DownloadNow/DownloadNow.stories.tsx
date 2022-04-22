import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import DownloadNow from '.'

export default {
  title: 'DownloadNow',
  component: DownloadNow
} as ComponentMeta<typeof DownloadNow>

const Template: ComponentStory<typeof DownloadNow> = (args) => (
  <DownloadNow {...args} />
)

export const Default = Template.bind({})
