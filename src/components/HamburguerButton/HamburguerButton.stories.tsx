import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import HamburguerButton from '.'

export default {
  title: 'HamburguerButton',
  component: HamburguerButton
} as ComponentMeta<typeof HamburguerButton>

const Template: ComponentStory<typeof HamburguerButton> = (args) => (
  <HamburguerButton {...args} />
)

// const Template: ComponentStory<typeof HamburguerButton> = () => (
//   <HamburguerButton />
// )

export const Default = Template.bind({})
