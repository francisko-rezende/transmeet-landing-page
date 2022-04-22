import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import CloseMenuButton from '.'

export default {
  title: 'CloseMenuButton',
  component: CloseMenuButton
} as ComponentMeta<typeof CloseMenuButton>

const Template: ComponentStory<typeof CloseMenuButton> = (args) => (
  <CloseMenuButton {...args} />
)

export const Default = Template.bind({})
