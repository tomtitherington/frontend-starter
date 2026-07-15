import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Search } from "lucide-react";

import { Input } from "./input";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "file"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    type: "text",
    placeholder: "Search runs…",
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-72">
      <Input {...args} />
    </div>
  ),
};

// A stacked field with Nominal's tracked-uppercase caption above the control.
export const WithLabel: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-1.5">
      <label
        htmlFor="serial"
        className="label-mono text-[0.6875rem] text-muted-foreground"
      >
        Serial number
      </label>
      <Input id="serial" placeholder="VBAT_9845XK-30217" />
    </div>
  ),
};

// Icon-led search, echoing the "SEARCH" field in the Nominal chrome.
export const SearchField: Story = {
  render: () => (
    <div className="relative w-72">
      <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
      <Input className="pl-8" placeholder="Search assets…" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-72">
      <Input disabled placeholder="Disabled" />
    </div>
  ),
};

// aria-invalid drives the destructive border + ring treatment.
export const Invalid: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-1.5">
      <Input aria-invalid defaultValue="not-a-serial" />
      <span className="label-mono text-[0.625rem] text-destructive">
        Invalid serial number
      </span>
    </div>
  ),
};
