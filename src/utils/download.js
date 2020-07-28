function findVideo() {
  const video = document.querySelector("video")
  if (video.firstChild) {
    return video.firstChild.src
  } else {
    return video.src
  }
}

function download(src) {
  const a = document.createElement("a")
  a.download
  a.href = src
  a.click()
}

function downloadVideo() {
  return download(findVideo())
}
