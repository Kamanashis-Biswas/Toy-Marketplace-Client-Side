import { Card } from "flowbite-react";

const HowItWorks = () => {
    return (
        <div>
            <h2 className="text-center mt-8 md:mt-[100px] mb-10 font-bold text-2xl md:text-6xl">Here&apos;s how it works</h2>
            <div className="md:flex gap-5">
                <Card className="mb-5">
                    <div className="flex flex-col items-center pb-10">
                        <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src="https://cdn.shopify.com/s/files/1/0475/2385/6541/files/icon-2_180x.png?v=1613706928"
                            alt=""
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                            Inspires
                        </h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Elementum sagittis.
                        </span>
                    </div>
                </Card>
                <Card className="mb-5">
                    <div className="flex flex-col items-center pb-10">
                        <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src="https://cdn.shopify.com/s/files/1/0475/2385/6541/files/icon-3_180x.png?v=1613706928"
                            alt=""
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                            Encouraging
                        </h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Morbi tincidunt ornare massa eget. Ullamcorper a lacus vestibulum sed arcu non odio..
                        </span>
                    </div>
                </Card>
                <Card className="mb-5">
                    <div className="flex flex-col items-center pb-10">
                        <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src="https://cdn.shopify.com/s/files/1/0475/2385/6541/files/icon-1_180x.png?v=1613706928"
                            alt=""
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                            Creative
                        </h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Cras semper auctor neque vitae tempus quam pellentesque. At augue eget arcu dictum.
                        </span>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default HowItWorks;