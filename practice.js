function change(){
    const aboutmetext=[" a Tech Enthusiast"," a web developer"];
    const typingspeed=100;
    const erase=50;
    const pause=1154;
    const aboutMeElement=document.querySelector('.about-me');
    
    let textIndex=0;
    let charIndex=0;
    let isDelete=false;

    function type(){
        const currenttext=aboutmetext[textIndex];
        if(!isDelete && charIndex  <  currenttext.length ){

            aboutMeElement.textContent+=currenttext[charIndex];
            charIndex++;
            setTimeout(type,typingspeed);
        }
        else if(isDelete && charIndex>0){
            aboutMeElement.textContent=currenttext.substring(0,charIndex-1);
            charIndex--;
            setTimeout(type,erase);
        }
        else{
            isDelete=!isDelete;
            if(!isDelete){
                textIndex=(textIndex+1)%aboutmetext.length;
            }
            setTimeout(type,pause);

        }
    }
    type();

}
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
        darkModeToggle.querySelector('i').classList.toggle('fa-sun'); // Change icon
        darkModeToggle.querySelector('i').classList.toggle('fa-moon'); // Change icon
        darkModeToggle.querySelector('i').classList.toggle('light-mode'); // Change icon color
    });
});
change();
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progress = progressBar.dataset.progress;
                
                progressBar.style.setProperty('--progress', `${progress}%`); // Set custom property for progress
                progressBar.classList.add('animated'); // Add a class to trigger animation
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    });

    const programmingLanguages = document.querySelectorAll('#programming-languages .skill');
    programmingLanguages.forEach(skill => {
        observer.observe(skill);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});



document.querySelectorAll('.btn-know-more').forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">×</span>
                <h2>Project Title</h2>
                <p>Project description...</p>
                <!-- Add more content here -->
            </div>
        `;
        modal.className = 'modal';
        document.body.appendChild(modal);
        
        // Show the modal
        modal.style.display = 'block';
        
        // Close the modal
        modal.querySelector('.close-button').addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });
});

let slideIndex = 1;
showSlide(slideIndex);

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let i;
    const slides = document.querySelectorAll(".carousel-slide img");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}



document.querySelectorAll('.btn.know-more').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal-target');
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.style.display = "block";
            disableScroll();
        }
    });
});

// Function to prevent scrolling
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Function to enable scrolling
function enableScroll() {
    document.body.style.overflow = '';
}

// Function to initialize the carousel
function initializeCarousel(carouselContainer) {
    let slideIndex = 1;
    const slides = carouselContainer.querySelectorAll(".carousel-slide img");

    // Function to show the correct slide
    function showSlides(n) {
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        slides.forEach(slide => slide.style.display = "none");
        slides[slideIndex - 1].style.display = "block";
    }

    // Initial display
    showSlides(slideIndex);

    // Next/previous controls
    carouselContainer.querySelector('.prev').addEventListener('click', () => showSlides(--slideIndex));
    carouselContainer.querySelector('.next').addEventListener('click', () => showSlides(++slideIndex));
}

// Enhanced modal logic to handle opening and initializing the carousel
document.querySelectorAll('.btn.know-more').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal-target');
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.style.display = "block";
            disableScroll();
            const carouselContainer = modal.querySelector('.carousel-container');
            if (carouselContainer) {
                initializeCarousel(carouselContainer);
            }
        }
    });
});

// Close modal functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal') || e.target.classList.contains('close')) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = "none";
        });
        enableScroll();
    }
});

