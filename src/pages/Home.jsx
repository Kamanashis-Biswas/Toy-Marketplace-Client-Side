
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import ReactTab from "../components/ReactTab";

const Home = () => {
    return (
        <div>
            {/* Bannar section */}
            <Banner></Banner>
            <h2 className="text-center my-8 font-bold underline text-3xl">Shop by Category</h2>
            <ReactTab></ReactTab>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;