import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CheckCircle2, CircleAlert, XCircle } from "lucide-react";

import { Badge } from "./badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "success",
        "warning",
        "destructive",
      ],
    },
  },
  args: { children: "Label", variant: "default" },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = { args: { variant: "secondary" } };

export const Outline: Story = { args: { variant: "outline" } };

// The Nominal status vocabulary: soft-fill / saturated-text for healthy and
// degraded states, solid red for hard failure.
export const Statuses: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Degraded</Badge>
      <Badge variant="destructive">Failing</Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="success">
        <CheckCircle2 /> Nominal
      </Badge>
      <Badge variant="warning">
        <CircleAlert /> Drift
      </Badge>
      <Badge variant="destructive">
        <XCircle /> Fault
      </Badge>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
};
