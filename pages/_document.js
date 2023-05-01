import Sidebar from "@/components/Sidebar";
import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";

export default function Document() {
  const toggleMode = () => {
    if (mode == "") {
      setMode("dark");
    } else {
      setMode("");
    }
  };
  const [mode, setMode] = useState("");
  return (
    <Html lang="en" className={mode}>
      <Head />
      <body>
        <Main getDark={toggleMode} />
        <NextScript />
      </body>
    </Html>
  );
}
