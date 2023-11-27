document.addEventListener('DOMContentLoaded', function () {
    // Get references to the navbar and navbar toggle elements
    const $navbarToggle = document.getElementById('navbar-trigger');
    const $navList = document.getElementById('navbar-target');

    // Check if the navbar and navList elements exist
    if ($navbarToggle && $navList) {
        $navbarToggle.addEventListener('click', function () {
            // Toggle the 'hidden' element of navbar target to show/hide the navigation list
            $navList.classList.toggle('hidden');
        });
    }

    // Log an error if either the navbar or navbar toggle elements are not found
    else {
        console.error('Navbar elements not found. Check your HTML structure and element IDs.');
    }
});