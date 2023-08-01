const play_button = document.querySelector('.outro__play-button')
const cover = document.querySelector('.outro__cover')
const video_holder = document.querySelector('.outro__video-holder')
let player

play_button.addEventListener('click', create)

function create() {
  video_holder.classList.add(video_holder.dataset.effectWait)
  const tag = document.createElement('script')
  tag.src = "https://www.youtube.com/iframe_api"
  const firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: '8WRs6b2_J8Y',
    playerVars: { 'autoplay': 1, 'controls': 0 },
    events: {
      'onReady': onPlayerReady,
    }
  })
}

function onPlayerReady(event) {
  event.target.playVideo()
  video_holder.classList.add(video_holder.dataset.effectLoaded)
  cover.addEventListener('transitionend', () => {
    setTimeout(() => { })
    cover.style.display = 'none'
    play_button.style.display = 'none'
  })
}
