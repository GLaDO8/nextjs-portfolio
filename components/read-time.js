export default function readTime(content) {
  const WPS = 275 / 60;

  var images = 0;
  const regex = /\w/;
  var readcontent = content + "";
  let words = readcontent.split(" ").filter((word) => {
    if (word.includes("<img")) {
      images += 1;
    }
    return regex.test(word);
  }).length;

  var imageAdjust = images * 4;
  var imageSecs = 0;
  var imageFactor = 12;

  while (images) {
    imageSecs += imageFactor;
    if (imageFactor > 3) {
      imageFactor -= 1;
    }
    images -= 1;
  }

  const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);

  return minutes;
}
