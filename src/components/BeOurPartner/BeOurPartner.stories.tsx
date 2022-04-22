import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import BeOurPartner from '.'

export default {
  title: 'BeOurPartner',
  component: BeOurPartner
} as ComponentMeta<typeof BeOurPartner>

//const Template: ComponentStory<typeof BeOurPartner> = (args) => <BeOurPartner {...args} />

const Template: ComponentStory<typeof BeOurPartner> = () => <BeOurPartner />

export const Default = Template.bind({})
