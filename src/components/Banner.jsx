import { Carousel } from "flowbite-react";


const Banner = () => {
    return (
        <div>
            <div className="mt-10 p-4">
                <div className="h-[250px] md:h-[500px]">
                    <Carousel>
                        <img className="h-[250px] md:h-[500px]"
                            src="https://i.ibb.co/gr0qZTZ/white-volvo-truck-road-with-trees-background.jpg"
                            alt="..."
                        />
                        <img className="h-[250px] md:h-[500px]"
                            src="https://i.ibb.co/Lzrrhjn/green-truck-delivering-christmas-presents.jpg"
                            alt="..."
                        />
                        <img className="h-[250px] md:h-[500px]"
                            src="https://i.ibb.co/SKtYgqm/robot-washing-car.jpg"
                            alt="..."
                        />
                        <img className="h-[250px] md:h-[500px]"
                            src="https://i.ibb.co/HDFCRkR/pexels-mike-bird-97353-1.jpg"
                            alt="..."
                        />
                        <img className="h-[250px] md:h-[500px]"
                            src="https://images.crazygames.com/toycarsimulator.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop"
                            alt="..."
                        />
                        <img className="h-[250px] md:h-[500px]"
                            src="https://img.freepik.com/free-photo/close-up-toy-car-with-easter-eggs_23-2149318362.jpg"
                            alt="..."
                        />
                        <img className="h-[250px] md:h-[500px]"
                            src="https://t3.ftcdn.net/jpg/00/87/33/50/360_F_87335083_WKoeA5Z6HAFZcelwTobfsqVRKbICXjLu.jpg"
                            alt="..."
                        />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;