import { AlertCircle } from "lucide-react"

import { Input } from "@/registry/md3/ui/input"

export default function TextFieldsDemo() {
  return (
    <div className="grid max-w-3xl grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
      <Input
        variant="filled"
        label="Label"
        supportingText="Supporting text"
        defaultValue="Filled field"
      />
      <Input
        variant="outlined"
        label="Label"
        supportingText="Supporting text"
        defaultValue="Outlined field"
      />
      <Input
        variant="outlined"
        error
        label="Email"
        supportingText="Enter a valid email"
        defaultValue="not-an-email"
        endIcon={<AlertCircle />}
      />
    </div>
  )
}
