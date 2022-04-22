import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import SimpleSearch from '.'

export default {
  title: 'SimpleSearch',
  component: SimpleSearch
} as ComponentMeta<typeof SimpleSearch>

const Template: ComponentStory<typeof SimpleSearch> = () => <SimpleSearch />

export const Default = Template.bind({})
