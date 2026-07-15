import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "./badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const meta = {
  title: "UI/Table",
  component: Table,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

type Run = {
  id: number;
  status: "ok" | "review";
  violations: string;
  created: string;
  start: string;
};

const runs: Run[] = [
  { id: 123, status: "review", violations: "12/42 (28%)", created: "6 days ago", start: "Jan 28, 2025 16:21 UTC" },
  { id: 122, status: "ok", violations: "0/38 (0%)", created: "6 days ago", start: "Jan 28, 2025 15:04 UTC" },
  { id: 121, status: "review", violations: "7/51 (14%)", created: "7 days ago", start: "Jan 27, 2025 22:47 UTC" },
  { id: 120, status: "ok", violations: "0/44 (0%)", created: "7 days ago", start: "Jan 27, 2025 19:12 UTC" },
  { id: 119, status: "review", violations: "23/60 (38%)", created: "8 days ago", start: "Jan 26, 2025 11:38 UTC" },
  { id: 118, status: "ok", violations: "1/33 (3%)", created: "9 days ago", start: "Jan 25, 2025 08:55 UTC" },
];

export const RunsList: Story = {
  render: () => (
    <Table>
      <TableCaption>Runs — last 30 days</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-16">ID</TableHead>
          <TableHead>Review status</TableHead>
          <TableHead>Open violations</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Start time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {runs.map((run) => (
          <TableRow key={run.id}>
            <TableCell className="font-mono tabular-nums">{run.id}</TableCell>
            <TableCell>
              {run.status === "ok" ? (
                <Badge variant="success">OK</Badge>
              ) : (
                <Badge variant="warning">Review</Badge>
              )}
            </TableCell>
            <TableCell className="font-mono tabular-nums">
              {run.violations}
            </TableCell>
            <TableCell className="text-muted-foreground">
              {run.created}
            </TableCell>
            <TableCell className="font-mono tabular-nums text-muted-foreground">
              {run.start}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Default = RunsList;

type Asset = {
  name: string;
  serial: string;
  contact: string;
  health: "active" | "degraded" | "failing";
};

const assets: Asset[] = [
  { name: "Vista-201A", serial: "201", contact: "2h ago", health: "active" },
  { name: "Forge-SAR-200A", serial: "200", contact: "30m ago", health: "degraded" },
  { name: "Eclipse-RF-210B", serial: "210", contact: "3d ago", health: "failing" },
  { name: "Vista-201C", serial: "204", contact: "5m ago", health: "active" },
];

export const StatusRows: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Asset</TableHead>
          <TableHead>Serial</TableHead>
          <TableHead>Last contact</TableHead>
          <TableHead className="text-right">Health</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {assets.map((asset) => (
          <TableRow
            key={asset.serial}
            className={
              asset.health === "degraded"
                ? "bg-warning-subtle hover:bg-warning-subtle"
                : asset.health === "failing"
                  ? "bg-destructive-subtle hover:bg-destructive-subtle"
                  : undefined
            }
          >
            <TableCell className="font-medium">{asset.name}</TableCell>
            <TableCell className="font-mono tabular-nums text-muted-foreground">
              #{asset.serial}
            </TableCell>
            <TableCell className="font-mono tabular-nums text-muted-foreground">
              {asset.contact}
            </TableCell>
            <TableCell className="text-right">
              {asset.health === "active" ? (
                <Badge variant="success">Active</Badge>
              ) : asset.health === "degraded" ? (
                <Badge variant="warning">Degraded</Badge>
              ) : (
                <Badge variant="destructive">Failing</Badge>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
