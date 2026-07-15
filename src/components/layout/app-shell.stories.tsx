import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  ArrowUpDown,
  Building2,
  Check,
  ChevronsUpDown,
  Command,
  Home,
  ListFilter,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  SlidersHorizontal,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const meta = {
  title: "Patterns/App Shell",
  parameters: {
    layout: "fullscreen",
    // The desktop sidebar is `position: fixed` and sized in `svh`, so it wants
    // a real viewport — fullscreen (no height-capped decorator) lets it behave
    // exactly as it would in the app.
    docs: {
      description: {
        component:
          "Twenty-style top-bar + sidebar shell, composed from the Nominal UI primitives. " +
          "The top bar is two aligned h-12 segments: the sidebar header (left) and the " +
          "content header (right), split by the sidebar's border. Toggle with the trigger, " +
          "the rail, or ⌘/Ctrl + B.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// A small square "tile" avatar — the neutral, near-sharp lockup used throughout.
function Tile({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-5 shrink-0 items-center justify-center rounded-sm bg-muted text-[0.625rem] font-semibold text-foreground">
      {children}
    </span>
  );
}

/* ---------------------------------------------------------------- Sidebar - */

// Lives in SidebarHeader — the top-LEFT segment of the bar.
function WorkspaceSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 flex-1 justify-start gap-2 px-1.5"
        >
          <span className="flex size-5 shrink-0 items-center justify-center rounded-sm bg-primary text-[0.625rem] font-semibold text-primary-foreground">
            S
          </span>
          <span className="truncate group-data-[collapsible=icon]:hidden">
            SaaS Interface
          </span>
          <ChevronsUpDown className="ml-auto size-3.5 text-muted-foreground group-data-[collapsible=icon]:hidden" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
        <DropdownMenuItem>
          <Tile>S</Tile> SaaS Interface
          <Check className="ml-auto size-3.5" />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Tile>A</Tile> Acme Corp
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Plus /> New workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const records = [
  { title: "People", icon: Users, badge: "5", isActive: true },
  { title: "Companies", icon: Building2 },
  { title: "Opportunities", icon: Target },
  { title: "Settings", icon: Settings },
];

const chats = [
  { title: "Closed Won Deal Post-mortem", time: "1m" },
  { title: "Q3 pipeline review", time: "2h" },
  { title: "Draft outreach to Figma", time: "1d" },
];

function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      {/* The workspace switcher is just part of the sidebar — NOT a top bar. */}
      <SidebarHeader>
        <div className="flex items-center gap-1">
          <WorkspaceSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="size-7 group-data-[collapsible=icon]:hidden"
          >
            <Search />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton variant="outline" tooltip="New chat">
                  <Plus />
                  <span>New chat</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Home">
                  <Home />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Assistant">
                  <Sparkles />
                  <span>Assistant</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Records</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {records.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={item.isActive}
                    tooltip={item.title}
                  >
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

        <SidebarGroup>
          <SidebarGroupLabel>Today</SidebarGroupLabel>
          <SidebarGroupAction title="New chat">
            <Plus />
            <span className="sr-only">New chat</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {chats.map((chat) => (
                <SidebarMenuItem key={chat.title}>
                  <SidebarMenuButton tooltip={chat.title}>
                    <MessageSquare />
                    <span>{chat.title}</span>
                  </SidebarMenuButton>
                  <SidebarMenuAction showOnHover>
                    <MoreHorizontal />
                    <span className="sr-only">Chat options</span>
                  </SidebarMenuAction>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Tom Titherington">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-sm bg-muted text-[0.625rem] font-semibold text-foreground">
                T
              </span>
              <span>Tom Titherington</span>
              <ChevronsUpDown className="ml-auto size-3.5 text-muted-foreground" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}

/* ------------------------------------------------------------------- Content */

const people = [
  { initial: "B", name: "Brian Chesky", email: "chesky@airbnb.com", company: "Airbnb", phone: "+1 123456789" },
  { initial: "D", name: "Dario Amodei", email: "amodei@anthropic.com", company: "Anthropic", phone: "+1 555123456" },
  { initial: "P", name: "Patrick Collison", email: "collison@stripe.com", company: "Stripe", phone: "+1 987653345" },
  { initial: "D", name: "Dylan Field", email: "field@figma.com", company: "Figma", phone: "+1 098822610" },
  { initial: "I", name: "Ivan Zhao", email: "zhao@notion.com", company: "Notion", phone: "+1 882261730" },
];

// A bordered pill — Twenty renders cell values as little chips.
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-sm border border-border px-1.5 py-0.5 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

function PeopleContent() {
  return (
    <>
      {/* The top bar: a gray strip in the content column, flush to the top and
          to the sidebar. Holds the collapse trigger, breadcrumb, and actions. */}
      <header className="flex h-12 shrink-0 items-center gap-2 border-b border-border bg-muted px-4">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-1 h-4" />
        <Users className="size-4 text-muted-foreground" />
        <span className="label-mono text-[0.6875rem] text-foreground">
          People
        </span>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm">
            <Plus /> New Person
          </Button>
          <kbd className="label-mono inline-flex items-center gap-1 rounded-sm border border-border px-1.5 py-1 text-[0.625rem] text-muted-foreground">
            <Command className="size-3" />K
          </kbd>
        </div>
      </header>

      {/* View toolbar. */}
      <div className="flex h-10 shrink-0 items-center gap-2 border-b border-border px-4">
        <span className="label-mono text-[0.6875rem] text-foreground">
          All People
        </span>
        <Badge variant="secondary">5</Badge>
        <div className="ml-auto flex items-center gap-0.5">
          <Button variant="ghost" size="sm">
            <ListFilter /> Filter
          </Button>
          <Button variant="ghost" size="sm">
            <ArrowUpDown /> Sort
          </Button>
          <Button variant="ghost" size="sm">
            <SlidersHorizontal /> Options
          </Button>
        </div>
      </div>

      {/* Records table. */}
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10 pl-4">
                <Checkbox aria-label="Select all" />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Emails</TableHead>
              <TableHead>Created by</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Phones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {people.map((person) => (
              <TableRow key={person.email}>
                <TableCell className="pl-4">
                  <Checkbox aria-label={`Select ${person.name}`} />
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center gap-2 font-medium text-foreground">
                    <Tile>{person.initial}</Tile>
                    {person.name}
                  </span>
                </TableCell>
                <TableCell>
                  <Chip>{person.email}</Chip>
                </TableCell>
                <TableCell>
                  <Chip>
                    <Tile>S</Tile> System
                  </Chip>
                </TableCell>
                <TableCell>
                  <Chip>
                    <Tile>{person.company.charAt(0)}</Tile>
                    {person.company}
                  </Chip>
                </TableCell>
                <TableCell>
                  <Chip>{person.phone}</Chip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

/* --------------------------------------------------------------------- Shell */

function Shell({ defaultOpen = true }: { defaultOpen?: boolean }) {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <PeopleContent />
      </SidebarInset>
    </SidebarProvider>
  );
}

export const Default: Story = {
  render: () => <Shell />,
};

// Same shell, booted with the sidebar collapsed to its icon rail.
export const Collapsed: Story = {
  render: () => <Shell defaultOpen={false} />,
};
