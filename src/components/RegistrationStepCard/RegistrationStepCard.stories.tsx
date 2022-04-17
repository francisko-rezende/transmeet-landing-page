import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import RegistrationStepCard from '.'

export default {
  title: 'RegistrationStepCard',
  component: RegistrationStepCard
} as ComponentMeta<typeof RegistrationStepCard>

const Template: ComponentStory<typeof RegistrationStepCard> = (args) => (
  <RegistrationStepCard {...args} />
)

// const Template: ComponentStory<typeof RegistrationStepCard> = () => <RegistrationStepCard />

export const First = Template.bind({})

export const Second = Template.bind({})
Second.args = {
  stepNumber: '2',
  ringType: 'blueBottom',
  stepTitle: 'Leia o perfil que a empresa busca',
  stepDescription:
    'Leia atentamente sobre a empresa e o perfil que ela está buscando'
}

export const Third = Template.bind({})
Third.args = {
  stepNumber: '3',
  ringType: 'blueLeft',
  stepTitle: 'Se candidade para a oportunidade',
  stepDescription:
    'Caso se identifique com o perfil se candidate para a oportunidade'
}

export const Fourth = Template.bind({})
Fourth.args = {
  stepNumber: '4',
  ringType: 'blueTop',
  stepTitle: 'Espere o “match” acontecer',
  stepDescription:
    'Ocorrendo a combinação (match) você receberá um aviso e a empresa entrará em contato com você'
}
