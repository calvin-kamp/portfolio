import {
  AngularIcon,
  CssIcon,
  DjangoIcon,
  FigmaIcon,
  GitHubIcon,
  GitIcon,
  HtmlIcon,
  JavaScriptIcon,
  PythonIcon,
  SupabaseIcon,
  TailwindIcon,
  TypeScriptIcon,
  VueIcon,
} from '@components/icons'
import type { TechCategory } from '@/types/technology.types'
import { Code, Database, Wrench } from '@lucide/vue'

export const techCategories: TechCategory[] = [
  {
    id: 'interface',
    icon: Code,
    titleKey: 'sections.stack.groups.interface',
    technologies: [
      { icon: TypeScriptIcon, label: 'TypeScript', brand: '#007ACC', brandDark: '#007ACC' },
      { icon: JavaScriptIcon, label: 'JavaScript', brand: '#8A7318', brandDark: '#F0DB4F' },
      { icon: VueIcon, label: 'Vue 3', brand: '#2F7654', brandDark: '#41B883' },
      { icon: AngularIcon, label: 'Angular', brand: '#C0143C', brandDark: '#F2456B' },
      { icon: TailwindIcon, label: 'Tailwind', brand: '#1F7E9A', brandDark: '#38BDF8' },
      { icon: HtmlIcon, label: 'HTML', brand: '#B03A1B', brandDark: '#E54D26' },
      { icon: CssIcon, label: 'CSS', brand: '#2C6F99', brandDark: '#3D8FC6' },
    ],
  },
  {
    id: 'backend',
    icon: Database,
    titleKey: 'sections.stack.groups.backend',
    technologies: [
      { icon: PythonIcon, label: 'Python', brand: '#7A6000', brandDark: '#FFD845' },
      { icon: DjangoIcon, label: 'Django', brand: '#0C4B33', brandDark: '#44B78B' },
      { icon: SupabaseIcon, label: 'Supabase', brand: '#2A8A61', brandDark: '#3ECF8E' },
    ],
  },
  {
    id: 'tooling',
    icon: Wrench,
    titleKey: 'sections.stack.groups.tooling',
    technologies: [
      { icon: GitIcon, label: 'Git', brand: '#D6421A', brandDark: '#F34F29' },
      { icon: GitHubIcon, label: 'GitHub', brand: '#181616', brandDark: '#E6E6EA' },
      { icon: FigmaIcon, label: 'Figma', brand: '#C43D14', brandDark: '#F24E1E' },
    ],
  },
]
