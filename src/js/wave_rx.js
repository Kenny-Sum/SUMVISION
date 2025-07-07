const images = [
    "../../images/headphone/PSYC_Wave/PSYC_Wave_Main_Image.jpg",
    "../../images/headphone/PSYC_Wave/PSYC_Wave_Image_2.jpg",
    "../../images/headphone/PSYC_Wave/PSYC_Wave_Image_3.jpg",
    "../../images/headphone/PSYC_Wave/PSYC_Wave_Image_4.jpg",
    "../../images/headphone/PSYC_Wave/PSYC_Wave_Image_5.jpg",
    "../../images/headphone/PSYC_Wave/PSYC_Wave_Image_6.jpg",
    "../../images/headphone/PSYC_Wave/PSYC_Wave_Image_7.jpg",
    "../../images/headphone/PSYC_Wave/PSYC_Wave_Image_8.jpg"
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
    document.getElementById('slider-image').src = '../../images/headphone/PSYC_Wave/PSYC_Wave_Main_Image.jpg';
    currentIndex = 0
}

function changeImage2()
{
    document.getElementById('slider-image').src = '../../images/headphone/PSYC_Wave/PSYC_Wave_Image_2.jpg';
    currentIndex = 1;
}

function changeImage3()
{
    document.getElementById('slider-image').src = '../../images/headphone/PSYC_Wave/PSYC_Wave_Image_3.jpg';
    currentIndex = 2
}

function changeImage4()
{
    document.getElementById('slider-image').src = '../../images/headphone/PSYC_Wave/PSYC_Wave_Image_4.jpg';
    currentIndex = 3
}

function changeImage5()
{
    document.getElementById('slider-image').src = '../../images/headphone/PSYC_Wave/PSYC_Wave_Image_5.jpg';
    currentIndex = 4
}

function changeImage6()
{
    document.getElementById('slider-image').src = '../../images/headphone/PSYC_Wave/PSYC_Wave_Image_6.jpg';
    currentIndex = 5
}

function changeImage7()
{
    document.getElementById('slider-image').src = '../../images/headphone/PSYC_Wave/PSYC_Wave_Image_7.jpg';
    currentIndex = 6
}

function changeImage8()
{
    document.getElementById('slider-image').src = '../../images/headphone/PSYC_Wave/PSYC_Wave_Image_8.jpg';
    currentIndex = 7
}