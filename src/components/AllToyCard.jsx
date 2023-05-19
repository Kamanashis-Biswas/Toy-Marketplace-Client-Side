import { Button, Table } from "flowbite-react";


const AllToyCard = () => {
    return (
        <div>
            <Table>
                <Table.Head>
                    <Table.HeadCell>
                        Seller Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Toy Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Sub-Category
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Available Quentity
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Apple MacBook Pro 17
                        </Table.Cell>
                        <Table.Cell>
                            Sliver
                        </Table.Cell>
                        <Table.Cell>
                            Laptop
                        </Table.Cell>
                        <Table.Cell>
                            $2999
                        </Table.Cell>
                        <Table.Cell>
                            100
                        </Table.Cell>
                        <Table.Cell>
                           <Button>View Details</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Microsoft Surface Pro
                        </Table.Cell>
                        <Table.Cell>
                            White
                        </Table.Cell>
                        <Table.Cell>
                            Laptop PC
                        </Table.Cell>
                        <Table.Cell>
                            $1999
                        </Table.Cell>
                        <Table.Cell>
                           100
                        </Table.Cell>
                        <Table.Cell>
                           <Button>View Details</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Magic Mouse 2
                        </Table.Cell>
                        <Table.Cell>
                            Black
                        </Table.Cell>
                        <Table.Cell>
                            Accessories
                        </Table.Cell>
                        <Table.Cell>
                            $99
                        </Table.Cell>
                        <Table.Cell>
                           100
                        </Table.Cell>
                        <Table.Cell>
                           <Button>View Details</Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
};

export default AllToyCard;