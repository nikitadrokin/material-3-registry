import { Plus, Heart, Bookmark, Settings, MoreVertical, Pencil } from "lucide-react"

import { Button } from "@/registry/md3/ui/button"
import { IconButton } from "@/registry/md3/ui/icon-button"
import { Fab } from "@/registry/md3/ui/fab"
import { Separator } from "@/registry/md3/ui/separator"

export default function ButtonsDemo() {
  return (
    <div className="flex flex-col gap-8">
      {/* Common buttons — the five MD3 variants */}
      <div className="flex flex-wrap items-center gap-3.5">
        <Button variant="elevated">Elevated</Button>
        <Button variant="filled">Filled</Button>
        <Button variant="tonal">Tonal</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text" size="text">
          Text
        </Button>
        <Button variant="filled">
          <Plus />
          With icon
        </Button>
        <Button disabled>Disabled</Button>
      </div>

      {/* Icon buttons + FABs */}
      <div className="flex flex-wrap items-center gap-4">
        <IconButton variant="filled" aria-label="Favorite">
          <Heart />
        </IconButton>
        <IconButton variant="tonal" aria-label="Bookmark">
          <Bookmark />
        </IconButton>
        <IconButton variant="outlined" aria-label="Settings">
          <Settings />
        </IconButton>
        <IconButton variant="standard" aria-label="More">
          <MoreVertical />
        </IconButton>
        <Separator orientation="vertical" className="h-10" />
        <Fab color="surface" aria-label="Add">
          <Plus />
        </Fab>
        <Fab color="primary" size="extended">
          <Pencil />
          Extended FAB
        </Fab>
      </div>
    </div>
  )
}
