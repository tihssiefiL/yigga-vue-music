import axios from '../../node_modules/axios/dist/axios.js'
const getSongUrl = 'https://api.imjad.cn/cloudmusic/?type=song&id='// eslint-disable-line no-unused-vars
const getSong64kUrl = 'https://api.imjad.cn/cloudmusic/?type=song&br=64000&id='// eslint-disable-line no-unused-vars
const getSong128kUrl = 'https://api.imjad.cn/cloudmusic/?type=songbr=128000&id='// eslint-disable-line no-unused-vars
const getSong198kUrl = 'https://api.imjad.cn/cloudmusic/?type=songbr=198000&id='// eslint-disable-line no-unused-vars
const getSong320kUrl = 'https://api.imjad.cn/cloudmusic/?type=songbr=320000&id='// eslint-disable-line no-unused-vars
const getLrcUrl = 'https://api.imjad.cn/cloudmusic/?type=lyric&id='// eslint-disable-line no-unused-vars
const getCommentsUrl = 'https://api.imjad.cn/cloudmusic/?type=comments&id='// eslint-disable-line no-unused-vars
const getDetailUrl = 'https://api.imjad.cn/cloudmusic/?type=detail&id='// eslint-disable-line no-unused-vars
const getArtistUrl = 'https://api.imjad.cn/cloudmusic/?type=artist&id='// eslint-disable-line no-unused-vars
const getAlbumUrl = 'https://api.imjad.cn/cloudmusic/?type=album&id='// eslint-disable-line no-unused-vars
const getPlaylistUrl = 'https://api.imjad.cn/cloudmusic/?type=playlist&id='// eslint-disable-line no-unused-vars
const getMvUrl = 'https://api.imjad.cn/cloudmusic/?type=mv&id='// eslint-disable-line no-unused-vars
const playMv = 'http://123.206.26.156:3000/mv/url?url='// eslint-disable-line no-unused-vars/mv/url?url=
const getLyric = 'http://123.206.26.156:3000/lyric?id='// eslint-disable-line no-unused-vars/mv/url?url=
const searchUrl = 'http://123.206.26.156:3000/search?keywords='// eslint-disable-line no-unused-vars
// var id = ''
// var keyWord = 'numb'// eslint-disable-line no-unused-vars
var songs = {}// eslint-disable-line no-unused-vars
var song = ''// eslint-disable-line no-unused-vars
function search (keyWord) {
  return axios.get(searchUrl + keyWord)
}
function getSong (songId) {
  return axios.get(getSongUrl + songId)
}
function getMv (mvId) {
  return axios.get(getMvUrl + mvId)
}
function mvPlay (url) {
  return playMv + url
}
function getLyrics (id) {
  return axios.get(getLyric + id)
}
export {
  search,
  getSong,
  getMv,
  mvPlay,
  getLyrics
}
