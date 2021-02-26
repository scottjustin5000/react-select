import React from 'react'

import Select from './'

export default {
  title: 'Select',
  component: Select,
};
const Template = (args) =><div style={{ width: '500px', fontFamily: ` 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif`}}><Select {...args} /> </div> 

export const Basic = Template.bind({})

Basic.args = {
  label: 'test',
  options: [{'label': 'foo', value: 'something'}, {'label': 'bar', value: 'another'}]
}