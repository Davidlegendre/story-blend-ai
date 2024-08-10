import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ChildReact({ children }) {
  
  return (
    <NextUIProvider skipFramerMotionAnimations >
      <NextThemesProvider attribute="class" >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
