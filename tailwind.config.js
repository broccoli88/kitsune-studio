/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                'bg': '#0c0a0b',
                'bg-lighter': '#161314',
                'primary': '#b61212',
                'secondary': '#25585b',
                'accent': '#edf6fb',
                'txt': '#d6d7d7',
                'heading': '#ffffff',
            },
            fontFamily: {
                'bakemono': ['Bakemono', 'sans-serif'],
                'walkway': ['Walkway', 'sans-serif']
            },
            fontSize: {
                'fsm-txt': '14px',
                'fsm-h1': '60px',
                'fsm-h2': '30px',
                'fsm-h3': '22px',
                'fsm-btn': '16px',

                'fsd-txt': '16px',
                'fsd-h1': '80px',
                'fsd-h2': '40px',
                'fsd-h3': '28px',
                'fsd-btn': '18px',
            },
            borderWidth: {
                "1": "1px",
                '3': "3px"
            }

        },
    },
    plugins: [],
}

