import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-10">
      <div className="flex flex-col justify-center gap-3">
        <Input placeholder="this is my input component" />
        <Button>Submit</Button>
      </div>
      <div className="p-5">
        <ul>
          <li>first</li>
          <li>second</li>
          <li>third</li>
        </ul>
      </div>
    </main>
  );
}
