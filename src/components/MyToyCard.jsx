import { Button, Select, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import api from "../config/api";


const MyToyCard = ({ toys, getMyToys, page }) => {
    const navigate = useNavigate();
    const deleteMyToy = (id)=>{
        const resp = api.delete(`/toy/${id}`);
        if(resp) navigate('/mytoys');
    }
    return (
        <div>
            <div className="ml-3 md:ml0">
                <form>
                    <Select onChange={(evt)=>getMyToys(page, evt.target.value)} className="w-[200px] my-10"
                    >
                        <option value="asc">
                            Sort by Low Price
                        </option>
                        <option value="desc">
                            Sort by High Price
                        </option>
                    </Select>
                </form>
            </div>
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
                                {toy.
                                    descriptions}
                            </Table.Cell>
                            <Table.Cell>
                                <Button onClick={()=>navigate(`/updateatoy/${toy._id}`)} className="w-[70px] h-[30px] mb-2">Update</Button>
                                <Button onClick={()=>deleteMyToy(toy._id)} className="w-[70px] h-[30px]">Delete</Button>
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