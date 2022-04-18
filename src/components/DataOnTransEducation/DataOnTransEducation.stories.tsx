import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import DataOnTransEducation from '.'

export default {
  title: 'DataOnTransEducation',
  component: DataOnTransEducation
} as ComponentMeta<typeof DataOnTransEducation>

//const Template: ComponentStory<typeof DataOnTransEducation> = (args) => <DataOnTransEducation {...args} />

const Template: ComponentStory<typeof DataOnTransEducation> = () => (
  <DataOnTransEducation />
)

export const Default = Template.bind({})
