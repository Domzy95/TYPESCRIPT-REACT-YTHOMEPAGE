import logo from "../assets/logo.png";
import { Menu, Upload, Bell, User, Mic, Search, ArrowLeft } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
//! ZA IMPORT IKONE UPORABLJAMO LUCID ICONS IKONE
export function PageHeader() {
  const [showFullSearch, setShowFullSearch] = useState(false);
  return (
    <div className="flex gap-20 lg:gap-20 justify-between pt-2 mb-2 mx-4">
      <div
        className={`flex gap-4 items-center flex-shrink-0 ${
          showFullSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-12" alt="logo" />
        </a>
      </div>

      <form
        className={`  gap-4 flex-grow justify-center ${
          showFullSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {setShowFullSearch && (
          <Button
            onClick={() => setShowFullSearch(false)}
            type="button"
            className="flex-shrink-0"
            size="icon"
            variant="ghost"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[700px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="flex-shrink-0 py-2 px-2 rounded-r-full border-secondary-border">
            <Search />
          </Button>
        </div>
        <Button type="button" className="flex-shrink-0" size="icon">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex flex-shrink-0 md-gap-2 ${
          showFullSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullSearch(true)}
          className="md:hidden"
          size="icon"
          variant="default"
        >
          <Search />
        </Button>
        <Button
          type="button"
          className="md:hidden"
          size="icon"
          variant="default"
        >
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}
