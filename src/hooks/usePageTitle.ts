import { useEffect } from 'react'

export const usePageTitle = (
  title: string | null,
  fallback: string = "RJ Leyva's Modern Docs"
): string => {
  const computedTitle =
    title != null ? `${title} | RJ Leyva's Modern Docs` : fallback

  useEffect(() => {
    document.title = computedTitle
  }, [computedTitle])

  return computedTitle
}
