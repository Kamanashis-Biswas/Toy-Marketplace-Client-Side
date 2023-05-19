import { Button, Card, Rating } from "flowbite-react";


const ToyDetailsCard = () => {
    return (
        <div>
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Toy Name
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Price
                </p>
                <Rating className="">
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />
                </Rating>
                <Button>View Details</Button>
            </Card>
        </div>
    );
};

export default ToyDetailsCard;