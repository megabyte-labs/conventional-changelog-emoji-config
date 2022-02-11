import { cosmiconfigSync } from 'cosmiconfig'
import type { CommitTypes } from './commit-types'

export interface CustomConfig {
  /**
   * 待显示的 scope
   */
  readonly displayScopes?: readonly string[]
  /**
   * 待显示的 type 组
   */
  readonly displayTypes?: readonly CommitTypes[]
  /**
   * Scope 在 Changelog 中的显示信息
   */
  readonly scopeDisplayName?: Record<string, string>
  /**
   * 是否显示作者
   */
  readonly showAuthor?: boolean
  /**
   * Title language
   */
  readonly titleLanguage?: 'en-US' | 'zh-CN'
  /**
   * Whether to include emoji in title
   */
  readonly withEmoji?: boolean
}

const explorer = cosmiconfigSync('changelog')

const { config } = explorer.search() || { config: {} }

export default config
