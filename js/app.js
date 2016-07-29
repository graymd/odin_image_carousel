$('document').ready(function(){


  $('.image').append(image.imageTagBuilder(image.image2));
  loopThruImages();

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

// const loopThruImages = function(){
//
//
//   for (let image of images){
//       setTimeout(() => {
//         console.log(image);
//       }, 1000);
//   }
//
// }


// /      setTimeout(() => {
//         console.log(this);
//         this.classList.toggle(second);
//       }, 500);
