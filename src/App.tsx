import logo from './assets/logo.jpg'
import googlePlay from './assets/badges/google_play.png';
import appleStore from './assets/badges/apple.svg';

function App() {
    return (
        <div className="App px-8 py-12">
            <div className="flex">
                <img src={logo} className="img-fluid h-24 pr-4" alt="Dirr"/>
                <div className="flex-col">
                    <h1 className="text-3xl font-bold text-gray-700">
                        Dirr
                    </h1>
                    <h2 className="text-xl font-bold text-gray-700">
                        GPS and orientation app
                    </h2>
                    <ul className="text-gray-500">
                        <li>Read position and orientation sensors:
                        <ul>GPS</ul>
                        <ul>Compass (magnetic north)</ul>
                        <ul>Roll, pitch, yaw (heading)</ul>
                        </li>
                        <li>Have confidence in your data</li>
                        <li>Save data fully offline. Private and secure.</li>
                    </ul>
                </div>
            </div>
                <div>
{/*Generated using https://tools.applemediaservices.com/app-store/*/}
<a className="inline-block h-16" href="https://apps.apple.com/gb/app/dirr/id6444596100?itsct=apps_box_badge&amp;itscg=30200"><img className="p-2.5 h-16" src={appleStore} alt="Download on the App Store"/></a>
{/*Generated using https://play.google.com/intl/en_us/badges/*/}
<a className="inline-block" href='https://play.google.com/store/apps/details?id=uk.orth.dirr&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' className="h-16" src={googlePlay}/></a>
                </div>
        </div>
    )
}

export default App
