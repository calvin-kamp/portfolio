import type { MetaItem } from '@/types/content.types'
import { Clock, Code, MapPin } from '@lucide/vue'

export const heroMeta: MetaItem[] = [
  { id: 'location', icon: MapPin, labelKey: 'sections.hero.meta.location' },
  { id: 'availability', icon: Clock, labelKey: 'sections.hero.meta.availability' },
  { id: 'background', icon: Code, labelKey: 'sections.hero.meta.background' },
]
