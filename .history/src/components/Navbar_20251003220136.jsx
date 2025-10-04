import { useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export const Navbar = () => {
  const [isScorlled, setIsScrolled] = React.useState(false)
  return (
      <nav className={cn("fixed w-full z-40 transition-all duration-300",

      )}>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
  )
}