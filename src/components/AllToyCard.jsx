import { Button, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const categoryObject = {
  mini_fire_truck: "Mini Fire Truck",
  regular_car: "Regular Car",
  sports_car: "Sports Car",
  truck: "Track",
};

const AllToyCard = ({ toys, setSearch, page }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center">
        <form>
          <div className="flex my-10">
            <input
              className="w-[300px] rounded-xl"
              onChange={(evt) => setSearch(page, evt.target.value)}
              type="search"
              name="search"
              placeholder="Type Toy Name for Search"
            />
          </div>
        </form>
      </div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Seller Name</Table.HeadCell>
          <Table.HeadCell>Toy Name</Table.HeadCell>
          <Table.HeadCell>Sub-Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Available Quentity</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {toys?.map((toy) => (
            <Table.Row
              key={toy._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {toy.seller_name}
              </Table.Cell>
              <Table.Cell>{toy.toy_name}</Table.Cell>
              <Table.Cell>{categoryObject[toy.category]}</Table.Cell>
              <Table.Cell>{toy.price}</Table.Cell>
              <Table.Cell>{toy.avail_qty}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => navigate(`/details/${toy._id}`)}>
                  View Details
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default AllToyCard;
