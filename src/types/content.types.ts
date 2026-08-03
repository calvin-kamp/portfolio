import type { Component } from 'vue'

export interface MetaItem {
  id: string
  icon: Component
  labelKey: string
}

export interface Fact {
  id: string
  labelKey: string
  valueKey: string
}

export interface ContactTopic {
  value: string
  labelKey: string
}
