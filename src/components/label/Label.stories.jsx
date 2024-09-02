import React from 'react'
import Label from './Label'

export default {
  title: 'Common/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['basic', 'point', 'plan'] },
    color: { control: 'select', options: ['gray', 'primary', 'blue', 'red'] },
    text: { control: 'text' },
    width: { control: 'text' },
    //backgroundColor: { control: "color" },
  },
  //args: { onClick: fn() },
}

export const label = args => {
  return <Label type={args.type} color={args.color} text={args.text} width={args.width} />
}
