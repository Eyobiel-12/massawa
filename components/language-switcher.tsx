"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`rounded-full ${className} flex items-center justify-center`}
          aria-label="Switch Language"
        >
          <Globe className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={5} className="min-w-[120px]">
        <DropdownMenuItem
          className={language === "en" ? "bg-amber-50 font-medium" : ""}
          onClick={() => setLanguage("en")}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          className={language === "nl" ? "bg-amber-50 font-medium" : ""}
          onClick={() => setLanguage("nl")}
        >
          Nederlands
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
