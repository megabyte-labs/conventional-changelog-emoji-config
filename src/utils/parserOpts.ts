import gitmojiParserOptions from '../parser-opts'

/**
 * `revertPattern` might need to be adjusted to match the format
 * of the revert commit
 */
export default {
  ...gitmojiParserOptions,
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  revertCorrespondence: ['header', 'hash'],
  revertPattern: /revert:\s([\S\s]*?)\s*This reverts commit (\w*)\./
}
