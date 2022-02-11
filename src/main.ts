import conventionalChangelog from './utils/conventional-changelog'
import recommendedBumpOptions from './utils/conventional-recommended-bump'
import gitRawCommitsOptions from './utils/git-raw-commit' // 格式化 git log 信息
import parserOptions from './utils/parserOpts' // 解析流
import writerOptions from './utils/writerOpts' // 输出流

export default {
  conventionalChangelog,
  gitRawCommitsOpts: gitRawCommitsOptions,
  parserOpts: parserOptions,
  recommendedBumpOpts: recommendedBumpOptions,
  writerOpts: writerOptions
} as any
