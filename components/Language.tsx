"use client";

import { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const languages = [
  {
    value: "hindi",
    label: "Hindi",
  },
  {
    value: "malayalam",
    label: "Malayalam",
  },
  {
    value: "kannada",
    label: "Kannada",
  },
  {
    value: "tamil",
    label: "Tamil",
  },
  {
    value: "english",
    label: "English",
  },
  {
    value: "japanese",
    label: "Japanese",
  },
  {
    value: "chinese",
    label: "Chinese",
  },
  {
    value: "spanish",
    label: "Spanish",
  },
  {
    value: "korean",
    label: "Korean",
  },
  {
    value: "telugu",
    label: "Telugu",
  },
];

export function Language({ setLanguage }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setLanguage(value);
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? languages.find((language) => language.value === value)?.label
            : "Language ..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Language..." className="h-9" />
          <CommandEmpty>No language found .</CommandEmpty>
          <CommandGroup>
            {languages.map((language) => (
              <CommandItem
                key={language.value}
                value={language.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {language.label}
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === language.value ? "opacity-100" : "opacity-0",
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
