let container = document.querySelector('.container');
let songsContainer = container.querySelector('.songs-container');
let addButton = container.querySelector('.form__submit-btn_action_add');
let resetButton = container.querySelector('.form__submit-btn_action_reset');
function renderAdded () {
  let songs = songsContainer.querySelectorAll('.song');
  let noSongsElement = container.querySelector('.no-songs');
  if (songs.length === 0) {
  resetButton.setAttribute('disabled', 'сделать неактивной кнопку');
  resetButton.classList.add('form__submit-btn_disabled');
    noSongsElement.classList.remove('no-songs_hidden');
} else {
  resetButton.classList.remove('form__submit-btn_disabled');
  resetButton.removeAttribute('disabled');
  noSongsElement.classList.add('no-songs_hidden');
}
}
function addSong (songsContainer){
  songsContainer.innerHTML+=`<div class="song">
    <h4 class="song__artist">Кино</h4>
    <p class="song__title">Дерево</p>
    <button class="song__like"></button>
</div>`;
  renderAdded ();
};
addButton.addEventListener('click', addSong);
renderAdded ();

