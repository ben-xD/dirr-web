const Features = () => {
    return <div className="container text-purple-800 my-16 bg-purple-50 py-8 rounded-xl">
        <h2 className="text-5xl my-4 font-PatrickHand text-purple-800 text-center">Features</h2>
        <div className="grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-4 justify-center">
            <div className="card w-96 bg-base-100 shadow-xl  mx-4 my-4">
                <div className="card-body">
                    <h2 className="card-title">Save position and orientation.</h2>
                    <p>Data is processed locally, from your device's GPS/GNSS and magnetometer sensors.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-4 my-4">
                <div className="card-body">
                    <h2 className="card-title">Have confidence in your data.</h2>
                    <p>View the accuracy of each sensor and visualise the compass using the map.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-4 my-4">
                <div className="card-body">
                    <h2 className="card-title">Private and secure.</h2>
                    <p>All data is saved fully offline, on your device.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-4 my-4">
                <div className="card-body">
                    <h2 className="card-title">Export.</h2>
                    <p>Open saved locations with other apps on your phone. Or export a JSON containing all your saved locations and orientations.</p>
                </div>
            </div>
        </div>
    </div>;
}
export default Features;