import type { Component } from 'vue'

export interface Technology {
  icon: Component
  label: string
  brand: string
  brandDark: string
}

export interface TechCategory {
  id: 'interface' | 'backend' | 'tooling'
  icon: Component
  titleKey: string
  technologies: Technology[]
}
