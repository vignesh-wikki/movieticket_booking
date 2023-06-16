import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
export default function App() {
  const [movies, setMovie] = useState("");
  useEffect(() => {
    const fetch = async () => {
      const requests = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );

      setMovie(requests.data);
    };
    fetch();
  }, []);

  let i = 0;

  return (
    <div className="w-full h-full">
      <Nav />
<div className="pt-12">
      <div className=" flex justify-center flex-wrap  mb-20">
        {movies.length > i &&
          movies.map((data, index) => (
            <Link to={`/booking/${index}`}>
              <Cards
                image={data.show.image.medium}
                title={data.show.name}
                language={data.show.language}
                genres={data.show.genres}
              />
            </Link>
          ))}
      </div>
</div>
      <div className=" mt-auto">
        <Footer />
      </div>
    </div>
  );
}
