const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePuase);
$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log("Clik a boton de play");
}

function handlePuase() {
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
  console.log("Clik a boton de Puase");
}
function handleBackward() {
  $video.currentTime -= 10
  console.log("10 segundos atras", $video.currentTime);
}
function handleForward() {
  $video.currentTime += 10
  console.log("10 segundos adelante", $video.currentTime);
}

const $progress = document.querySelector("#range")
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
  $progress.max = $video.duration
  console.log('Ha cargado mi video', $video.duration)
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime
  console.log('Tiempo actual', $video.currentTime)
}


$progress.addEventListener('input', handleInput)

function handleInput() {
  $video.currentTime = $progress.value
  console.log($progress.value)
}