import { Info, AlertCircle } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/md3/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/registry/md3/ui/alert"
import { Skeleton } from "@/registry/md3/ui/skeleton"

const FAQ = [
  {
    q: "How are tokens applied?",
    a: "The md3-theme style item writes the shadcn neutral roles plus MD3 shape, elevation, and motion tokens into your globals.css.",
  },
  {
    q: "Is it CLI-installable?",
    a: "Yes — every item validates against the shadcn registry schema, so npx shadcn add resolves dependencies automatically.",
  },
  {
    q: "Light and dark?",
    a: "Both ship as cssVars; toggling the .dark class swaps the entire palette.",
  },
]

export default function DisclosureDemo() {
  return (
    <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-2">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[13px] text-muted-foreground">Accordion</span>
        <div className="overflow-hidden rounded-xl border border-border">
          <Accordion type="single" collapsible defaultValue="item-0">
            {FAQ.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="last:border-b-0">
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-mono text-[13px] text-muted-foreground">
          Banners &amp; skeleton
        </span>
        <Alert tone="neutral">
          <Info />
          <div>
            <AlertTitle>Neutral banner</AlertTitle>
            <AlertDescription>
              A tonal surface for non-blocking messages.
            </AlertDescription>
          </div>
        </Alert>
        <Alert tone="error">
          <AlertCircle />
          <div>
            <AlertTitle>Error banner</AlertTitle>
            <AlertDescription>Something needs your attention.</AlertDescription>
          </div>
        </Alert>
        <div className="mt-1 flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-3 w-[70%]" />
            <Skeleton className="h-3 w-[45%]" />
          </div>
        </div>
      </div>
    </div>
  )
}
