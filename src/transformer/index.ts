import types from '../commit-types'
import type { Context } from 'conventional-changelog-writer'
import type { Commit } from 'conventional-commits-parser'
import type { CommitTypes } from '../commit-types'
import type { CustomConfig } from '../customConfig'
import { scopeMapDisplayName } from './scopeMapDisplayName'
import { getDisplayName } from './typeDisplayName'

export default (customConfig: CustomConfig) => (commit: Commit, context: Context) => {
  let discard = true
  const issues: any = []

  for (const note of commit.notes) {
    note.title = `${customConfig?.withEmoji === false ? '' : '💥 '}BREAKING CHANGES`

    discard = false
  }

  let displayTypes: any = types

  if (customConfig.displayTypes) {
    displayTypes = customConfig.displayTypes
  }

  if (!displayTypes.includes(<CommitTypes>commit.type) && discard) return

  commit.type = getDisplayName(<any>commit.type, {
    withEmoji: customConfig.withEmoji
  })

  if (commit.scope === '*') {
    commit.scope = ''
  }

  if (customConfig.displayScopes && !customConfig.displayScopes?.includes(<any>commit.scope)) return

  if (customConfig.scopeDisplayName) {
    commit.scope = scopeMapDisplayName(<any>commit.scope, customConfig.scopeDisplayName)
  }

  if (typeof commit.hash === 'string') {
    commit.hash = commit.hash.slice(0, 7)
  }

  if (typeof commit.subject === 'string') {
    let url = context.repository ? `${context.host}/${context.owner}/${context.repository}` : context.repoUrl
    if (url) {
      url = `${url}/issues/`
      // Issue URLs.
      commit.subject = commit.subject.replace(/#(\d+)/g, (_, issue) => {
        issues.push(issue)

        return `[#${issue}](${url}${issue})`
      })
    }
    if (context.host) {
      // User URLs.
      commit.subject = commit.subject.replace(/\B@([\da-z](?:-?[\d/a-z]){0,38})/g, (_, username) => {
        if (username.includes('/')) {
          return `@${username}`
        }

        return `[@${username}](${context.host}/${username})`
      })
    }
  }

  // Remove references that already appear in the subject
  commit.references = commit.references.filter((reference) => {
    return !issues.includes(reference.issue)
  })

  return commit
}
