const dots = document.querySelectorAll(".dot");
const sizes = document.querySelectorAll(".sizes__item");
const buyButton = document.querySelector('#btn-shop');
const closeModal = document.querySelector('#closeModal');
const modal = document.querySelector(".modal");
const thumbnails = document.querySelectorAll('.thumbnail-image');
const setImages = document.querySelectorAll('.set__item__image');
const  hand = document.querySelector('#hand') ;


function changeFocus(){
   dots.forEach(dot => dot.classList.remove('isActive'))
   this.classList.add('isActive');
}

function changeSize(){
   sizes.forEach(size =>size.classList.remove('is-selected'))
   this.classList.add('is-selected');
}

function showModal(){
   modal.classList.add('isVisible');
}

function hiddenModal(){
   modal.classList.remove('isVisible');
}

function changeThumbnail(){
   thumbnails.forEach(thumbnail => thumbnail.classList.remove('isActiveThumbnail'))
   this.classList.toggle('isActiveThumbnail');
   
   
}

function changeImage(){
  let {outfit} = this.dataset;
   switch (outfit) {
      case "setOne":
         this.setAttribute('src',`./images/set-fresco-man-02.png`)
         break;
      case "setTwo":
         this.setAttribute('src',`./images/set-fresco-brown-woman-02.png`)
         break;
      case "setThree":
         this.setAttribute('src',`./images/set-fresco-white-woman-02.png`)
         break;
      default:
         break;
   }
   
}

function setImageDefault(){
   let {outfit} = this.dataset;
   switch (outfit) {
      case "setOne":
         this.setAttribute('src',`./images/set-fresco-man-01.png`)
         break;
      case "setTwo":
         this.setAttribute('src',`./images/set-fresco-brown-woman-01.png`)
         break;
      case "setThree":
         this.setAttribute('src',`./images/set-fresco-white-woman-01.png`)
         break;
      default:
         break;
   }
}



dots.forEach(dot => dot.addEventListener('click', changeFocus))
sizes.forEach(item=> item.addEventListener('click',changeSize))
buyButton.addEventListener('click',showModal)
closeModal.addEventListener('click',hiddenModal)
thumbnails.forEach(thumbnail => thumbnail.addEventListener('click',changeThumbnail))
setImages.forEach(image=>image.addEventListener('mouseover',changeImage))
setImages.forEach(image=>image.addEventListener('mouseout',setImageDefault))