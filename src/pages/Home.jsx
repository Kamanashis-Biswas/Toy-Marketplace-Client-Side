
import Aos from "../components/Aos";
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import ReactTab from "../components/ReactTab";

const Home = () => {
    return (
        <div>
            {/* Bannar section */}
            <Banner></Banner>
            <ReactTab></ReactTab>
            <HowItWorks></HowItWorks>
            <Aos></Aos>
        </div>
    );
};

export default Home;