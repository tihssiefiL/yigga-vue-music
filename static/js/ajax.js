import axios from '../../node_modules/axios/dist/axios.js'
const api = 'https://api.ezcomezgo.com/music'
const getSongUrl = api + '/?type=song&id='// eslint-disable-line no-unused-vars
const getSong64kUrl = api + '/?type=song&br=64000&id='// eslint-disable-line no-unused-vars
const getSong128kUrl = api + '/?type=songbr=128000&id='// eslint-disable-line no-unused-vars
const getSong198kUrl = api + '/?type=songbr=198000&id='// eslint-disable-line no-unused-vars
const getSong320kUrl = api + '/?type=songbr=320000&id='// eslint-disable-line no-unused-vars
const getLrcUrl = api + '/?type=lyric&id='// eslint-disable-line no-unused-vars
const getCommentsUrl = api + '/?type=comments&id='// eslint-disable-line no-unused-vars
const getDetailUrl = api + '/?type=detail&id='// eslint-disable-line no-unused-vars
const getArtistUrl = api + '/?type=artist&id='// eslint-disable-line no-unused-vars
const getAlbumUrl = api + '/?type=album&id='// eslint-disable-line no-unused-vars
const getPlaylistUrl = api + '/?type=playlist&id='// eslint-disable-line no-unused-vars
const getMvUrl = api + '/mv/url/?&id='// eslint-disable-line no-unused-vars
const playMv = api + '/mv/url?url='// eslint-disable-line no-unused-vars/mv/url?url=
const getLyric = api + '/lyric?id='// eslint-disable-line no-unused-vars/mv/url?url=
const searchUrl = api + '/search?keywords='// eslint-disable-line no-unused-vars
// var id = ''
// var keyWord = 'numb'// eslint-disable-line no-unused-vars
var songs = {}// eslint-disable-line no-unused-vars
var song = ''// eslint-disable-line no-unused-vars
function search(keyWord) {
  return axios.get(searchUrl + keyWord)
}
function getSong(songId) {
  return axios.get(getSongUrl + songId)
}
function getMv(mvId) {
  return axios.get(getMvUrl + mvId)
}
function mvPlay(url) {
  return playMv + url
}
function getLyrics(id) {
  return axios.get(getLyric + id)
}
export {
  search,
  getSong,
  getMv,
  mvPlay,
  getLyrics
}
