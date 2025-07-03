const images = [
    "../../images/mouseAndKeyboard/Plasma_Mouse/Plasma_Mouse_Image_Main.jpg",
    "../../images/mouseAndKeyboard/Plasma_Mouse/Plasma_Mouse_Image_2.jpg",
    "../../images/mouseAndKeyboard/Plasma_Mouse/Plasma_Mouse_Image_3.jpg",
    "../../images/mouseAndKeyboard/Plasma_Mouse/Plasma_Mouse_Image_4.jpg",
    "../../images/mouseAndKeyboard/Plasma_Mouse/Plasma_Mouse_Image_5.jpg",
    "../../images/mouseAndKeyboard/Plasma_Mouse/Plasma_Mouse_Image_6.jpg"
];

let currentIndex = 0;
const sliderImage = document.getElementById("slider-image");

function showImage(index) {
  sliderImage.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function changeImage1()
{
    document.getElementById('slider-image').src = '../../images/mouseAndKeyboard/Plasma_Mouse/Plasma_Mouse_Image_Main.jpg';
    currentIndex = 0
}

function changeImage2()
{
    document.getElementById('slider-image').src = '../../images/mouseAndKeyboard/Plasma_Mouse/Plasma_Mouse_Image_2.jpg';
    currentIndex = 1;
}

function changeImage3()
{
    document.getElementById('slider-image').src = '../../images/mouseAndKeyboard/Plasma_Mouse/Plasma_Mouse_Image_3.jpg';
    currentIndex = 2
}

function changeImage4()
{
    document.getElementById('slider-image').src = '../../images/mouseAndKeyboard/Plasma_Mouse/Plasma_Mouse_Image_4.jpg';
    currentIndex = 3
}

function changeImage5()
{
    document.getElementById('slider-image').src = '../../images/mouseAndKeyboard/Plasma_Mouse/Plasma_Mouse_Image_5.jpg';
    currentIndex = 4
}

function changeImage6()
{
    document.getElementById('slider-image').src = '../../images/mouseAndKeyboard/Plasma_Mouse/Plasma_Mouse_Image_6.jpg';
    currentIndex = 5
}