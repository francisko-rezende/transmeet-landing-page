import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import EducationOpportunityDiversity from '.'

export default {
  title: 'EducationOpportunityDiversity',
  component: EducationOpportunityDiversity
} as ComponentMeta<typeof EducationOpportunityDiversity>

//const Template: ComponentStory<typeof EducationOpportunityDiversity> = (args) => <EducationOpportunityDiversity {...args} />

const Template: ComponentStory<typeof EducationOpportunityDiversity> = () => (
  <EducationOpportunityDiversity />
)

export const Default = Template.bind({})
