import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import ContactForm from '.'

export default {
  title: 'ContactForm',
  component: ContactForm
} as ComponentMeta<typeof ContactForm>

//const Template: ComponentStory<typeof ContactForm> = (args) => <ContactForm {...args} />

const Template: ComponentStory<typeof ContactForm> = () => <ContactForm />

export const Default = Template.bind({})
