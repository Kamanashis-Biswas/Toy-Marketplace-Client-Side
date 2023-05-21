import { Button, Table } from "flowbite-react";


const MyToyCard = ({ toys }) => {
    return (
        <div>
            <Table>
                <Table.Head>
                    <Table.HeadCell>
                        Toy Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Seller Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Available Quentity
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Description
                    </Table.HeadCell>
                    <Table.HeadCell>
                            Edit
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {toys?.map(toy => (
                        <Table.Row key={toy._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {toy.toy_name}
                            </Table.Cell>
                            <Table.Cell>
                                {toy.seller_name}
                            </Table.Cell>
                            <Table.Cell>
                                {toy.price}
                            </Table.Cell>
                            <Table.Cell>
                                {toy.avail_qty}
                            </Table.Cell>
                            <Table.Cell>
                                {toy.description}
                            </Table.Cell>
                            <Table.Cell>
                                <Button className="w-[70px] h-[30px] mb-2">Update</Button>
                                <Button className="w-[70px] h-[30px]">Delete</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default MyToyCard;