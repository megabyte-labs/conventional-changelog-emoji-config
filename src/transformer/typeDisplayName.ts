import type { CommitTypes } from '../commit-types'
import { CommitProfile } from 'git-cz-emoji'

export interface DisplayNameOptions {
  readonly withEmoji?: boolean
}

const typeMap = CommitProfile.types

export const getDisplayName = (type: CommitTypes | string, options: DisplayNameOptions = {}): string => {
  const { withEmoji = true } = options

  if (type in typeMap) {
    const item = typeMap[type]
    const { emoji } = item

    return `${withEmoji ? `${emoji} ` : ''}${item.title}`
  }

  return type
}
