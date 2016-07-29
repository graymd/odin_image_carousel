$('document').ready(function(){

  imageController.displayFirstImage();
  var nextClass = $('#nextImage').text();
  console.log(nextClass);

});

const image = {
  image1: "https://www.placecage.com/900/500",
  image2: "http://www.fillmurray.com/900/500",
  image3: "https://www.placecage.com/c/900/500",
  image4: "http://www.fillmurray.com/g/900/500",
  imageTagBuilder(image){
    return `<image src="${image}"></img>`;
  },
}
const images = [image.image1, image.image2, image.image3, image.image4];

const imageController = {
  displayFirstImage() {
    $('.image').append(image.imageTagBuilder(image.image1));
  },

  next() {

  },
  firstImage: images[0]
}

//-------------------------------------
/*
//next will give me either 1, 2, 3, 0


if (currentImage !== 3) {
  imageNumber + 1;
} else if (currentImage === 3) {
  imageNumber = 0;
}

*/
