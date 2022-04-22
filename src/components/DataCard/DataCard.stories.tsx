import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import DataCard from '.'

export default {
  title: 'DataCard',
  component: DataCard
} as ComponentMeta<typeof DataCard>

const Template: ComponentStory<typeof DataCard> = (args) => (
  <DataCard {...args} />
)

export const First = Template.bind({})
First.args = {
  percentage: '72',
  explanation: 'Não possui ensino Médio e 56% o Fundamental'
}

export const Second = Template.bind({})
Second.args = {
  percentage: '82',
  explanation: 'Abandonaram os estudos ainda no ensino básico'
}

export const Third = Template.bind({})
Third.args = {
  percentage: '0,3',
  explanation: 'Quantidade de pessoas Trans nas universidades federais'
}
