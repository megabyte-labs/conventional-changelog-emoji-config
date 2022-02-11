import type { DisplayNameOptions } from './typeDisplayName'
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

  it('should return Chinese with { language: "zh-CN" }', () => {
    const options: DisplayNameOptions = { language: 'zh-CN' }
    expect(getDisplayName('feat', options)).toEqual('✨ 新特性')
    expect(getDisplayName('fix', options)).toEqual('🐛 修复')
    expect(getDisplayName('perf', options)).toEqual('⚡ 性能优化')
    expect(getDisplayName('revert', options)).toEqual('⏪ 回滚')
    expect(getDisplayName('style', options)).toEqual('💄 样式')
    expect(getDisplayName('docs', options)).toEqual('📝 文档')
    expect(getDisplayName('refactor', options)).toEqual('♻ 重构')
    expect(getDisplayName('build', options)).toEqual('👷 构建系统')
    expect(getDisplayName('test', options)).toEqual('✅ 测试')
    expect(getDisplayName('ci', options)).toEqual('🔧 持续集成')
    expect(getDisplayName('chore', options)).toEqual('🎫 杂项')
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
