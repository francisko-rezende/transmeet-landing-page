import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import CardRing from '.'

export default {
  title: 'CardRing',
  component: CardRing
} as ComponentMeta<typeof CardRing>

const Template: ComponentStory<typeof CardRing> = (args) => (
  <CardRing {...args} />
)

export const First = Template.bind({})

export const Second = Template.bind({})
Second.args = {
  ringType: 'blueBottom',
  stepNumber: '2'
}

export const Third = Template.bind({})
Third.args = {
  ringType: 'blueLeft',
  stepNumber: '3'
}

export const Fourth = Template.bind({})
Fourth.args = {
  ringType: 'blueTop',
  stepNumber: '4'
}
