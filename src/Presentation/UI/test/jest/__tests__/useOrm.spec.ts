import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest'
import { describe, expect, it } from '@jest/globals'
import { Model } from 'src/composables/useOrm'

installQuasarPlugin()

describe('useOrm', () => {
  it('new model should initialise with uuid and dates', () => {

  })
})
