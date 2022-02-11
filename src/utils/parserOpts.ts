import gitmojiParserOptions from '../parser-opts'

export default {
  ...gitmojiParserOptions,
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  revertCorrespondence: ['header', 'hash'],
  revertPattern: /revert:\s([\S\s]*?)\s*This reverts commit (\w*)\./
}
