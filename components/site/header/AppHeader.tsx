import React from 'react';

const AppHeader = () => {
    return (
        <header className="relative z-50 flex-none w-full max-w-4xl pt-5 mx-auto text-sm font-medium leading-6 text-white">
            <nav aria-label="Global" className="mx-auto">
                <div className="flex flex-wrap w-full md:justify-between sm:justify-center">
                    <div className="w-full text-center xs:mx-auto md:mx-0">
                        <a
                            href="/components"
                            className="mr-10 text-lg font-bold text-white link"
                        >
                            About
                        </a>
                        <a
                            href="#faq"
                            className="flex-none text-lg font-bold text-white link"
                        >
                            FAQ
                        </a>
                    </div>

                    <div className="flex items-center justify-around w-full mt-4 sm:mt-0 sm:w-auto sm:ml-auto">
                        <a
                            href="https://opensea.io/collection/q-nftip"
                            className="w-12 mr-10"
                            title="See collection on OpenSea"
                        >
                            <img src="/images/open.png" />
                        </a>
                        <a
                            href="https://twitter.com/qnftip"
                            className="w-12"
                            title="See on Twitter"
                        >
                            <img src="/images/twitter.png" />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default AppHeader;
