import Vue from 'vue'
import Vuex from 'vuex'
import music from './modules/music/music'
import weatherStore from './modules/weather/weather'
import timeStore from './modules/tiles/time/time'
import musicPlayer from './modules/music/player/player'
import todoStore from './modules/tiles/todo/todo'
import musicFolder from './modules/music/folders/folders'
import musicYoutube from './modules/music/youtube/youtube'


Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      namespaced: true,
      musicStore:{
        namespaced: true,
        modules: {
          music,
          player: musicPlayer,
          folders: musicFolder,
          youtube: musicYoutube
        }
      },

      weatherStore,
      timeStore,
      todoStore
    }
  })

  return Store
}
