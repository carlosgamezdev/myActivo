import { rest } from 'msw'
import User from 'src/models/User'
import Setting from 'src/models/Setting'

export default [
  rest.get('/api/modules', (req, res, ctx) => {
    return res(
      ctx.json([{
        id: '1',
        title: 'Define',
        caption: 'Create data structures',
        icon: 'account_tree',
        to: 'define'
      }, {
        id: '2',
        title: 'Acquire',
        caption: 'Import from any source',
        icon: 'drive_file_move',
        to: 'acquire'
      }, {
        id: '3',
        title: 'Analyse',
        caption: 'Create models and algorithms',
        icon: 'data_object',
        to: 'analyse'
      }, {
        id: '4',
        title: 'Visualise',
        caption: 'Gain insights',
        icon: 'insights',
        to: 'visualise'
      }, {
        id: '5',
        title: 'Decide',
        caption: 'Compare and record decisions',
        icon: 'alt_route',
        to: 'decide'
      }, {
        id: '6',
        title: 'Store',
        caption: 'Store all your data',
        icon: 'storage',
        to: 'store'
      }
    ]))
  }),
  rest.get('/api/user/:id', (req, res, ctx) => {

    const { id } = req.params

    if(id == 'undefined') { throw new Error('User ID is required.') }

    const user = new User()

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    user.id = id
    user.name = 'Carlos Gamez'
    user.email = 'carlos.gamez@myactivo.com'

    const screenMode = new Setting()
    screenMode.userId = user.id
    screenMode.name = 'screenMode'
    screenMode.type = 'string'
    screenMode.value = 'dark'

    const appTitle = new Setting({
      userId: user.id,
      name: 'appTitle',
      type: 'string',
      value: `myActivo - ${user.name}`
    })

    user.settings = [
      appTitle,
      screenMode
    ]

    return res(
      ctx.json(user)
    )
  })
]
