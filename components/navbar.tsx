import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  ChevronDown,
  FileTextIcon,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 z-50 backdrop-blur-xs shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary flex items-center space-x-2 font-display">
            <span className="bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text drop-shadow-lg">
              namma
            </span>
            <span className="text-blue-600 drop-shadow-md font-black italic">
              AI
            </span>
          </h2>
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button size="lg">
                <LayoutDashboard />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="lg" variant="outline">
                  <StarsIcon />
                  <span className="hidden md:inline">Growth Tools</span>
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileTextIcon />
                    <span>Resume Builder</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    href="/cover-letter"
                    className="flex items-center gap-2"
                  >
                    <PenBox />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
