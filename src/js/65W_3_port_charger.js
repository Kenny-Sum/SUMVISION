
const images = [
    "../../images/charger/65W_3_Port_GaN_Charger/Black/65W_3_Port_GaN_Charger_Main_Image(Black).jpg",
    "../../images/charger/65W_3_Port_GaN_Charger/Black/65W_3_Port_GaN_Charger_Image_2(Black).jpg",
    "../../images/charger/65W_3_Port_GaN_Charger/Black/65W_3_Port_GaN_Charger_Image_3(Black).jpg",
    "../../images/charger/65W_3_Port_GaN_Charger/Black/65W_3_Port_GaN_Charger_Image_4(Black).jpg",
    "../../images/charger/65W_3_Port_GaN_Charger/Black/65W_3_Port_GaN_Charger_Image_5(Black).jpg",
    "../../images/charger/65W_3_Port_GaN_Charger/Black//65W_3_Port_GaN_Charger_Image_6(Black).jpg"
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
    document.getElementById('slider-image').src = '../../images/charger/65W_3_Port_GaN_Charger/Black/65W_3_Port_GaN_Charger_Main_Image(Black).jpg';
    currentIndex = 0
}

function changeImage2()
{
    document.getElementById('slider-image').src = '../../images/charger/65W_3_Port_GaN_Charger/Black/65W_3_Port_GaN_Charger_Image_2(Black).jpg';
    currentIndex = 1;
}

function changeImage3()
{
    document.getElementById('slider-image').src = '../../images/charger/65W_3_Port_GaN_Charger/Black/65W_3_Port_GaN_Charger_Image_3(Black).jpg';
    currentIndex = 2
}

function changeImage4()
{
    document.getElementById('slider-image').src = '../../images/charger/65W_3_Port_GaN_Charger/Black/65W_3_Port_GaN_Charger_Image_4(Black).jpg';
    currentIndex = 3
}

function changeImage5()
{
    document.getElementById('slider-image').src = '../../images/charger/65W_3_Port_GaN_Charger/Black/65W_3_Port_GaN_Charger_Image_5(Black).jpg';
    currentIndex = 4
}

function changeImage6()
{
    document.getElementById('slider-image').src = '../../images/charger/65W_3_Port_GaN_Charger/Black//65W_3_Port_GaN_Charger_Image_6(Black).jpg';
    currentIndex = 5
}
