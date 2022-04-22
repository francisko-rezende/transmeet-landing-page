import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import ContactPageContent from '.'

export default {
  title: 'ContactPageContent',
  component: ContactPageContent
} as ComponentMeta<typeof ContactPageContent>

const Template: ComponentStory<typeof ContactPageContent> = () => (
  <ContactPageContent />
)

export const Default = Template.bind({})
