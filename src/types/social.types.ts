import type { Component } from 'vue'

export interface SocialLink {
  id: string
  icon: Component
  labelKey: string
  handle: string
  href: string
  external: boolean
}
