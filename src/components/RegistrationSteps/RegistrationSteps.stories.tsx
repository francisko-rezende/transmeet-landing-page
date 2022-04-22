import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import RegistrationSteps from '.'

export default {
  title: 'RegistrationSteps',
  component: RegistrationSteps
} as ComponentMeta<typeof RegistrationSteps>

const Template: ComponentStory<typeof RegistrationSteps> = () => (
  <RegistrationSteps />
)

export const Default = Template.bind({})
