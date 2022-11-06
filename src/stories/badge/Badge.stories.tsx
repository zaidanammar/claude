import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

import Badge from '../../components/atoms/Badge'

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = () => (
  <article className="p-4">
    <h1 className=" font-heading text-2xl font-semibold">badge</h1>
    <section className="flex flex-col max-w-sm">
      <div className="mt-5">
        <p className="font-medium font-heading mb-3">badge regular</p>
        <Badge count={2}>
          <MdOutlineFavoriteBorder className="fill-primary" size={32} />
        </Badge>
      </div>
    </section>
  </article>
)

export const Default = Template.bind({})
