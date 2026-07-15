import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

const meta = {
  title: "UI/Select",
  component: Select,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// The Nominal time-range control — reads like the tracked "WEEK" dropdown.
export const Default: Story = {
  render: () => (
    <Select defaultValue="week">
      <SelectTrigger className="label-mono w-32 text-xs">
        <SelectValue placeholder="Range" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="day">Day</SelectItem>
        <SelectItem value="week">Week</SelectItem>
        <SelectItem value="month">Month</SelectItem>
        <SelectItem value="quarter">Quarter</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Grouped: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select an asset" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Assets</SelectLabel>
          <SelectItem value="vista-201a">Vista-201A</SelectItem>
          <SelectItem value="forge-sar-200a">Forge-SAR-200A</SelectItem>
          <SelectItem value="eclipse-rf-210b">Eclipse-RF-210B</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
