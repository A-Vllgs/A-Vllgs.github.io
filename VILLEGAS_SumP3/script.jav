document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".projects-gallery img");
    let currentImageIndex = 0;

    function updateGallery() {
        images.forEach((img, index) => {
            img.style.display = index === currentImageIndex ? "block" : "none";
        });
    }

    // Ensure first image is visible on page load
    updateGallery();

    document.getElementById("certificationBtn").addEventListener("click", function () {
        currentImageIndex = 0; // Reset to first image
        updateGallery();
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % images.length; // Move to the next image and loop
        updateGallery();
    });
});
