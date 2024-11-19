"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <Button onClick={() => handleClick()} size={"sm"}>
        Test Click Me: {count}
      </Button>
    </>
  );
}
