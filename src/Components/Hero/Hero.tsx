import appleStore from "../../assets/badges/apple.svg";
import googlePlay from "../../assets/badges/google_play.png";
import homeLight from "../../assets/product/home_light.jpg";


export default function Hero() {
    return <div className="container">
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mx-8">
                    <h1 className="text-3xl md:text-6xl font-bold text-purple-800 my-4 font-PatrickHand">
                        GPS and orientation app
                    </h1>
                    <h2 className="text-purple-800 italic">Latitude, longitude, altitude, roll, pitch, yaw (heading), compass and more...</h2>
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
                <img src={homeLight} className="max-w-[60%] md:max-w-[30%] rounded-lg shadow-2xl" alt="Screenshot of Dirr app" />
            </div>
        </div>
    </div>;
}
