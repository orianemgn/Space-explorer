export const menuItems = [
    {
        title: 'Space Explorer', 
        url: '/',
        className: 'logo'
    },
    {
        title: 'Home', 
        url: '/',
        className:'item'
    },
    {
        title: 'News', 
        url: '/news',
        className:'item'
    },
    {
        title: 'Planets', 
        url: '',
        className:'item has-submenu',
        submenu: [
            {
                title: 'Image of the Day',
                url:'planets-glossary',
            },
            {
                title: 'Planets Glossary',
                url:'planets-glossary',
            },
            {
                title: 'Focus on Mars',
                url:'focus-on-mars',
            },
        ],
    },
    {
        title: 'Videos', 
        url: '/videos',
        className:'item', 
    },
    {
        title: "GitHub", 
        url: "#", 
        className: 'item button',
    },
    {
        title: "About us", 
        url: "/about-us", 
        className: 'item button secondary',
    }
    

]