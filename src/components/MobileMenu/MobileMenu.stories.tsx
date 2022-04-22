import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import MobileMenu from '.'

export default {
  title: 'MobileMenu',
  component: MobileMenu
} as ComponentMeta<typeof MobileMenu>

const Template: ComponentStory<typeof MobileMenu> = () => <MobileMenu />

export const Default = Template.bind({})

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
