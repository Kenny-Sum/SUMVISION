const images = [
    "../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_Main_Image.jpg",
    "../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_image2.jpg",
    "../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_image3.jpg",
    "../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_image4.jpg",
    "../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_image5.jpg",
    "../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_image6.jpg",
    "../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_image7.jpg",
    "../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_image8.jpg"
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
    document.getElementById('slider-image').src = '../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_Main_Image.jpg';
    currentIndex = 0
}

function changeImage2()
{
    document.getElementById('slider-image').src = '../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_image2.jpg';
    currentIndex = 1;
}

function changeImage3()
{
    document.getElementById('slider-image').src = '../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_image3.jpg';
    currentIndex = 2
}

function changeImage4()
{
    document.getElementById('slider-image').src = '../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_image4.jpg';
    currentIndex = 3
}

function changeImage5()
{
    document.getElementById('slider-image').src = '../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_image5.jpg';
    currentIndex = 4
}

function changeImage6()
{
    document.getElementById('slider-image').src = '../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_image6.jpg';
    currentIndex = 5
}

function changeImage7()
{
    document.getElementById('slider-image').src = '../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_image7.jpg';
    currentIndex = 6
}

function changeImage8()
{
    document.getElementById('slider-image').src = '../../images/mouseAndKeyboard/Raijin_Mouse/Raijin_Mouse_image8.jpg';
    currentIndex = 7
}