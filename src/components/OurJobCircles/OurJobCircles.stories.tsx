import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import OurJobCircles from '.'

export default {
  title: 'OurJobCircles',
  component: OurJobCircles
} as ComponentMeta<typeof OurJobCircles>

const Template: ComponentStory<typeof OurJobCircles> = (args) => (
  <OurJobCircles {...args} />
)

export const Default = Template.bind({})
