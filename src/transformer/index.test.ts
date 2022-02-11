import type { Commit } from 'conventional-commits-parser'
import transform from './index'

const generateCommit = (commit: Partial<Commit>) =>
  ({
    body: undefined,
    footer: undefined,
    header: '',
    mentions: [],
    merge: undefined,
    notes: [],
    references: [],
    revert: undefined,
    ...commit
  } as Commit)

const defaultContext = { commit: '', date: '', issue: '' }

describe('transform', () => {
  it('return commit if has feat', () => {
    const transformer = transform({})

    const commit = generateCommit({
      header: 'amazing new module',
      type: 'feat'
    })

    expect(transformer(commit, defaultContext)).toEqual({
      header: 'amazing new module',
      mentions: [],
      notes: [],
      references: [],
      type: '✨ Features'
    })
  })

  it('should truncated commit hash', () => {
    const transformer = transform({})
    const commit = generateCommit({
      hash: '12345678abc',
      header: '',
      type: 'feat'
    })

    expect(transformer(commit, defaultContext)).toEqual({
      hash: '1234567',
      header: '',
      mentions: [],
      notes: [],
      references: [],
      type: '✨ Features'
    })
  })

  describe('Custom Config', () => {
    it('should only display included types', () => {
      const transformer = transform({
        displayTypes: ['fix']
      })
      const featCommit = generateCommit({
        type: 'feat'
      })
      const fixCommit = generateCommit({
        type: 'fix'
      })

      expect(transformer(featCommit, defaultContext)).toBeUndefined()
      expect(transformer(fixCommit, defaultContext)).toEqual({
        header: '',
        mentions: [],
        notes: [],
        references: [],
        type: '🐛 Bug Fixes'
      })
    })

    it('should show scope display name', () => {
      const transformer = transform({
        scopeDisplayName: {
          foo: 'module-foo'
        }
      })
      const commit = generateCommit({
        scope: 'foo',
        type: 'feat'
      })

      expect(transformer(commit, defaultContext)).toEqual({
        header: '',
        mentions: [],
        notes: [],
        references: [],
        scope: 'module-foo',
        type: '✨ Features'
      })
    })
  })
})
