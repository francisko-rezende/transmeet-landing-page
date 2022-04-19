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

// const Template: ComponentStory<typeof CloseMenuButton> = () => <CloseMenuButton />

export const Default = Template.bind({})
