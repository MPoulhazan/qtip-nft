import { FC } from 'react';
import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import VerticalMenu from '../components/menu/menu';
// import './index.css';

const style3d = {
    margin: '0.5em 0',
    color: '#ffffff',
    letterSpacing: '0.033em',
    textShadow:
        '-0.033em 0 1px rgba(255,0,0,0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67)',
};

export const IndexPage: FC = () => {
    return (
        <AppLayout
            title="The Chrysalid crew"
            desc="Discover the Chrysalid crew"
        >
            <div className="app">
                <video className="background-video" autoPlay muted loop>
                    <source src="/videos/bg.mp4" type="video/mp4" />
                    Your browser is unable to play this video.
                </video>
                <div className="overlay">
                    <svg width="100%" height="100vh">
                        <text className="title" x="10%" y="55%">
                            CHRYSALIDE
                        </text>
                    </svg>
                    <VerticalMenu />
                </div>
            </div>
        </AppLayout>
    );
};

export default IndexPage;
