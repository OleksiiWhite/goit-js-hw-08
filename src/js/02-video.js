import VimeoPlayer, { Player } from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
const LOCALE_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(LOCALE_STORAGE_KEY, seconds);
}

const initPage = () => {
  let saveData = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (saveData) {
    player.setCurrentTime(saveData);
  }
};

initPage();
