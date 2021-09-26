/** @type {import('vls').VeturConfig} */

module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true
  },
  projects: [
    {
      root: './src/Presentation/WebUI',
      package: './package.json',
      tsconfig: './tsconfig.json',
      globalComponents: [
        './src/components/**/*.vue'
      ]
    }
  ]
}
