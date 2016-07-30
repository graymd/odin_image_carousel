$('document').ready(function(){
  imageController.displayImage();
  $('.imageControlButton').click(function(){
    console.log($(this).attr("id"));
    imageController.moveImage($(this).attr("id"));
  });
  imageController.rotateImage();
  $('.dot').click(function(){
    console.log($(this).attr("id"));
    dotController.selectImageFrom($(this).attr("id"));
  });
  // dotController.hightlightCurrentImageDot();

});

const images = {
  image1: "https://www.placecage.com/900/500",
  image2: "http://www.fillmurray.com/900/500",
  image3: "https://www.placecage.com/c/900/500",
  image4: "http://www.fillmurray.com/g/900/500",
  imageTagBuilder(image){
    return `<image src="${image}"></img>`;
  },
}

const imageController = {
  displayImage() {
    $('.image').empty();
    $('.image').append(images.imageTagBuilder(images[this.imageBuilder()]));
    dotController.hightlightCurrentImageDot();
  },
  rotateImage() {
    setTimeout(function(){
      imageController.nextImage();
      imageController.displayImage();
      imageController.rotateImage();
    }, 5000);
  },
  moveImage(direction) {
    if (direction === "nextImage") {
      this.nextImage();
    } else {
      this.previousImage();
    }
    this.displayImage();
  },
  nextImage() {
    if (this.currentImage !== 4){
      this.currentImage += 1;
    } else if (this.currentImage === 4){
      this.currentImage = 1;
    }
  },
  previousImage() {
    if (this.currentImage !== 1){
      this.currentImage -= 1;
    } else if (this.currentImage === 1){
      this.currentImage = 4;
    }
  },
  currentImage: 1,
  imageBuilder() {
    return `image${this.currentImage}`
  },
  selectImage(number) {
    this.currentImage = number;
    this.displayImage();
  }
}

const dotController = {
  hightlightCurrentImageDot() {
    $(".dot").removeClass("active");
    console.log(this.activeDot());
    $(`#${this.activeDot()}`).addClass("active");
  },
  activeDot(){
    return `dot${imageController.currentImage}`
  },
  selectImageFrom(dotNumber){
    num = dotNumber.charAt(3);
    imageController.selectImage(parseInt(num));
  },


}
