module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation only changes
        'style', // Changes that don't affect code meaning (white-space, formatting, etc)
        'refactor', // Code change that neither fixes a bug nor adds a feature
        'perf', // Performance improvements
        'test', // Adding or updating tests
        'chore', // Changes to build process or auxiliary tools
        'ci', // Changes to CI configuration files and scripts
        'build', // Changes that affect the build system or dependencies
        'revert', // Reverts a previous commit
      ],
    ],
    'subject-case': [0], // Allow any case for subject
    'subject-max-length': [2, 'always', 100],
  },
}
