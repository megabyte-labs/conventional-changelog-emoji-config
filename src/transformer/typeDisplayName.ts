import type { CommitTypes } from '../commit-types'

export interface DisplayNameOptions {
  readonly language?: 'en-US' | 'zh-CN'
  readonly withEmoji?: boolean
}

interface TypeNameMap {
  readonly emoji: string
  readonly 'en-US': string
  readonly 'zh-CN': string
}

const typeMap: Record<Exclude<CommitTypes, 'wip'>, TypeNameMap> | any = {
  build: {
    emoji: '👷',
    'en-US': 'Build System',
    'zh-CN': '构建系统'
  },
  chore: {
    emoji: '🎫',
    'en-US': 'Chores',
    'zh-CN': '杂项'
  },
  ci: {
    emoji: '🔧',
    'en-US': 'Continuous Integration',
    'zh-CN': '持续集成'
  },
  docs: {
    emoji: '📝',
    'en-US': 'Documentation',
    'zh-CN': '文档'
  },
  feat: {
    emoji: '✨',
    'en-US': 'Features',
    'zh-CN': '新特性'
  },
  fix: {
    emoji: '🐛',
    'en-US': 'Bug Fixes',
    'zh-CN': '修复'
  },
  perf: {
    emoji: '⚡',
    'en-US': 'Performance Improvements',
    'zh-CN': '性能优化'
  },
  refactor: {
    emoji: '♻',
    'en-US': 'Code Refactoring',
    'zh-CN': '重构'
  },
  revert: {
    emoji: '⏪',
    'en-US': 'Reverts',
    'zh-CN': '回滚'
  },
  style: {
    emoji: '💄',
    'en-US': 'Styles',
    'zh-CN': '样式'
  },
  test: {
    emoji: '✅',
    'en-US': 'Tests',
    'zh-CN': '测试'
  }
}

export const getDisplayName = (type: CommitTypes | string, options: DisplayNameOptions = {}): string => {
  const { withEmoji = true, language = 'en-US' } = options

  if (type in typeMap) {
    const item = typeMap[type]
    const { emoji } = item

    return `${withEmoji ? `${emoji} ` : ''}${item[language]}`
  }

  return type
}
