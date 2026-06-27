import { useState } from "react"
import {
  Bell,
  Check,
  Heart,
  Home,
  Mail,
  Menu,
  Plus,
  Search,
  Settings,
  Star,
  User,
} from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/alert-dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card"
import { Checkbox } from "@/components/checkbox"
import { Chip } from "@/components/chip"
import { CircularProgress } from "@/components/circular-progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu"
import { Fab } from "@/components/fab"
import { IconButton } from "@/components/icon-button"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { LinearProgress } from "@/components/linear-progress"
import { NavigationBar, NavigationBarItem } from "@/components/navigation-bar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover"
import { RadioGroup, RadioGroupItem } from "@/components/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select"
import { Separator } from "@/components/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/sheet"
import { Skeleton } from "@/components/skeleton"
import { Slider } from "@/components/slider"
import { Toaster, toast } from "@/components/snackbar"
import { Switch } from "@/components/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs"
import { Textarea } from "@/components/textarea"
import { Toggle } from "@/components/toggle"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/tooltip"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-medium tracking-tight">{title}</h2>
      <div className="flex flex-wrap items-center gap-4">{children}</div>
    </section>
  )
}

export default function App() {
  const [dark, setDark] = useState(false)
  const [nav, setNav] = useState("home")
  const [slider, setSlider] = useState([50])

  function toggleDark() {
    setDark((d) => {
      document.documentElement.classList.toggle("dark", !d)
      return !d
    })
  }

  return (
    <TooltipProvider>
      <Toaster />
      <div className="mx-auto max-w-4xl px-6 py-12 space-y-12">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Material 3 × shadcn</h1>
            <p className="text-muted-foreground">Every component from the md3 registry.</p>
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="dark">Dark</Label>
            <Switch id="dark" checked={dark} onCheckedChange={toggleDark} />
          </div>
        </header>

        <Section title="Buttons">
          <Button variant="elevated">Elevated</Button>
          <Button variant="filled">Filled</Button>
          <Button variant="tonal">Tonal</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
          <Button disabled>Disabled</Button>
        </Section>

        <Section title="Icon buttons & FAB">
          <IconButton variant="standard" aria-label="favorite"><Heart /></IconButton>
          <IconButton variant="filled" aria-label="add"><Plus /></IconButton>
          <IconButton variant="tonal" aria-label="settings"><Settings /></IconButton>
          <IconButton variant="outlined" aria-label="star"><Star /></IconButton>
          <Fab color="primary" aria-label="compose"><Plus /></Fab>
          <Fab size="extended"><Plus /> Extended</Fab>
        </Section>

        <Section title="Chips & toggle">
          <Chip kind="assist">Assist</Chip>
          <Chip kind="filter" selected>Selected</Chip>
          <Chip kind="suggestion">Suggestion</Chip>
          <Toggle aria-label="bold"><Star /></Toggle>
        </Section>

        <Section title="Badges">
          <Badge variant="dot" />
          <Badge variant="number">8</Badge>
          <Badge variant="number">99+</Badge>
          <Badge variant="pill" tone="neutral">New</Badge>
        </Section>

        <Section title="Form fields">
          <div className="w-64 space-y-4">
            <Input label="Outlined" supportingText="Supporting text" />
            <Input variant="filled" label="Filled" startIcon={<Search />} />
            <Input label="Error" error supportingText="Required" />
            <Textarea placeholder="Textarea…" rows={3} />
          </div>
          <div className="w-56 space-y-3">
            <Label>Select a fruit</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pick one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="cherry">Cherry</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Section>

        <Section title="Selection controls">
          <div className="flex items-center gap-2">
            <Checkbox id="c1" defaultChecked />
            <Label htmlFor="c1">Checkbox</Label>
          </div>
          <Switch defaultChecked />
          <RadioGroup defaultValue="a" className="flex gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="a" id="r1" />
              <Label htmlFor="r1">One</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="b" id="r2" />
              <Label htmlFor="r2">Two</Label>
            </div>
          </RadioGroup>
          <div className="w-56">
            <Slider value={slider} onValueChange={setSlider} max={100} step={1} />
          </div>
        </Section>

        <Section title="Cards">
          <Card variant="elevated" className="w-60">
            <CardHeader>
              <CardTitle>Elevated</CardTitle>
              <CardDescription>Shadow surface</CardDescription>
            </CardHeader>
            <CardContent>Card content goes here.</CardContent>
          </Card>
          <Card variant="filled" className="w-60">
            <CardHeader>
              <CardTitle>Filled</CardTitle>
              <CardDescription>Tonal surface</CardDescription>
            </CardHeader>
            <CardContent>Card content goes here.</CardContent>
          </Card>
          <Card variant="outlined" className="w-60">
            <CardHeader>
              <CardTitle>Outlined</CardTitle>
              <CardDescription>Bordered surface</CardDescription>
            </CardHeader>
            <CardContent>Card content goes here.</CardContent>
          </Card>
        </Section>

        <Section title="Communication">
          <div className="w-full space-y-3">
            <Alert>
              <Bell />
              <div>
                <AlertTitle>Heads up</AlertTitle>
                <AlertDescription>A neutral informational banner.</AlertDescription>
              </div>
            </Alert>
            <Alert tone="error">
              <Bell />
              <div>
                <AlertTitle>Something went wrong</AlertTitle>
                <AlertDescription>An error-toned banner.</AlertDescription>
              </div>
            </Alert>
          </div>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/80" alt="user" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-4 w-32" />
          </div>
        </Section>

        <Section title="Progress">
          <div className="w-64 space-y-4">
            <LinearProgress value={40} />
            <LinearProgress />
          </div>
          <CircularProgress value={70} />
          <CircularProgress />
        </Section>

        <Section title="Overlays">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="tonal">Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog title</DialogTitle>
                <DialogDescription>A Material 3 dialog surface.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="text">Cancel</Button>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outlined">Alert dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outlined"><Menu /> Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Side sheet</SheetTitle>
                <SheetDescription>Slides in from the edge.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="text">Popover</Button>
            </PopoverTrigger>
            <PopoverContent>Popover content.</PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="text">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><User className="mr-2 size-4" /> Profile</DropdownMenuItem>
              <DropdownMenuItem><Settings className="mr-2 size-4" /> Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Tooltip>
            <TooltipTrigger asChild>
              <IconButton variant="standard" aria-label="info"><Mail /></IconButton>
            </TooltipTrigger>
            <TooltipContent>Tooltip text</TooltipContent>
          </Tooltip>

          <Button variant="filled" onClick={() => toast("Snackbar message", { description: "Sent via Sonner." })}>
            Snackbar
          </Button>
        </Section>

        <Section title="Tabs">
          <Tabs defaultValue="one" className="w-full">
            <TabsList>
              <TabsTrigger value="one">Overview</TabsTrigger>
              <TabsTrigger value="two">Specs</TabsTrigger>
              <TabsTrigger value="three">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="one">Overview panel.</TabsContent>
            <TabsContent value="two">Specs panel.</TabsContent>
            <TabsContent value="three">Reviews panel.</TabsContent>
          </Tabs>
        </Section>

        <Section title="Accordion">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="a">
              <AccordionTrigger>What is MD3?</AccordionTrigger>
              <AccordionContent>Google's Material Design 3 spec.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionTrigger>Is it shadcn-compatible?</AccordionTrigger>
              <AccordionContent>Yes — it ships as a shadcn registry.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        <Section title="Table">
          <Table>
            <TableCaption>Recent components.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Button</TableCell>
                <TableCell>UI</TableCell>
                <TableCell><Badge variant="pill" tone="neutral"><Check className="size-3" /> Ready</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dialog</TableCell>
                <TableCell>UI</TableCell>
                <TableCell><Badge variant="pill" tone="neutral">Ready</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Section>

        <Separator />

        <Section title="Navigation bar">
          <NavigationBar className="w-full max-w-md">
            <NavigationBarItem icon={<Home />} label="Home" active={nav === "home"} onClick={() => setNav("home")} />
            <NavigationBarItem icon={<Search />} label="Search" active={nav === "search"} onClick={() => setNav("search")} />
            <NavigationBarItem icon={<Bell />} label="Alerts" active={nav === "alerts"} onClick={() => setNav("alerts")} />
            <NavigationBarItem icon={<User />} label="Profile" active={nav === "profile"} onClick={() => setNav("profile")} />
          </NavigationBar>
        </Section>
      </div>
    </TooltipProvider>
  )
}
