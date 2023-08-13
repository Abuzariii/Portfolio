import Cover from "@/components/landing/cover/cover";
import Stack from "@/components/landing/stack/stack";
import Projects from "@/components/landing/projects/projects";
import Button from "@/components/landing/projects/button";

export default function Home() {
  return (
    <div>
      <Cover />
      <Stack />
      <Projects />
      <Button />
    </div>
  );
}
