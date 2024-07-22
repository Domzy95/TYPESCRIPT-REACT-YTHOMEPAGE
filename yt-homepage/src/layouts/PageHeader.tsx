import logo from "../assets/logo.png";
import { Menu } from "lucide-react";
import { Button } from "../components/Button";
//! ZA IMPORT IKONE UPORABLJAMO LUCID ICONS IKONE
export function PageHeader() {
  return (
    <div className="flex gap-20 lg:gap-20 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-12" alt="logo" />
        </a>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
