import { Button, Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const FilteredToys = ({ toys }) => {
     const navigate = useNavigate();
    return (
    <div className="flex justify-center gap-5 md:mt-10 mb-5 p-2">
        {toys.map(toy => (
            
            <Card className="w-[300px] " imgSrc={toy.
                photoUrl} key={toy._id}>
                <h2 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">Name: {toy.toy_name}</h2>
                <p className="font-normal text-gray-700 dark:text-gray-400">Price: {toy.price}</p>
                <p>Ratting: {toy.rating}/5</p>
                <Button  onClick={()=>navigate(`/details/${toy._id}`)}>View Details</Button>
            </Card>
        ))}
    </div>);
};

export default FilteredToys;



/* 
<Card className="p-4" imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
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
            </Card> */