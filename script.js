let container = document.querySelector('.container');
let songsContainer = container.querySelector('.songs-container');
let songs = songsContainer.querySelectorAll('.song');
let addButton = container.querySelector('.form__submit-btn_action_add');
let resetButton = container.querySelector('.form__submit-btn_action_reset');
if (songs.length === 0) {
  resetButton.setAttribute('disabled', 'сделать неактивной кнопку');
  resetButton.classList.add('form__submit-btn_disabled');
} else {
  resetButton.classList.remove('form__submit-btn_disabled');
  resetButton.removeAttribute('disabled');
}