

const Footer = () => {
  return (
    <div className="mt-8 bg-gray-600">
      <div className="md:grid grid-cols-5 p-4 md:p-8  gap-5 text-center">
        <div className="text-white">
          <h2 className="text-xl font-bold">CarWonderland</h2>
          <div className="mt-3">
            <img className="w-3/4" src="https://i.ibb.co/cxg0Vgb/socalgroup.png" alt="" />
          </div>
        </div>
        <div className="text-white">
          <p>About</p>
          <p className="mt-4">Brand Center</p>
          <p className="mt-4">Blog</p>
        </div>
        <div className="text-white">
          <p>Discord Server</p>
          <p className="mt-4">Twitter</p>
          <p className="mt-4">Facebook</p>
        </div>
        <div className="text-white">
          <p>Privacy Policy</p>
          <p className="mt-4">Licensing</p>
          <p className="mt-4">Terms & Conditions</p>
        </div>
        <div className="text-white">
          <p>Android</p>
          <p className="mt-4">Windows</p>
          <p className="mt-4">MacOS</p>
        </div>
      </div>
      <hr />
      <p className="text-center p-4 text-white">&copy; CarWonderland 2023</p>
    </div>
  );
};

export default Footer;