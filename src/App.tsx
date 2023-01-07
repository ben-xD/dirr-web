import {Navbar} from "./Components/Navbar/Navbar";
import {Hero} from "./Components/Hero/Hero";
import {Footer} from "./Components/Footer/Footer";
import {Features} from "./Components/Features/Features";
import {Feedback} from "./Components/Feedback/Feedback";

function App() {
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>
            <Hero/>
            <Features/>
            <Feedback/>
            <Footer></Footer>
        </div>
    )
}

export default App
