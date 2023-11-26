/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'index.html',
        'contact.html',
        'resume.html',
        'projects.html',
        'mywork.html',
        'about.html',

    
],
    theme: {
        extend: {
            colors: {
                'oxford-blue': '#011638',
                'feldgrau': '#3F5E5A',
                'carolina-blue': '#86BBD8',
                'olivine': '#AABD8C',
                'mountbatten-pink': '#9A7AA0',
            },
        },
    },
    plugins: [],
}