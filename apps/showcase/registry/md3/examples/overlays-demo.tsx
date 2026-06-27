"use client"

import { Copy, Pencil, Archive, Trash2, HelpCircle, ChevronDown } from "lucide-react"

import { Button } from "@/registry/md3/ui/button"
import { IconButton } from "@/registry/md3/ui/icon-button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/md3/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/md3/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/md3/ui/popover"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/md3/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/md3/ui/tooltip"
import { Toaster, toast } from "@/registry/md3/ui/snackbar"

const MENU = [
  { icon: Copy, label: "Duplicate" },
  { icon: Pencil, label: "Rename" },
  { icon: Archive, label: "Archive" },
  { icon: Trash2, label: "Delete" },
]

export default function OverlaysDemo() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center gap-3.5">
        <Toaster />

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="filled">Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reset preferences?</DialogTitle>
              <DialogDescription>
                This restores every Material 3 token to its default value. You
                can&apos;t undo this action.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="text" size="text">
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="filled">Reset</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outlined">
              Menu
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {MENU.map(({ icon: Icon, label }) => (
              <DropdownMenuItem key={label}>
                <Icon />
                {label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="outlined"
          onClick={() =>
            toast("Changes saved", {
              action: { label: "Undo", onClick: () => {} },
            })
          }
        >
          Show snackbar
        </Button>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outlined">Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="mb-1.5 text-sm font-medium">Popover surface</div>
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              Anchored, dismissible content at elevation level 2.
            </p>
          </PopoverContent>
        </Popover>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="filled">Open sheet</Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Settings</SheetTitle>
              <SheetDescription>
                Side sheets host secondary content at elevation level 2.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <Tooltip>
          <TooltipTrigger asChild>
            <IconButton variant="standard" aria-label="Help">
              <HelpCircle />
            </IconButton>
          </TooltipTrigger>
          <TooltipContent>Plain tooltip</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
