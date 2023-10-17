import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SlideImage from "./components/SlideImage";
import Footer from "./components/Footer";
import { MdOutlineFavoriteBorder } from "react-icons/md";


function App() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(4);

  const [like, setLike] = useState(0);

  const test = async () => {
    const response = await fetch(
      "https://honey-badgers-ecommerce.glitch.me/products"
    );

    setData(await response.json());
  };

  useEffect(() => {
    test();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  return (
    <div>
      <Header />
      <SlideImage />
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex items-center justify-between">
        <p className="font-black ml-5 sm:ml-10 md:ml-20 lg:ml-40 xl:ml-60 2xl:ml-80 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl">
          Ürünler
        </p>
      </div>
      <div className="flex items-center justify-end mr-5 sm:mr-10 md:mr-20 lg:mr-40 xl:mr-60 2xl:mr-80">
        <MdOutlineFavoriteBorder style={{ fontSize: 20 }} />
        <p className="ml-2 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          {like} Ürün
        </p>
      </div>
      <br />
      <div className="grid gap-y-4 lg:grid-cols-4 md:grid-cols-2 gap-x-2 px-20 text-xs justify-items-center items-center">
        {data.slice(0, visible).map((data) => (
          <div className="flex bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 bg-red-700 w-64 ml-2 ms-8">
            <div class="p-5">
              <img class="rounded-t-lg" src={data.imageUrl} alt="" />
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                {data.name}
              </h5>
              <p className="font-normal text-gray-700 mb-3 bg-slate-400">
                {data.price}
              </p>
              <p className="font-normal text-gray-700 mb-3">
                {data.description}
              </p>
              <p className="font-normal text-gray-700 mb-3">
                {data.shippingMethod}
              </p>
              <MdOutlineFavoriteBorder
                onClick={() => setLike(like + 1)}
                style={{ fontSize: 20 }}
              />
            </div>
          </div>
        ))}
        ;
      </div>

      <button
        onClick={showMoreItems}
        className="button bg-blue-700 items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Daha Fazla
      </button>

      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
