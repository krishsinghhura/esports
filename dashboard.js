// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const mainContainer = document.querySelector('.main-container');
    const preloader = document.getElementById('preloader');

    // Simulate loading time for the preloader
    setTimeout(function () {
        preloader.style.display = 'none'; // Hide preloader
        mainContainer.style.display = 'block'; // Show main container
        checkScrollVisibility(); // Check visibility for fade-in elements
    }, 2000); // 2 seconds for the preloader

    // Function to check scroll position and reveal elements
    function checkScrollVisibility() {
        const fadeInElements = document.querySelectorAll('.fade-in');
        const revealPoint = window.innerHeight - 100; // Change as needed

        // Toggle visibility based on scroll position
        function toggleVisibility() {
            fadeInElements.forEach((element) => {
                const elementRect = element.getBoundingClientRect();
                if (elementRect.top < revealPoint) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });
        }

        // Initial check on page load
        toggleVisibility();

        // Add scroll event listener
        window.addEventListener('scroll', toggleVisibility);
    }

    // Sample Chart.js setup for the tournament chart
    const ctx = document.getElementById('tournamentChart').getContext('2d');
    const tournamentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Tournaments Hosted',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(0, 255, 204, 0.2)',
                borderColor: 'rgba(0, 255, 204, 1)',
                borderWidth: 2,
                fill:true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
