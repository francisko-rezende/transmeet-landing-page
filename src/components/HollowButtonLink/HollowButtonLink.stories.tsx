import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import HollowButtonLink from '.'

export default {
  title: 'HollowButtonLink',
  component: HollowButtonLink
} as ComponentMeta<typeof HollowButtonLink>

//const Template: ComponentStory<typeof HollowButtonLink> = (args) => <HollowButtonLink {...args} />

const Template: ComponentStory<typeof HollowButtonLink> = () => (
  <HollowButtonLink />
)

export const Default = Template.bind({})
