import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Activity,
  ChevronRight,
  CircleUser,
  Database,
  FileText,
  Gauge,
  LayoutDashboard,
  MoreHorizontal,
  Plus,
  Radio,
  Rocket,
  Satellite,
  Search,
  SignalHigh,
  TriangleAlert,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "./sidebar";

const meta = {
  title: "UI/Sidebar",
  component: Sidebar,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  // The sidebar is fixed/positioned, so give every story a real viewport to
  // live in rather than Storybook's default padded canvas.
  decorators: [
    (Story) => (
      <div className="h-[36rem] w-full overflow-hidden">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// A little header lockup used across the stories.
function Brand() {
  return (
    <div className="flex items-center gap-2 px-1 py-1.5">
      <div className="flex size-7 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
        <Rocket className="size-4" />
      </div>
      <div className="flex flex-col leading-tight group-data-[collapsible=icon]:hidden">
        <span className="label-mono text-[0.6875rem] text-foreground">
          Nominal
        </span>
        <span className="label-mono text-[0.625rem] text-muted-foreground">
          Mission Control
        </span>
      </div>
    </div>
  );
}

const navMain = [
  { title: "Overview", icon: LayoutDashboard, isActive: true },
  { title: "Telemetry", icon: Activity, badge: "12" },
  { title: "Ground Stations", icon: Satellite },
  { title: "Datasets", icon: Database },
  { title: "Reports", icon: FileText },
];

// A generic dashboard body so the sidebar has something to sit next to.
function Body({ title }: { title: string }) {
  return (
    <>
      <header className="flex h-12 shrink-0 items-center gap-2 border-b border-border px-4">
        <SidebarTrigger />
        <SidebarSeparatorVertical />
        <span className="label-mono text-[0.6875rem] text-muted-foreground">
          {title}
        </span>
      </header>
      <div className="grid flex-1 auto-rows-min gap-4 p-4 sm:grid-cols-3">
        {[
          { label: "Altitude", value: "412 km" },
          { label: "Velocity", value: "7.66 km/s" },
          { label: "Signal", value: "-92 dBm" },
        ].map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col gap-2 rounded-md border border-border bg-card p-4"
          >
            <span className="label-mono text-[0.625rem] text-muted-foreground">
              {metric.label}
            </span>
            <span className="text-2xl font-semibold tabular-nums">
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function SidebarSeparatorVertical() {
  return <div className="h-4 w-px bg-border" />;
}

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Brand />
          <div className="relative group-data-[collapsible=icon]:hidden">
            <Search className="pointer-events-none absolute top-1/2 left-2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <SidebarInput placeholder="Search…" className="pl-7" />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.isActive}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    {item.badge && (
                      <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel>Monitors</SidebarGroupLabel>
            <SidebarGroupAction title="Add monitor">
              <Plus />
              <span className="sr-only">Add monitor</span>
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <SignalHigh />
                    <span>Link budget</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Radio />
                    <span>Downlink</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>OK</SidebarMenuBadge>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <TriangleAlert />
                    <span>Anomalies</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>3</SidebarMenuBadge>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <CircleUser />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm">Tom Titherington</span>
                  <span className="label-mono text-[0.625rem] text-muted-foreground">
                    Flight Director
                  </span>
                </div>
              </SidebarMenuButton>
              <SidebarMenuAction showOnHover>
                <MoreHorizontal />
                <span className="sr-only">Account menu</span>
              </SidebarMenuAction>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <Body title="Overview" />
      </SidebarInset>
    </SidebarProvider>
  ),
};

// Icon-collapsible: collapses to an icon rail; tooltips appear on hover.
export const IconCollapsible: Story = {
  render: () => (
    <SidebarProvider defaultOpen={false}>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <Brand />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.isActive} tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <Body title="Collapse the rail with the trigger, or ⌘/Ctrl + B" />
      </SidebarInset>
    </SidebarProvider>
  ),
};

// Collapsible submenus via a nested SidebarMenuSub.
export const WithSubmenus: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Brand />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Programmes</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Gauge />
                    <span>Launch Ops</span>
                    <ChevronRight className="ml-auto" />
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton isActive>
                        <span>Pre-flight</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>
                        <span>Countdown</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>
                        <span>Post-flight</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Database />
                    <span>Archive</span>
                    <ChevronRight className="ml-auto" />
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>
                        <span>Missions</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>
                        <span>Telemetry dumps</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <Body title="Programmes" />
      </SidebarInset>
    </SidebarProvider>
  ),
};

// Floating variant: the panel detaches from the edge with a border + radius.
export const Floating: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar variant="floating">
        <SidebarHeader>
          <Brand />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.isActive}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <Body title="Floating" />
      </SidebarInset>
    </SidebarProvider>
  ),
};

// Inset variant: the main content sits in a rounded, shadowed card.
export const Inset: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar variant="inset">
        <SidebarHeader>
          <Brand />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.isActive}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <Body title="Inset" />
      </SidebarInset>
    </SidebarProvider>
  ),
};

// Loading state built from SidebarMenuSkeleton.
export const Loading: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Brand />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {Array.from({ length: 6 }).map((_, i) => (
                  <SidebarMenuItem key={i}>
                    <SidebarMenuSkeleton showIcon />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <Body title="Loading" />
      </SidebarInset>
    </SidebarProvider>
  ),
};
