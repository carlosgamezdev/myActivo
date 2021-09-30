import { rest } from 'msw'

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
  })
]
