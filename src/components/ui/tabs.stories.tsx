import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Database, FileText, ListChecks } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[32rem]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-sm border border-border p-4 text-sm text-muted-foreground">
      {children}
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="workbooks">Workbooks</TabsTrigger>
        <TabsTrigger value="runs">Runs</TabsTrigger>
        <TabsTrigger value="checklists">Checklists</TabsTrigger>
        <TabsTrigger value="data">Data</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Panel>Timeline and metrics for the selected asset.</Panel>
      </TabsContent>
      <TabsContent value="workbooks">
        <Panel>Analysis workbooks attached to this asset.</Panel>
      </TabsContent>
      <TabsContent value="runs">
        <Panel>All test runs recorded against this asset.</Panel>
      </TabsContent>
      <TabsContent value="checklists">
        <Panel>Pre-flight and post-flight checklists.</Panel>
      </TabsContent>
      <TabsContent value="data">
        <Panel>Raw telemetry channels and datasets.</Panel>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="data">
      <TabsList>
        <TabsTrigger value="data">
          <Database /> Data
        </TabsTrigger>
        <TabsTrigger value="checklists">
          <ListChecks /> Checklists
        </TabsTrigger>
        <TabsTrigger value="workbooks">
          <FileText /> Workbooks
        </TabsTrigger>
      </TabsList>
      <TabsContent value="data">
        <Panel>Raw telemetry channels and datasets.</Panel>
      </TabsContent>
      <TabsContent value="checklists">
        <Panel>Pre-flight and post-flight checklists.</Panel>
      </TabsContent>
      <TabsContent value="workbooks">
        <Panel>Analysis workbooks attached to this asset.</Panel>
      </TabsContent>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="runs">Runs</TabsTrigger>
        <TabsTrigger value="archive" disabled>
          Archive
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Panel>Timeline and metrics for the selected asset.</Panel>
      </TabsContent>
      <TabsContent value="runs">
        <Panel>All test runs recorded against this asset.</Panel>
      </TabsContent>
    </Tabs>
  ),
};
