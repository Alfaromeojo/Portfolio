// ==========================
// Random Background Image
// ==========================
const images = [
    'image/img-bg/image1.jpg',
    'image/img-bg/image2.jpg',
    'image/img-bg/image3.jpg',
    'image/img-bg/image4.jpg',
    'image/img-bg/image5.jpg'
];

// pick a random image
const randomImage = images[Math.floor(Math.random() * images.length)];


document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector('.hero');
    if(hero){
        const randomImage = images[Math.floor(Math.random() * images.length)];
        
        // Apply a dark overlay using linear-gradient
        hero.style.backgroundImage = `
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
            url('${randomImage}')
        `;
        hero.style.backgroundSize = 'cover';
        hero.style.backgroundPosition = 'center';
        hero.style.backgroundRepeat = 'no-repeat';
    }
});

});
