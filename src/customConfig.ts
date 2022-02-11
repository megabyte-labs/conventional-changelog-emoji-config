import { cosmiconfigSync } from 'cosmiconfig'
import type { CommitTypes } from './commit-types'

export interface CustomConfig {
  readonly displayScopes?: readonly string[]
  readonly displayTypes?: readonly CommitTypes[]
  readonly scopeDisplayName?: Record<string, string>
  readonly showAuthor?: boolean
  readonly withEmoji?: boolean
}

const explorer = cosmiconfigSync('changelog')

const { config } = explorer.search() || { config: {} }

export default config
