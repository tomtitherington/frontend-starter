import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Activity,
  CheckCircle2,
  CircleAlert,
  History,
  Satellite,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import { Badge } from "./badge";
import { Button } from "./button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Forge-SAR-200A</CardTitle>
        <CardDescription>Synthetic aperture radar</CardDescription>
        <CardAction>
          <Badge variant="success">Active</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Next-generation SAR satellite designed for high-resolution, all-weather
        Earth observation and reconnaissance.
      </CardContent>
      <CardFooter className="justify-between border-t pt-4">
        <span className="label-mono text-[0.6875rem] text-muted-foreground">
          LEO · V123.2.0
        </span>
        <Button variant="outline" size="sm">
          Open
        </Button>
      </CardFooter>
    </Card>
  ),
};

// The signature Nominal metric tile: a square tinted icon chip, a tracked
// caption, a large monospace readout, and a small directional delta.
function Metric({
  icon,
  label,
  value,
  unit,
  delta,
  tone = "muted",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit?: string;
  delta?: { dir: "up" | "down"; value: string; good: boolean };
  tone?: "muted" | "success" | "destructive";
}) {
  const chipTone = {
    muted: "bg-muted text-muted-foreground",
    success: "bg-success-subtle text-success",
    destructive: "bg-destructive-subtle text-destructive",
  }[tone];

  return (
    <Card className="flex-row items-center gap-3 rounded-none border-0 px-4 py-3">
      <div className={`flex size-9 items-center justify-center rounded-sm ${chipTone}`}>
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <span className="label-mono text-[0.625rem] text-muted-foreground">
          {label}
        </span>
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-2xl font-medium leading-none tabular-nums">
            {value}
          </span>
          {unit ? (
            <span className="label-mono text-xs text-muted-foreground">
              {unit}
            </span>
          ) : null}
          {delta ? (
            <span
              className={`label-mono ml-1 flex items-center gap-0.5 text-[0.625rem] ${
                delta.good ? "text-success" : "text-destructive"
              }`}
            >
              {delta.dir === "up" ? (
                <TrendingUp className="size-3" />
              ) : (
                <TrendingDown className="size-3" />
              )}
              {delta.value}
            </span>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

export const MetricRow: Story = {
  render: () => (
    <div className="grid grid-cols-2 divide-x divide-y divide-border border border-border md:grid-cols-4 md:divide-y-0">
      <Metric
        icon={<Satellite className="size-4" />}
        label="Active satellites"
        value="20"
        delta={{ dir: "down", value: "12%", good: false }}
      />
      <Metric
        icon={<CheckCircle2 className="size-4" />}
        label="Uptime rate"
        value="87.2"
        unit="%"
        tone="success"
        delta={{ dir: "up", value: "30%", good: true }}
      />
      <Metric
        icon={<CircleAlert className="size-4" />}
        label="Recent failure"
        value="IMU"
        unit="Drift"
        tone="destructive"
      />
      <Metric
        icon={<History className="size-4" />}
        label="Last contact"
        value="22"
        unit="h"
      />
    </div>
  ),
};

export const WithStats: Story = {
  render: () => (
    <Card className="w-72">
      <CardHeader>
        <CardDescription>Most recent run</CardDescription>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Activity className="size-4 text-muted-foreground" />
          <span className="font-mono tabular-nums">2 hr 30 min</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant="warning">
          <CircleAlert /> 320 violations
        </Badge>
      </CardContent>
    </Card>
  ),
};
