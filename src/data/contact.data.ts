import { GitHubIcon, LinkedInIcon } from '@components/icons'
import type { SocialLink } from '@/types/social.types'
import type { ContactTopic } from '@/types/content.types'
import { Mail } from '@lucide/vue'

export const emailAddress = 'mail@calvin-kamp.de'

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    icon: GitHubIcon,
    labelKey: 'sections.contact.socials.github',
    handle: 'calvin-kamp-dev',
    href: 'https://github.com/calvin-kamp-dev',
    external: true,
  },
  {
    id: 'linkedin',
    icon: LinkedInIcon,
    labelKey: 'sections.contact.socials.linkedin',
    handle: 'in/calvin-kamp',
    href: 'https://www.linkedin.com/in/calvin-kamp',
    external: true,
  },
  {
    id: 'email',
    icon: Mail,
    labelKey: 'sections.contact.socials.email',
    handle: emailAddress,
    href: `mailto:${emailAddress}`,
    external: false,
  },
]

export const contactTopics: ContactTopic[] = [
  { value: 'juniorRole', labelKey: 'sections.contact.form.topics.juniorRole' },
  { value: 'workingStudent', labelKey: 'sections.contact.form.topics.workingStudent' },
  { value: 'freelance', labelKey: 'sections.contact.form.topics.freelance' },
  { value: 'other', labelKey: 'sections.contact.form.topics.other' },
]
