// This is a placeholder for adding images dynamically.
// Replace with actual paths of images you want to display on the webpage.
const images = [
    'C:\Users\donxcary\Desktop\New folder\img\pkayno.png',
    'C:\Users\donxcary\Desktop\New folder\img\stly.jpg',
    // ... add paths to other images here
 ];
 
 const imageContainer = document.getElementById('images');
 
 images.forEach(imagePath => {
    const img = document.createElement('img');
    img.src = imagePath;
    imageContainer.appendChild(img);
 });
 