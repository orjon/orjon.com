'use client'

import { useEffect } from 'react'

import { redirect } from 'next/navigation';

import { getLocalStorageValue } from '@/app/utils'
import { designProjects, DESIGN_PROJECT_KEY } from '@/data/design'

const defaultProject = designProjects[0].slug

const DesignPage = () => {

  const projectIndex = Object.fromEntries(designProjects.map((project, index) => [project.slug, index]))

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = getLocalStorageValue(DESIGN_PROJECT_KEY)
      const redirectTo = stored && projectIndex[stored] ? stored : defaultProject
      redirect(`/design/${redirectTo}`);
    }
  }, [])

  return null
}
export default DesignPage