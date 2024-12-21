import "./App.css";
import logo from "./assets/images/logo.png"; // Import the image file
import Cart from "./assets/images/cart.png"; // Import the image file
// import image from "./assets/images/image.png"; // Import the image file
import grocery from "./assets/images/grocery-image.png"; // Import the image file
import background from "./assets/images/Image.png"; // Import the image file

const App = () => {
  return (
    <>
      <div className="container min-h-screen bg-[url(`${background}`)] bg-cover bg-center px-24 py-8 relative">
        <nav className="flex">
          <img src={logo} className="h-11 cursor-pointer" alt="Logo" />
          <ul className="flex-1 text-center">
            <li className="list-none inline-block px-6">
              <a
                href="#"
                className="no-underline text-white hover:text-yellow-200 hover:underline hover:duration-500"
              >
                Home
              </a>
            </li>
            <li className="list-none inline-block px-6">
              <a
                href="#"
                className="no-underline text-white hover:text-yellow-200 hover:underline hover:duration-500"
              >
                About
              </a>
            </li>
            <li className="list-none inline-block px-6">
              <a
                href="#"
                className="no-underline text-white hover:text-yellow-200 hover:underline hover:duration-500"
              >
                Features
              </a>
            </li>
            <li className="list-none inline-block px-6">
              <a
                href="#"
                className="no-underline text-white hover:text-yellow-200 hover:underline hover:duration-500"
              >
                Contact
              </a>
            </li>
          </ul>
          <img src={Cart} className="h-9 cursor-pointer" alt="Cart" />
        </nav>
        <div className="text-white mt-48 max-w-xl">
          <h1 className="text-6xl font-semibold leading-tight">
            Groceries <br />
            delivery in <span className="font-light">15 mins</span>
          </h1>
          <p>
            Grocify offers a wide range of products, including fresh products,
            meats, dairy, baked goods, and non-perishable items.
          </p>

          <div className="mt-10">
            <a
              href="#"
              className="bg-yellow-400 rounded-3xl px-7 py-3 font-medium inline-block mr-4 hover:bg-transparent duration-300 hover:border-yellow-300 hover:text-white hover:border border border-transparent"
            >
              Order Now
            </a>
            <a href="#">
              Download{" "}
              <span className="text-lg inline-block rotate-90">&#10152;</span>
            </a>
          </div>
        </div>

        <div>
          <img
            src={grocery}
            className="w-[43%] absolute bottom-0 right-20"
            alt="Grocery Image"
          />
        </div>
      </div>
    </>
  );
};

export default App;
