import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest'
import { describe, expect, it } from '@jest/globals'
import { uuid } from 'src/composables/useUid'

installQuasarPlugin()

describe('useUid', () => {
  it('should generate uuid', () => {
    const newUid = uuid()
    expect(newUid).toBe('')
  })
})
