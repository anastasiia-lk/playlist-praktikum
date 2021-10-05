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
function addSong (songsContainer){
  songsContainer.innerHTML+=`<div class="song">
    <h4 class="song__artist">Кино</h4>
    <p class="song__title">Дерево</p>
    <button class="song__like"></button>
</div>`;
};
addSong(songsContainer);
addSong(songsContainer);
addSong(songsContainer);