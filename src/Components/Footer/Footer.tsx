import logo from "../../assets/logo/logo_lowpoly.svg";

const Footer = () => {
    return <>
        <footer className="sticky top-[100vh] flex items-center bg-purple-700 text-neutral-content">
            <div className="container footer gap-y-0 space-y-4 md:space-y-0 my-4">
                <div className="items-center grid-flow-col mx-4 place-self-center md:place-self-start">
                    <img src={logo} className="img-fluid h-8 pr-4 mb-2 mt-2" alt="Dirr" />
                    <p>Copyright © {new Date().getFullYear()} <a href="https://orth.uk" className="underline">Ben
                        Butterworth</a></p>
                </div>
                <div className="grid-flow-col gap-x-8 place-self-center md:justify-self-end mx-4 h-8 items-center">
                    <a aria-label="Twitter" target="_blank" rel="noopener" href="https://twitter.com/orth_uk">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            className="h-6 w-6 fill-current hover:fill-purple-100">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a aria-label="LinkedIn" target="_blank" rel="noopener" href="https://www.linkedin.com/in/bbutterworth/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current hover:fill-purple-100" viewBox="0 0 24 24">
                            <path d="M5.4 24h-5V8h5v16ZM2.9 5.8a3 3 0 0 1-2.9-3 2.9 2.9 0 1 1 5.8 0 3 3 0 0 1-3 3Zm21 18.2H19v-7.8c0-1.9 0-4.2-2.6-4.2-2.5 0-3 2-3 4v8h-5V8h4.9v2.2A5.2 5.2 0 0 1 18 7.6c5 0 6 3.3 6 7.6V24Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    </>;
}
export default Footer;