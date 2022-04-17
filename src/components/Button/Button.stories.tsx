import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from '.'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

// const Template: ComponentStory<typeof Button> = () => <Button />

export const Default = Template.bind({})
Default.args = {
  children: 'Cadastrar'
}
