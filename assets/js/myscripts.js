// Import the Collapse module from the 'flowbite' package

import { Collapse } from '../../node_modules/flowbite';

document.addEventListener('DOMContentLoaded', function () {
    // Get references to the navbar and navbar toggle elements
    const $navbar = document.getElementById('navbar-target');
    const $navbarToggle = document.getElementById('navbar-trigger');

    // Check if both the navbar and navbar toggle elements exist
    if ($navbar && $navbarToggle) {
        const options = {
            onCollapse: () => {
                console.log('Navbar has been collapsed');
            },
            onExpand: () => {
                console.log('Navbar has been expanded');
            },
            onToggle: () => {
                console.log('Navbar has been toggled');
            },
        };

        const instanceOptions = {
            id: 'navbar-target',
            override: true,
        };

        // Create a new instance of Collapse with the specified options
        const navbarCollapse = new Collapse($navbar, $navbarToggle, options, instanceOptions);
    }

    // Log an error if either the navbar or navbar toggle elements are not found
    else {
        console.error('Navbar elements not found. Check your HTML structure and element IDs.');
    }
});