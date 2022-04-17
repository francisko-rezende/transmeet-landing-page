import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import AppLinks from '.'

export default {
  title: 'AppLinks',
  component: AppLinks
} as ComponentMeta<typeof AppLinks>

//const Template: ComponentStory<typeof AppLinks> = (args) => <AppLinks {...args} />

const Template: ComponentStory<typeof AppLinks> = () => <AppLinks />

export const Default = Template.bind({})
Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
