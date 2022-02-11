import betterThanBefore from 'better-than-before'
import conventionalChangelogCore from 'conventional-changelog-core'
import gitDummyCommit from 'git-dummy-commit'
import shell from 'shelljs'
import through from 'through2'
import gitmojiChangelogConfig from './main'

export const conventionalChangelog = (done: any, testFunction: (changelog: string) => void) => {
  conventionalChangelogCore({
    config: gitmojiChangelogConfig as any
  })
    .on('error', (error: any) => {
      done(error)
    })
    .pipe(
      through((chunk: any) => {
        const log = chunk.toString()
        testFunction(log)
        done()
      })
    )
}

const { setups, preparing: _preparing } = betterThanBefore()

setups([
  () => {
    const dumbShell: any = shell
    dumbShell.config.resetForTesting()
    shell.cd(__dirname)
    shell.rm('-rf', 'tmp')
    shell.mkdir('tmp')
    shell.cd('tmp')
    shell.mkdir('git-templates')
    shell.exec('git init --template=./git-templates')
    shell.exec('git commit --allow-empty -n -m "Initial commit"')

    gitDummyCommit([':construction_worker: build: first build setup', 'BREAKING CHANGE: New build system.'])
    gitDummyCommit([':green_heart: ci(travis): add TravisCI pipeline', 'BREAKING CHANGE: Continuously integrated.'])
    gitDummyCommit([':sparkles: feat: amazing new module', 'BREAKING CHANGE: Not backward compatible.'])
    gitDummyCommit([':bug: fix(compile): avoid a bug', 'BREAKING CHANGE: The Change is huge.'])
    gitDummyCommit(':zap: perf(ngOptions): make it faster')
    gitDummyCommit(':rewind: revert(ngOptions): bad commit')
    gitDummyCommit([':bug: fix(*): oops', ' closes #1, #2'])
  },
  () => {
    shell.exec('git tag v1.0.0')
    gitDummyCommit('feat: some more features')
  },
  () => {
    gitDummyCommit(['feat(*): implementing #5 by @dlmr', ' closes #10'])
  },
  () => {
    gitDummyCommit(['fix: use npm@5 (@username)'])
    gitDummyCommit(['build(deps): bump @dummy/package from 7.1.2 to 8.0.0', 'BREAKING CHANGE: The Change is huge.'])
  },
  () => {
    gitDummyCommit(['Revert \\":rewind: feat: default revert format\\"', 'This reverts commit 1234.'])
    gitDummyCommit([':rewind: revert: :sparkles: feat: custom revert format', 'This reverts commit 5678.'])
  }
])

export const clean = () => {
  shell.cd(__dirname)
  shell.rm('-rf', 'tmp')
}

export const preparing = _preparing

export const repoURL = 'https://github.com/arvinxx/gitmoji-commit-workflow'
