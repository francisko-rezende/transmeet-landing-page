import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import AboutPageContent from '.'

export default {
  title: 'AboutPageContent',
  component: AboutPageContent
} as ComponentMeta<typeof AboutPageContent>

//const Template: ComponentStory<typeof AboutPageContent> = (args) => <AboutPageContent {...args} />

const Template: ComponentStory<typeof AboutPageContent> = () => (
  <AboutPageContent />
)

export const Default = Template.bind({})
