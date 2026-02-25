'use client'

import { useEffect } from 'react'

import { redirect } from 'next/navigation';

import { getLocalStorageValue } from '@/app/utils/client'
import { designProjects } from '@/app/data/design'
import { ProjectType } from '../types/projects';

const defaultProject = designProjects[0].slug

const DesignPage = () => {

  const projectIndex = Object.fromEntries(designProjects.map((project, index) => [project.slug, index]))

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = getLocalStorageValue(ProjectType.DESIGN)
      const redirectTo = stored && projectIndex[stored] ? stored : defaultProject
      redirect(`/design/${redirectTo}`);
    }
  }, [])

  return null
}
export default DesignPage