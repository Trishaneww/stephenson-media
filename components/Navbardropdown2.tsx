"use client"
import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { resources, resources2 } from "@/data"
 

 
export function NavDropDown2() {
  return (
    <NavigationMenu className="hidden lg:flex ml-8 mr-8 mt-[0.2px] bg-transparent">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm tracking-wide font-bold space-x-1 text-slate-50">INDUSTRIES</NavigationMenuTrigger>
          <NavigationMenuContent className="border-none">
            <ul className="flex flex-wrap w-[200px] md:w-[300px] gap-1 p-2 md:p-4">
              {resources2.map((component) => (
                <a href={component.link} key={component.id} className="w-full lg:w-4/5 p-2 text-slate-50 font-bold">{component.title}</a>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-slate-900">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"