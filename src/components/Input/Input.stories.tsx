import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Input from '.'

export default {
  title: 'Input',
  component: Input
} as ComponentMeta<typeof Input>

//const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

const Template: ComponentStory<typeof Input> = () => <Input />

export const Default = Template.bind({})
