import { boot } from 'quasar/wrappers'

export default boot(async (/* { app, router, ... } */) => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('src/mocks/browser')
    void worker.start()
  }
})
