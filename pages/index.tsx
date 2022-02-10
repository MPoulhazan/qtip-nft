import { FC } from 'react';
import AppLayout from '../components/layout/AppLayout';

export const IndexPage: FC = () => {
    return (
        <AppLayout
            title="Q-NFTip family collection"
            desc="All Q-NFTip family members"
        >
            <div className="pt-32 -mt-32 overflow-hidden text-white h-screen-home">
                <div className="max-w-5xl px-4 pt-16 pb-16 mx-auto lg:pt-9 xl:pt-20">
                    <p className="w-full text-5xl font-bold text-center mx-auto main-title sm:text-5xl md:text-8xl">
                        The Q-NFTip Family
                    </p>
                    <p className="w-full text-3xl font-bold text-center mx-auto  sm:text-1xl md:text-2xl">
                        The full Q-Tip Family's collection
                    </p>
                    <div className="sm:mb-24 lg:flex">
                        <div className="relative z-10 w-full mx-auto mb-12 lg:pt-10 lg:mx-0 sm:mb-16 lg:mb-0">
                            <div>
                                <div className="grid grid-cols-3 gap-4 p-4 my-6 bg-gray-700 grid-pict">
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
                                <div className="bg-gray-700 carousel mt-24">
                                    <img
                                        className="carousel-img"
                                        src="/images/qnftip.gif"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://opensea.io/collection/qnftip"
                        className="mb-12"
                    >
                        <div className="mx-auto font-bold text-center mb-12 button-get box-outer">
                            <div className="main-box">
                                <div className="bar top"></div>
                                <div className="bar right delay"></div>
                                <div className="bar bottom delay"></div>
                                <div className="bar left"></div>Adopt yours
                            </div>
                        </div>
                    </a>
                    <div className="relative w-full mx-auto mt-24" id="faq">
                        <p className="mx-auto text-3xl font-bold text-center title w-60">
                            FAQ
                        </p>
                        <p className="mt-12 text-white sm:text-lg md:text-xlfont-bold">
                            What is the Q-NFTip?
                        </p>
                        <p className="text-gray-700 sm:text-md md:text-lgfont-bold">
                            It is the big family of sweet 10 000 Q-Tips
                        </p>
                        <p className="mt-12 text-white sm:text-lg md:text-xlfont-bold">
                            When were born Q-NFTip family's members?
                        </p>
                        <p className="text-gray-700 sm:text-md md:text-lgfont-bold">
                            The launch was on February 2022!
                        </p>
                        <p className="mt-12 text-white sm:text-lg md:text-xlfont-bold">
                            How much does the Q-NFTip NFT cost?
                        </p>
                        <p className="text-gray-700 sm:text-md md:text-lgfont-bold">
                            The price start at 0.001 ETH and more for rare NFT!
                        </p>
                        <p className="mt-12 text-white sm:text-lg md:text-xlfont-bold">
                            Is there twins in the family?
                        </p>
                        <p className="text-gray-700 sm:text-md md:text-lgfont-bold">
                            No, each member is unique!
                        </p>
                    </div>{' '}
                </div>
            </div>
        </AppLayout>
    );
};

export default IndexPage;
