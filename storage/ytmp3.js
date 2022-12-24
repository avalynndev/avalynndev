function converter(youtubelink, buttonApi) {
  buttonApi.src =
    "https://yt2mp3.co/api/widget?url=https://www.youtube.com/watch?v=" +
    encodeURIComponent(youtubelink);
}
