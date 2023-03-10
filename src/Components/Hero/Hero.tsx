import appleStore from "../../assets/badges/apple.svg";
import googlePlay from "../../assets/badges/google_play.png";
import homeLight from "../../assets/product/home_light.jpg";
import homeDark from "../../assets/product/home_dark.jpg";


export default function Hero() {
    return <div className="container">
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mx-8">
                    <h1 className="text-3xl font-bold dark:text-purple-50 text-purple-800 my-4 font-PatrickHand">
                        Read, save and share your position and orientation privately
                    </h1>
                    <h2 className="text-purple-600 dark:text-purple-100 text-md">Supports GPS/GNSS (latitude, longitude, altitude), RPY (roll, pitch, yaw / heading), compass, accuracy data and more...</h2>
                    <div className="my-12 flex justify-center flex-wrap">
                        {/*Generated using https://tools.applemediaservices.com/app-store/*/}
                        <a className="inline-block"
                            href="https://apps.apple.com/gb/app/dirr/id6444596100?itsct=apps_box_badge&amp;itscg=30200"><img
                                className="p-4 h-24" src={appleStore} alt="Download on the App Store" /></a>
                        {/*Generated using https://play.google.com/intl/en_us/badges/*/}
                        <a className="inline-block"
                            href='https://play.google.com/store/apps/details?id=uk.orth.dirr&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img
                                alt='Get it on Google Play' className="h-24" src={googlePlay} /></a>
                    </div>
                </div>
                <picture className="max-w-[60%] md:max-w-[30%] shadow-2xl">
                    <source srcSet={homeDark} className="rounded-lg" media="(prefers-color-scheme: dark)"/>
                    <img src={homeLight} className="rounded-lg" alt="Screenshot of Dirr app" />
                </picture>
            </div>
        </div>
    </div>;
}
