import { Button } from "@/components/ui/Button";

export default function ButtonDevPage() {
  return (
    <main className="flex min-h-screen flex-col gap-6 p-10 bg-background">
      <Button>Primary</Button>

      <Button variant="secondary">Secondary</Button>

      <Button variant="outline">Outline</Button>

      <Button variant="ghost">Ghost</Button>

      <Button variant="danger">Danger</Button>

      <Button size="sm">Small</Button>

      <Button size="md">Medium</Button>

      <Button size="lg">Large</Button>

      <Button loading>Loading</Button>

      <Button disabled>Disabled</Button>

    </main>
  );
}