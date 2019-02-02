import types from "./../../types"

const actions= {
  [types.music.loadMusicList]: ({commit}) => {
    let call = [types.domain] + "/getmusic";
    fetch(call, {mode: "cors", method: "Get"})
      .then(
        function (response) {
          return response.json()
        }).then(function (list) {
      commit(types.music.setMusicList, list);
    })

  },
[types.music.loadMusic]: ({commit,dispatch},payload) => {
    let album = []
payload.album.forEach((item) => {
  album.push(item.artist)
})

  let call = [types.domain] + "/getsong/"+payload.artist;
  fetch(call, {mode: "cors", method: "Get"})
    .then(
      function (response) {
        return response.json()
      }).then(function (song) {
    console.log("music/actions: LoadedMusic: ", song)
    commit(types.music.setSong, song);

  }).then(function () {
   dispatch(types.music.player.start)
  })
  }
}
export default actions
