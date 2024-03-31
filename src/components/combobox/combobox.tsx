"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const datas = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
];


interface ComboboxProps {
	datas: any;
}

const Combobox = ({datas}:ComboboxProps) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

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
                        ? datas.find(
                              (data:any) => data.value === value
                          )?.label
                        : "Select data..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search data..." />
					<CommandList>
						<CommandEmpty>No data found.</CommandEmpty>
						<CommandGroup>
							{datas.map((data:any) => (
								<CommandItem
									key={data.value}
									value={data.value}
									onSelect={(currentValue) => {
										setValue(
											currentValue === value
												? ""
												: currentValue
										);
										setOpen(false);
									}}
								>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											value === data.value
												? "opacity-100"
												: "opacity-0"
										)}
									/>
									{data.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default Combobox;
