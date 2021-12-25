import { defineStore } from 'pinia'
import Module from 'src/models/Module'

export const useUiStore = defineStore('UiStore', {
  state: () => {
    return {
      appTitle: 'myActivo',
      userLoaded: false,
      leftDrawerOpen: false,
      miniState: false,
      modules: <Module[]>[
        new Module({
          title: 'Define',
          caption: 'Create data structures',
          icon: 'account_tree',
          to: '/define'
        }),
        new Module({
          title: 'Acquire',
          caption: 'Import from any source',
          icon: 'drive_file_move',
          to: '/acquire'
        }),
        new Module({
          title: 'Analyse',
          caption: 'Create models and algorithms',
          icon: 'data_object',
          to: '/analyse'
        }),
        new Module({
          title: 'Visualise',
          caption: 'Gain insights',
          icon: 'insights',
          to: '/visualise'
        }),
        new Module({
          title: 'Decide',
          caption: 'Compare and record decisions',
          icon: 'alt_route',
          to: '/decide'
        }),
        new Module({
          title: 'Store',
          caption: 'Store all your data',
          icon: 'storage',
          to: '/store'
        })
      ]
    }
  },
  actions: {
    setAppTitle(value: string | undefined) {
      this.appTitle = value ? value : 'myActivo'
    },
    setUserLoaded (value: boolean) {
      this.userLoaded = value
    },
    setLeftDrawer(value: boolean) {
      this.leftDrawerOpen = value
    },
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    toggleMiniState() {
      this.miniState = !this.miniState
    }
  }
})
