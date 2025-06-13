const config = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        analyzeCommits: {
          releaseRules: [
            { type: 'feat', release: 'minor' },
            { type: 'fix', release: 'patch' },
            { type: 'perf', release: 'patch' },
            { type: 'revert', release: 'patch' },
            { type: 'chore', release: 'patch' },
            { type: 'docs', release: 'patch' },
            { type: 'refactor', release: 'patch' },
            { type: 'style', release: 'patch' },
            { type: 'ci', release: 'patch' },
            { type: 'ticket', release: 'minor' },
          ],
          parserOpts: {
            noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
          },
        },
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'dist/*.js', 'dist/*.js.map'],
        message:
          'chore(release): ${nextRelease.version} [skip.ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/gitlab',
  ],
};

module.exports = config;
