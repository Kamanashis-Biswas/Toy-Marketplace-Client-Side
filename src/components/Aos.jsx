import { Card } from "flowbite-react";

const Aos = () => {
    return (
        <div className="p-2">
            <h2 className="text-center md:w-[700px] m-auto mt-8 md:mt-[100px] mb-10 font-bold text-2xl md:text-6xl">It&apos;s never been easier to invest in your kid&apos;s toys</h2>
            <Card className="mb-10" data-aos="fade-left">
                <h2 className="text-2xl font-bold">Toys are all your baby need better toys for better growth</h2>
                <p>Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Faucibus interdum posuere lorem ipsum dolor. Eu tincidunt tortor aliquam nulla facilisi cras. Venenatis lectus magna.</p>
            </Card>
            <Card className="mb-10" data-aos="fade-right">
                <h2 className="text-2xl font-bold">Creative modern wooden toys for kids development</h2>
                <p>Ut faucibus pulvinar elementum integer enim neque volutpat. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Elit scelerisque mauris pellentesque pulvinar pellentesque tristique.</p>
            </Card>
            <Card className="mb-10" data-aos="fade-left">
                <h2 className="text-2xl font-bold">Wooden toys that will delight your little one a lot</h2>
                <p>Nisl vel pretium lectus quam id leo in vitae. Eros in cursus turpis massa. Blandit massa enim nec dui nunc. Turpis in eu mi bibendum neque egestas. Viverra nam libero justo laoreet sit amet cursus sit.</p>
            </Card>
        </div>
    );
};

export default Aos;