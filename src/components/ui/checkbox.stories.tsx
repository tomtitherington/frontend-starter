import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Checkbox } from "./checkbox";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" defaultChecked />
      <label htmlFor="terms" className="text-sm">
        Include archived runs
      </label>
    </div>
  ),
};

// Echoes the Nominal FILTER panel: a tracked-uppercase caption over a stack of
// checkbox rows.
export const FilterList: Story = {
  render: () => (
    <fieldset className="flex w-56 flex-col gap-2.5">
      <legend className="label-mono mb-1 text-[0.6875rem] text-muted-foreground">
        Status
      </legend>
      {[
        { id: "active", label: "Active", checked: true },
        { id: "degraded", label: "Degraded", checked: true },
        { id: "failing", label: "Failing", checked: false },
        { id: "offline", label: "Offline", checked: false },
      ].map((row) => (
        <label
          key={row.id}
          htmlFor={row.id}
          className="flex items-center gap-2 text-sm"
        >
          <Checkbox id={row.id} defaultChecked={row.checked} />
          {row.label}
        </label>
      ))}
    </fieldset>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, checked: true },
};
