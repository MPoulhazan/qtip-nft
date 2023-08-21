import React from 'react';
import Meta from '../site/Meta';

const footerLink = [
    {
        label: 'Configuration',
        link: '/started',
    },
    {
        label: 'Github',
        link: 'https://github.com/Charlie85270/tail-kit',
    },
    {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/crabiller/',
    },
];

export const menuEntry = [
    {
        label: 'Elements',
        desc: 'Buttons, Avatars, Badges, Alerts, Progress bar....',
        link: '/components#elements',
    },
    {
        label: 'Forms',
        desc: 'Input text, Select, Textarea, Login pages, Signin templates ...',
        link: '/components#forms',
    },
    {
        label: 'Commerce',
        desc: 'Pricing cards, Shopping cards, Basket layouts...',
        link: '/components#commerce',
    },
    {
        label: 'Navigation',
        desc: 'Headers, Footers, Sidebar ...',
        link: '/components#navigation',
    },
    {
        label: 'Sections',
        desc: 'Features, CTA, testimonial, Team sections ...',
        link: '/components#pagesection',
    },
    {
        label: 'List',
        desc: 'List, Tables, Todo list, Description List, Actions list...',
        link: '/components#list',
    },
];

export const menuTemplates = [
    {
        label: 'Dashboard',
        desc: 'Dashboard templates page, Admin templates....',
        link: '/templates#dashboard',
    },
    {
        label: 'Landing page',
        desc: 'Template like sport site, product home page, Ecommerce',
        link: '/templates#home',
    },
    {
        label: 'Errors page',
        desc: '404 templates page, Internal error templates....',
        link: '/templates#errors',
    },
];

interface Props {
    title: string;
    desc: string;
    children: React.ReactNode;
}

const AppLayout = ({ title, desc, children }: Props) => {
    return (
        <div className="flex flex-col min-h-full px-4 font-sans antialiased text-gray-600 h-screen-home">
            <Meta pageTitle={title} description={desc} />
            {/*       <AppHeader />
             */}{' '}
            <main className="flex-auto">{children}</main>
        </div>
    );
};

export default AppLayout;
