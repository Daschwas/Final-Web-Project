import { Collapse } from 'flowbite';

document.addEventListener('DOMContentLoaded', function () {
    const $navbar = document.getElementById('navbar-target');
    const $navbarToggle = document.getElementById('navbar-trigger');

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

        const navbarCollapse = new Collapse($navbar, $navbarToggle, options, instanceOptions);
    } else {
        console.error('Navbar elements not found. Check your HTML structure and element IDs.');
    }
});