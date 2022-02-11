import { getDisplayName } from './typeDisplayName'

describe('typeDisplayName', () => {
  it('should return English and emoji by default', () => {
    expect(getDisplayName('feat')).toEqual('✨ Features')
    expect(getDisplayName('fix')).toEqual('🐛 Bug Fixes')
    expect(getDisplayName('perf')).toEqual('⚡ Performance Improvements')
    expect(getDisplayName('revert')).toEqual('⏪ Reverts')
    expect(getDisplayName('style')).toEqual('💄 Styles')
    expect(getDisplayName('docs')).toEqual('📝 Documentation')
    expect(getDisplayName('refactor')).toEqual('♻ Code Refactoring')
    expect(getDisplayName('build')).toEqual('👷 Build System')
    expect(getDisplayName('test')).toEqual('✅ Tests')
    expect(getDisplayName('ci')).toEqual('🔧 Continuous Integration')
    expect(getDisplayName('chore')).toEqual('🎫 Chores')
  })

  it('should return without emoji with { withEmoji: false }', () => {
    const options = { withEmoji: false }
    expect(getDisplayName('feat', options)).toEqual('Features')
    expect(getDisplayName('fix', options)).toEqual('Bug Fixes')
    expect(getDisplayName('perf', options)).toEqual('Performance Improvements')
    expect(getDisplayName('revert', options)).toEqual('Reverts')
    expect(getDisplayName('style', options)).toEqual('Styles')
    expect(getDisplayName('docs', options)).toEqual('Documentation')
    expect(getDisplayName('refactor', options)).toEqual('Code Refactoring')
    expect(getDisplayName('build', options)).toEqual('Build System')
    expect(getDisplayName('test', options)).toEqual('Tests')
    expect(getDisplayName('ci', options)).toEqual('Continuous Integration')
    expect(getDisplayName('chore', options)).toEqual('Chores')
  })

  it('should should return input when is not valid type', () => {
    expect(getDisplayName('wip')).toEqual('wip')
    expect(getDisplayName('aaa')).toEqual('aaa')
  })
})
