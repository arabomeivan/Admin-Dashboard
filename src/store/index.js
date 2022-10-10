import { createStore } from 'vuex'

export default createStore({
  state: {

    sidebar:
    {
        visbility: true
    },

    navbar:
    {
      width: '82%'
    },

    mainpartition:
    {
      width: '82%',
      margin_left: '248px'
    }
  },
  getters: {
  },
  mutations: 
  {
    MAKE_FULL_WIDTH(state)
    {
        state.mainpartition.width= '100%'
        state.mainpartition.margin_left = '2px'

        state.navbar.width = '100%'
        state.sidebar.visbility = false

    },

    REMOVE_FULL_WIDTH(state)
    {
        state.mainpartition.width= '82%'
        state.mainpartition.margin_left = '248px'

        state.navbar.width = '82%'
        state.sidebar.visbility = true

    }
  },
  actions: {

    make_full_width({commit})
    {
      commit("MAKE_FULL_WIDTH")
    },

    remove_full_width({commit})
    {
      commit("REMOVE_FULL_WIDTH")
    }
  },
  modules: {
  }
})
