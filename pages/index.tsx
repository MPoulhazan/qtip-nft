import { FC } from 'react';
import AppLayout from '../components/layout/AppLayout';

export const IndexPage: FC = () => {
    return (
        <AppLayout
            title="Rick Astley CLub NFT collection"
            desc="All NFTs of never gonna give you up song"
        >
            <div className="pt-32 -mt-32 overflow-hidden text-white h-screen-home">
                <div className="max-w-5xl px-4 pt-16 pb-16 mx-auto lg:pt-9 xl:pt-20">
                    <p className="w-full text-3xl font-bold text-center mx-auto main-title sm:text-3xl md:text-8xl">
                        Rick Astley NFT CLub
                    </p>
                    <p className="w-full text-3xl font-bold text-center mx-auto  sm:text-1xl md:text-2xl">
                        The new collection
                    </p>
                    <div className="sm:mb-24 lg:flex">
                        <div className="relative z-10 w-full mx-auto mb-12 lg:pt-10 lg:mx-0 sm:mb-16 lg:mb-0">
                            <div>
                                <div className="grid grid-cols-3 gap-4 p-4 my-6 bg-gray-700">
                                    <img src="/images/1.png" />
                                    <img src="/images/2.png" />
                                    <img src="/images/3.png" />
                                    <img src="/images/4.png" />
                                    <img src="/images/5.png" />
                                    <img src="/images/6.png" />
                                    <img src="/images/7.png" />
                                    <img src="/images/8.png" />
                                    <img src="/images/9.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://opensea.io/collection/rick-astley-club"
                        className="mb-12"
                    >
                        <div className="mx-auto font-bold text-center mb-12 button-get box-outer">
                            <div className="main-box">
                                <div className="bar top"></div>
                                <div className="bar right delay"></div>
                                <div className="bar bottom delay"></div>
                                <div className="bar left"></div>Get yours
                            </div>
                        </div>
                    </a>
                    <div className="relative w-full mx-auto mt-24" id="faq">
                        <p className="mx-auto text-3xl font-bold text-center title w-60">
                            FAQ
                        </p>
                        <p className="mt-12 text-white sm:text-lg md:text-xlfont-bold">
                            What is The Rick Astley NFT?
                        </p>
                        <p className="text-gray-700 sm:text-md md:text-lgfont-bold">
                            It is the new collection about the famous song Never
                            Gonna Give You Up of Rick Astley
                        </p>
                        <p className="mt-12 text-white sm:text-lg md:text-xlfont-bold">
                            When has The Rick Astley NFT launched?
                        </p>
                        <p className="text-gray-700 sm:text-md md:text-lgfont-bold">
                            The launch was on February 2022!
                        </p>
                        <p className="mt-12 text-white sm:text-lg md:text-xlfont-bold">
                            How much does The Rick Astley NFT cost?
                        </p>
                        <p className="text-gray-700 sm:text-md md:text-lgfont-bold">
                            The price start at 0.01 ETH!
                        </p>
                        <p className="mt-12 text-white sm:text-lg md:text-xlfont-bold">
                            Is it possible to get NFT from previous collection?
                        </p>
                        <p className="text-gray-700 sm:text-md md:text-lgfont-bold">
                            No previous collection is fully sold and only
                            available for private members.
                        </p>
                    </div>{' '}
                </div>
            </div>
        </AppLayout>
    );
};

export default IndexPage;
