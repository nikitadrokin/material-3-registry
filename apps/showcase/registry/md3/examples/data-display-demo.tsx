import { Palette, Type, Layers, Sparkles, Mail, Bell } from "lucide-react"

import { Avatar, AvatarFallback } from "@/registry/md3/ui/avatar"
import { Badge } from "@/registry/md3/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/md3/ui/table"
import { LinearProgress } from "@/registry/md3/ui/linear-progress"
import { CircularProgress } from "@/registry/md3/ui/circular-progress"

const LIST = [
  { icon: Palette, title: "Color tokens", sub: "Tonal palettes + semantic roles", badge: "OK" },
  { icon: Type, title: "Typography", sub: "Display → label, 5 grades", badge: "OK" },
  { icon: Layers, title: "Elevation", sub: "Tonal + shadow, 5 levels", badge: "OK" },
  { icon: Sparkles, title: "Motion", sub: "Emphasized easing + duration", badge: "WIP" },
]

const ROWS = [
  { name: "Button", status: "stable", coverage: "100%", tone: "primary" as const },
  { name: "Text field", status: "stable", coverage: "100%", tone: "primary" as const },
  { name: "Navigation", status: "beta", coverage: "80%", tone: "neutral" as const },
  { name: "Date picker", status: "planned", coverage: "0%", tone: "neutral" as const },
]

export default function DataDisplayDemo() {
  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 gap-7 md:grid-cols-[1fr_1.3fr]">
        {/* List */}
        <div className="overflow-hidden rounded-xl border border-border">
          {LIST.map(({ icon: Icon, title, sub, badge }, i) => (
            <div
              key={title}
              className="md-state-layer flex cursor-pointer items-center gap-4 px-4 py-3"
              style={{
                borderBottom: i < LIST.length - 1 ? "1px solid var(--border)" : undefined,
              }}
            >
              <Avatar>
                <AvatarFallback>
                  <Icon className="size-5" />
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <div className="text-[15px] font-medium">{title}</div>
                <div className="truncate text-[13px] text-muted-foreground">{sub}</div>
              </div>
              <Badge variant="pill" tone={badge === "OK" ? "primary" : "neutral"}>
                {badge}
              </Badge>
            </div>
          ))}
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Component</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Coverage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ROWS.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>
                  <Badge variant="pill" tone={row.tone}>
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right tabular-nums text-muted-foreground">
                  {row.coverage}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Progress + badges */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] items-center gap-8">
        <div className="flex flex-col gap-3.5">
          <span className="font-mono text-[13px] text-muted-foreground">
            Linear progress
          </span>
          <LinearProgress value={62} />
          <LinearProgress />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2.5">
            <span className="font-mono text-[13px] text-muted-foreground">Circular</span>
            <CircularProgress />
          </div>
          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[13px] text-muted-foreground">Badges</span>
            <div className="flex items-center gap-5">
              <span className="relative inline-flex">
                <Mail className="size-6" />
                <Badge variant="number" tone="error" className="absolute -right-1.5 -top-1">
                  3
                </Badge>
              </span>
              <span className="relative inline-flex">
                <Bell className="size-6" />
                <Badge variant="dot" tone="error" className="absolute right-0 top-0" />
              </span>
              <Badge variant="pill" tone="neutral">
                New
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
