import finsweetConfigs from '@finsweet/eslint-config';

export default [
  ...finsweetConfigs,
  {
    rules: {
      'no-console': 'off', // Désactive complètement la règle no-console
    },
  },
];
