import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import ManyPossibilities from '.'

export default {
  title: 'ManyPossibilities',
  component: ManyPossibilities
} as ComponentMeta<typeof ManyPossibilities>

//const Template: ComponentStory<typeof ManyPossibilities> = (args) => <ManyPossibilities {...args} />

const Template: ComponentStory<typeof ManyPossibilities> = () => (
  <ManyPossibilities />
)

export const Default = Template.bind({})
