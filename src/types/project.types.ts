export interface ProjectCoverRow {
  width: number
  accent?: boolean
}

export interface Project {
  id: string
  name: string
  repoUrl: string
  liveUrl: string
  featured: boolean
  tags: string[]
  coverRows: ProjectCoverRow[]
  coverLabelKey: string
  metaKey: string
  descriptionKey: string
}
