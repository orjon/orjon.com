'use server'

import { signIn } from '@/auth'

export async function login(formData: FormData) {
    await signIn('credentials', {
      username: formData.get('username'),
      password: formData.get('password'),
      redirectTo: '/admin',
    })
  }