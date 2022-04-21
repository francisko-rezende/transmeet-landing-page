import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import HomePageSecondaryTitle from '.'

export default {
  title: 'HomePageSecondaryTitle',
  component: HomePageSecondaryTitle
} as ComponentMeta<typeof HomePageSecondaryTitle>

//const Template: ComponentStory<typeof HomePageSecondaryTitle> = (args) => <HomePageSecondaryTitle {...args} />

const Template: ComponentStory<typeof HomePageSecondaryTitle> = () => (
  <HomePageSecondaryTitle />
)

export const Default = Template.bind({})
