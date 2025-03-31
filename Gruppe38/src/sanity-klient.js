import { createClient } from '@sanity/client'
export const klient = createClient({
    projectId: '0b2nkpvd',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: true
  })
  