import { CommitProfile } from 'git-cz-emoji'

export type CommitTypes =
  | 'build'
  | 'ci'
  | 'docs'
  | 'feat'
  | 'fix'
  | 'perf'
  | 'refactor'
  | 'revert'
  | 'style'
  | 'test'
  | 'wip'
  | 'chore'

const types: readonly CommitTypes[] = Object.keys(CommitProfile.types) as CommitTypes[]

export default types
