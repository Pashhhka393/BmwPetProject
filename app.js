const setups = [
  { video: document.getElementById('header-video'), icon: document.getElementById('soundAudio'), btn: document.getElementById('button') },
  { video: document.getElementById('video-auto'), icon: document.getElementById('soundAudio'), btn: document.getElementById('button') },
];

setups.forEach(({video, icon, btn}) => {
  function changeIcon() {
    icon.src = video.muted ? 'images/sound2.png' : 'images/sound1.png';
  }
  changeIcon();
  btn.addEventListener('click', () => {
    video.muted = !video.muted;
    changeIcon();
  });
});