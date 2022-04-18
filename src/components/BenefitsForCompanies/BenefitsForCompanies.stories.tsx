import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import BenefitsForCompanies from '.'

export default {
  title: 'BenefitsForCompanies',
  component: BenefitsForCompanies
} as ComponentMeta<typeof BenefitsForCompanies>

//const Template: ComponentStory<typeof BenefitsForCompanies> = (args) => <BenefitsForCompanies {...args} />

const Template: ComponentStory<typeof BenefitsForCompanies> = () => (
  <BenefitsForCompanies />
)

export const Default = Template.bind({})
