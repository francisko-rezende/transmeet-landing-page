import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import ThisIsOurJob from '.'

export default {
  title: 'ThisIsOurJob',
  component: ThisIsOurJob
} as ComponentMeta<typeof ThisIsOurJob>

//const Template: ComponentStory<typeof ThisIsOurJob> = (args) => <ThisIsOurJob {...args} />

const Template: ComponentStory<typeof ThisIsOurJob> = () => <ThisIsOurJob />

export const Default = Template.bind({})
