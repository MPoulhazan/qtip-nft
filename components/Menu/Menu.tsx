import React from 'react';

interface MenuItem {
    label: string;
    link: string;
}

const menuItems: MenuItem[] = [
    { label: 'Le crew', link: '/crew' },
    { label: 'Les événements', link: '/events' },
    { label: 'Photos', link: '/photos' },
    { label: 'Notre vision', link: '/vision' },
    { label: 'Contact', link: '/contact' },
];

const VerticalMenu: React.FC = () => {

    return (
        <div className="vertical-menu">
            {menuItems.map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    className="menu-item"
                >
                    {item.label}
                </a>
            ))}
        </div>
    );
};

export default VerticalMenu;
