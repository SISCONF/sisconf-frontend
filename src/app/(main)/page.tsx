import { ModeToggle } from "@/components/theme/mode-toggle";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen bg-background">
      <div className="">
        <ModeToggle />
      </div>
    </main>
  );
}
