import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const Default = Template.bind({})
