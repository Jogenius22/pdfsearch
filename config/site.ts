import { NavItem } from "@/types"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Jogenius",
  description: "Unlock the secrets of any website",
  mainNav: [],
  links: {
    twitter: "https://fiverr.com/genius_ai",
    github: "https://github.com/jogenius22",
  },
}
