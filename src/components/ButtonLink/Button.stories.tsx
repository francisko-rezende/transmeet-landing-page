import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import ButtonLink from '.'

export default {
  title: 'Button',
  component: ButtonLink
} as ComponentMeta<typeof ButtonLink>

const Template: ComponentStory<typeof ButtonLink> = (args) => (
  <ButtonLink {...args} />
)

// const Template: ComponentStory<typeof Button> = () => <Button />

export const Default = Template.bind({})
Default.args = {
  children: 'Cadastrar'
}
