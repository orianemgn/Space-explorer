export const menuItems = [
    {
        title: 'Pictures of the day',
        path: '/pictures-of-the-day',
        cName: 'dropdown-link',
    },
    {
        title: 'Weather on Mars',
        path: '/weather-on-mars',
        cName: 'dropdown-link',
    }
]


export const MenuItemsTest = [
    {
        title: 'Home', 
        url: '/',
    },
    {
        title: 'News', 
        url: '/news',
    },
    {
        title: 'Planets', 
        url: '',
        submenu: [
            {
                title: 'Image of the Day',
                path: '/pictures-of-the-day',
                cName: 'dropdown-link',
            },
            {
                title: 'Planets Glossary',
                path: '/pictures-of-the-day',
                cName: 'dropdown-link',
            },
            {
                title: 'Focus on Mars',
                path: '/pictures-of-the-day',
                cName: 'dropdown-link',
            },
        ],
    },
    {
        title: 'Videos', 
        url: '/videos',
    },
]