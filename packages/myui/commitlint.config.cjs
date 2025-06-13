module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Ensure the type is one of the allowed values
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
    ],

    'subject-case': [2, 'always', 'sentence-case'], // Première lettre en majuscule
    'scope-case': [2, 'always', 'upper-case'],
    'scope-empty': [0, 'never'],

    'subject-pattern': [2, 'always', /^\[[A-Z]+-\d+\] .+$/],

    // Ensure the header (first line) does not exceed 72 characters
    'header-max-length': [2, 'always', 72],
  },

  // Define the custom rule implementation
  plugins: [
    {
      rules: {
        'subject-pattern': ({ subject }) => {
          const pattern = /^\[[A-Z]+-\d+\] .+$/; // Regex for [TICKET_NUMBER] pattern
          if (!pattern.test(subject)) {
            return [
              false,
              'The subject must start with a ticket number in the format [ABC-123]. \n\n 💡 \x1b[1mExample\x1b[0m: git commit -m "feat(ui): [CGA-123] add user authentication"\n\n ',
            ];
          }
          return [true];
        },
      },
    },
  ],
};
