import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

const AddAToy = () => {

    const handleAddToy = (event) => {
        const form = event.target;
        const toy_name = form.toy_name.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quentity = form.quentity.value;
        const photo = form.photo.value;
        const comment = form.comment.value;

        console.log(toy_name, seller_name, seller_email, category, price, rating, quentity, photo, comment);

    };



    return (
        <div className="p-3 text-center">
            <form onSubmit={handleAddToy}>
                <div className="md:flex gap-10 justify-between">
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="toy_name"
                                value="Toy Name"
                            />
                        </div>
                        <TextInput
                            id="toy_name"
                            name="toy_name"
                            type="text"

                        />
                    </div>
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="seller_name"
                                value="Seller Name"
                            />
                        </div>
                        <TextInput
                            id="seller_name"
                            name="saller_name"
                            type="text"
                        />
                    </div>
                </div>
                <div className="md:flex gap-10 justify-between">
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="seller_email"
                                value="Seller Email"
                            />
                        </div>
                        <TextInput
                            id="seller_email"
                            name="seller_email"
                            type="email"

                        />
                    </div>
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="category"
                                value="Sub-category"
                            />
                        </div>
                        <Select
                            id="category"
                            name="category"
                            required={true}
                        >
                            <option>
                                Sports Car
                            </option>
                            <option>
                                Truck
                            </option>
                            <option>
                                Regular Car
                            </option>
                            <option>
                                Mini Fire Truck
                            </option>
                        </Select>
                    </div>
                </div>
                <div className="md:flex gap-10 justify-between">
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="price"
                                value="Price"
                            />
                        </div>
                        <TextInput
                            id="price"
                            type="text"
                            name="price"

                        />
                    </div>
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="rating"
                                value="Rating"
                            />
                        </div>
                        <TextInput
                            id="rating"
                            type="text"
                            name="rating"
                        />
                    </div>
                </div>
                <div className="md:flex gap-10 justify-between">
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="quentity"
                                value="Available Quentity"
                            />
                        </div>
                        <TextInput
                            id="quentity"
                            name="quentity"
                            type="text"

                        />
                    </div>
                    <div className="md:w-1/2 mb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="toy_photo"
                                value="Photo URL of Toy"
                            />
                        </div>
                        <TextInput
                            id="toy_photo"
                            name="toy_photo"
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Description of Toy"
                        />
                        <Textarea
                            id="comment"
                            name="comment"
                            placeholder="Description of Toy..."
                            required={true}
                            rows={4}
                        />
                    </div>
                </div>
                <div className="flex mt-4 justify-center">
                    <Button type="submit">Add A Toy</Button>
                </div>
            </form>
        </div>
    );
};

export default AddAToy;