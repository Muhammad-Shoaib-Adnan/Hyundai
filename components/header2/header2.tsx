"use client";

export default function Header3() {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#002C5F] text-white">
            <div className="mx-auto flex min-h-16 w-full max-w-[1400px] flex-wrap cursor-pointer items-center justify-center gap-x-8 gap-y-4 px-4 py-4 sm:gap-x-10 sm:px-6 md:gap-x-12 lg:h-16 lg:flex-nowrap lg:gap-x-20 lg:px-0 lg:py-0 xl:gap-x-24">
                <div className="flex shrink-0 items-center gap-x-2 md:text-[18px] text-[10px] font-normal">
                    <svg width="17" height="21" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" >
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.99742 2.39844C5.40036 2.39844 2.48438 5.31443 2.48438 8.91148C2.48438 9.93077 2.87285 11.1186 3.54208 12.3827C4.20449 13.634 5.09984 14.8816 6.01485 16C6.92722 17.1151 7.84236 18.0813 8.53061 18.7696C8.70182 18.9408 8.85862 19.0944 8.99742 19.2285C9.13622 19.0944 9.29302 18.9408 9.46423 18.7696C10.1525 18.0813 11.0676 17.1151 11.98 16C12.895 14.8816 13.7903 13.634 14.4528 12.3827C15.122 11.1186 15.5105 9.93077 15.5105 8.91148C15.5105 5.31443 12.5945 2.39844 8.99742 2.39844ZM8.99742 20.5984C8.33306 21.3458 8.33289 21.3457 8.3327 21.3455L8.33059 21.3437L8.32541 21.339L8.30705 21.3225C8.29131 21.3084 8.26866 21.2879 8.23955 21.2614C8.18134 21.2084 8.09727 21.1311 7.99104 21.0316C7.77863 20.8327 7.47721 20.5446 7.1164 20.1838C6.39596 19.4634 5.43284 18.447 4.46694 17.2665C3.50369 16.0892 2.52078 14.7281 1.7745 13.3185C1.03503 11.9217 0.484375 10.3965 0.484375 8.91148C0.484375 4.20986 4.29579 0.398438 8.99742 0.398438C13.699 0.398438 17.5105 4.20986 17.5105 8.91148C17.5105 10.3965 16.9598 11.9217 16.2203 13.3185C15.4741 14.7281 14.4911 16.0892 13.5279 17.2665C12.562 18.447 11.5989 19.4634 10.8784 20.1838C10.5176 20.5446 10.2162 20.8327 10.0038 21.0316C9.89756 21.1311 9.81349 21.2084 9.75528 21.2614C9.72618 21.2879 9.70352 21.3084 9.68779 21.3225L9.66943 21.339L9.66425 21.3437L9.66267 21.3451C9.66248 21.3452 9.66178 21.3458 8.99742 20.5984ZM8.99742 20.5984L9.66178 21.3458L8.99742 21.9364L8.3327 21.3455L8.99742 20.5984ZM8.99773 7.19859C8.22453 7.19859 7.59773 7.82539 7.59773 8.59859C7.59773 9.37179 8.22453 9.99859 8.99773 9.99859C9.77093 9.99859 10.3977 9.37179 10.3977 8.59859C10.3977 7.82539 9.77093 7.19859 8.99773 7.19859ZM5.59773 8.59859C5.59773 6.72082 7.11996 5.19859 8.99773 5.19859C10.8755 5.19859 12.3977 6.72082 12.3977 8.59859C12.3977 10.4764 10.8755 11.9986 8.99773 11.9986C7.11996 11.9986 5.59773 10.4764 5.59773 8.59859Z" fill="white" />
                    </svg>

                    <span>Find a Dealer</span>
                </div>
                <div className="flex shrink-0 items-center gap-x-2 md:text-[18px] text-[10px] font-normal">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" >
                        <path d="M8.75 2V5" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.75 2V5" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.25 9.08984H21.25" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.5962 15.7968L19.5962 15.7968L16.4821 18.9102C16.4821 18.9102 16.4821 18.9102 16.4821 18.9102C16.3241 19.0681 16.2077 19.2525 16.1286 19.4088C16.0495 19.565 15.9714 19.765 15.9374 19.9802L15.9349 19.9968L15.7681 21.1821C15.768 21.1825 15.768 21.1829 15.7679 21.1833C15.7 21.6609 15.8244 22.1735 16.2006 22.5496C16.5767 22.9257 17.0893 23.05 17.5668 22.9821C17.5672 22.982 17.5676 22.982 17.568 22.9819L18.7535 22.8151L18.7701 22.8126C18.9812 22.7793 19.1816 22.7032 19.3407 22.6237C19.4897 22.5492 19.6843 22.431 19.8496 22.2589L22.9544 19.1548L22.9544 19.1548C23.2795 18.8298 23.6746 18.3329 23.7406 17.6656C23.8119 16.9453 23.479 16.3125 22.9544 15.788C22.4316 15.2653 21.7994 14.9363 21.0808 15.0101C20.4169 15.0783 19.9214 15.4716 19.5962 15.7968Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.75 17C20.0203 17.973 20.777 18.7297 21.75 19" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.75 22H8.75C5.25 22 3.75 20 3.75 17V8.5C3.75 5.5 5.25 3.5 8.75 3.5H16.75C20.25 3.5 21.75 5.5 21.75 8.5V12" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.7445 13.6992H12.7535" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.04529 13.6992H9.05427" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.04529 16.6992H9.05427" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <span>Online Booking</span>
                </div>
                <div className="flex shrink-0 items-center gap-x-2 text-[10px] md:text-[18px] font-normal">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 2V5" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M16.5 2V5" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M4 9.08984H21" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M23.6654 18.9987C23.6654 21.2987 21.7987 23.1654 19.4987 23.1654C17.1987 23.1654 15.332 21.2987 15.332 18.9987C15.332 16.6987 17.1987 14.832 19.4987 14.832C21.7987 14.832 23.6654 16.6987 23.6654 18.9987Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M20.5 20L19.7402 19.397C19.6078 19.2927 19.5 19.0417 19.5 18.8364V17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M12.5 22H8.5C5 22 3.5 20 3.5 17V8.5C3.5 5.5 5 3.5 8.5 3.5H16.5C20 3.5 21.5 5.5 21.5 8.5V12" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M12.4945 13.6992H12.5035" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.79529 13.6992H8.80427" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.79529 16.6992H8.80427" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>

                    <span>Booking Status</span>
                </div>
                <div className="flex shrink-0 items-center gap-x-2 md:text-[18px] text-[10px] font-normal">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.25 1.5C6.46053 1.5 1.75 6.21053 1.75 12C1.75 17.7895 6.46053 22.5 12.25 22.5C18.0398 22.5 22.75 17.7895 22.75 12C22.75 6.21053 18.0402 1.5 12.25 1.5ZM12.25 3.85C15.8718 3.85 18.9471 6.23088 20.0028 9.5052C18.1869 8.5209 15.3901 7.97618 12.25 7.97618C9.11051 7.97618 6.31358 8.5209 4.49797 9.5052C5.55389 6.23068 8.62883 3.85 12.25 3.85ZM17.5483 10.6499H18.4323C18.6089 10.6499 18.7506 10.7935 18.7506 10.9688C18.7506 11.144 18.6081 11.2876 18.4323 11.2876H17.5483C17.3725 11.2876 17.23 11.144 17.23 10.9688C17.23 10.7935 17.3733 10.6499 17.5483 10.6499ZM17.2294 10.2089C17.0536 10.2089 16.9112 10.0653 16.9112 9.89005C16.9112 9.71482 17.0542 9.57117 17.2294 9.57117H18.1134C18.29 9.57117 18.4317 9.71482 18.4317 9.89005C18.4317 10.0653 18.2893 10.2089 18.1134 10.2089H17.2294ZM17.868 11.7293H18.752C18.9286 11.7293 19.0703 11.873 19.0703 12.0482C19.0703 12.2235 18.9278 12.3671 18.752 12.3671H17.868C17.6921 12.3671 17.5497 12.2235 17.5497 12.0482C17.5497 11.8731 17.6921 11.7293 17.868 11.7293ZM6.06825 11.2884C5.89166 11.2884 5.74936 11.1448 5.74936 10.9695C5.74936 10.7943 5.89242 10.6506 6.06825 10.6506H6.9515C7.12809 10.6506 7.27039 10.7943 7.27039 10.9695C7.27039 11.1448 7.12733 11.2884 6.9515 11.2884H6.06825ZM6.95165 12.0482C6.95165 12.2241 6.8086 12.3671 6.63277 12.3671L5.74936 12.3673C5.57278 12.3673 5.43048 12.2236 5.43048 12.0484C5.43048 11.8731 5.57353 11.7295 5.74936 11.7295H6.63261C6.8086 11.7293 6.95165 11.8731 6.95165 12.0482ZM6.38729 10.2089C6.2101 10.2089 6.0684 10.0653 6.0684 9.89005C6.0684 9.71482 6.21085 9.57117 6.38729 9.57117H7.27054C7.44712 9.57117 7.58942 9.71482 7.58942 9.89005C7.58942 10.0653 7.44637 10.2089 7.27054 10.2089H6.38729ZM9.78915 19.763C6.88201 18.8404 4.6776 16.327 4.20117 13.2493C4.47353 13.2033 4.75239 13.1777 5.0379 13.1777C7.72055 13.1777 8.7535 14.8209 9.89461 17.7892C10.159 18.4764 10.0878 19.1502 9.78915 19.763ZM12.2501 14.9438C10.6245 14.9438 9.30684 13.6248 9.30684 12C9.30684 10.3733 10.6253 9.05615 12.2501 9.05615C13.8768 9.05615 15.1939 10.3738 15.1939 12C15.1939 13.6255 13.8768 14.9438 12.2501 14.9438ZM14.711 19.763C14.4137 19.15 14.3409 18.4762 14.6046 17.7891C15.7459 14.821 16.7794 13.1776 19.4621 13.1776C19.7482 13.1776 20.0265 13.2031 20.2989 13.2492C19.8232 16.3269 17.6183 18.8403 14.711 19.763Z" fill="white"></path>
                    </svg>

                    <span>Request a Test Drive</span>
                </div>
                <div className="flex shrink-0 items-center gap-x-2 text-[10px] md:text-[18px] font-normal">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8016 21.5984H6.00155C4.67607 21.5984 3.60155 20.5239 3.60156 19.1984L3.60166 4.79842C3.60166 3.47295 4.67618 2.39844 6.00166 2.39844H16.8019C18.1274 2.39844 19.2019 3.47295 19.2019 4.79844V11.3984M20.4019 19.1559L17.9477 21.5984M17.9477 21.5984L15.6019 19.2663M17.9477 21.5984V15.5984M7.80194 7.19844H15.0019M7.80194 10.7984H15.0019M7.80194 14.3984H11.4019" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>Request a Brochure</span>
                </div>

            </div>

        </header>
    );
}