import { Button, ButtonGroup, Link } from "@nextui-org/react";

export default function Buttons() {
  return (
    <div>
      <Link className="gap-2" isBlock showAnchorIcon href="https://github.com/Davidlegendre/story-blend-ai/blob/main/src/lib/components/Book.tsx" color="secondary" target="_blank">
        <img
          src="https://img.icons8.com/?size=100&id=Nlsua06Gvxel&format=png&color=000000"
          alt="react"
          width={22}
        />
        Componente
      </Link>
      <Link isBlock className="gap-2" showAnchorIcon href="https://github.com/Davidlegendre/story-blend-ai/blob/main/src/lib/components/css/Book.module.css" target="_blank" color="secondary">
        <img
          src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
          alt="css"
          width={22}
        />
        Css Module
      </Link>
    </div>
  );
}
