const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const frames = {
  currentIndex: 1,
  maxIndex: 200,
};
let imageLoaded = 0;
const images = [];

function loadImages(index) {
  if (index >= 0 && index <= frames.maxIndex) {
    const img = images[index];
    // console.log(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;
    const scale = Math.max(scaleX, scaleY);

    const newWidth = img.width * scale;
    const newheight = img.height * scale;

    const offsetX = (canvas.width - newWidth) / 2;
    const offsetY = (canvas.height - newheight) / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(img, offsetX, offsetY, newWidth, newheight);
    frames.currentIndex = index;
  }
}

function preLoadImages() {
  for (var i = 0; i <= frames.maxIndex; i++) {
    const imageUrl = `imgs/frame_${i.toString().padStart(4, "0")}.jpeg`;
    // console.log(imageUrl);
    const img = new Image();
    img.src = imageUrl;
    // console.log(img);
    img.onload = () => {
      imageLoaded += 1;
      if (imageLoaded === frames.maxIndex) {
        console.log(`Total images loaded : ${imageLoaded}`);
        loadImages(frames.currentIndex);
        startAnimation();
      }
    };
    images.push(img);
  }
  // console.log(images)
}
preLoadImages();

function startAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".parent",
      start: "top top",
      scrub: 4,
    },
  });

  tl.to(frames, {
    currentIndex: frames.maxIndex,
    onUpdate: () => {
      loadImages(Math.floor(frames.currentIndex));
    },
  });
}
