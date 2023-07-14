import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import BookForm from "./Components/BookForm";
import { CardBody } from "@material-tailwind/react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Bookingform() {
  const { id } = useParams();
  const [movies, setMovie] = useState("");
  useEffect(() => {
    const fetch = async () => {
      const requests = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      setMovie(requests.data);
    };
    fetch();
  },[id]);

  const data = movies[id]?.show;

  return (
    <>
      <Nav />

      <div className="pt-20 w-full h-full">
        <div className="flex justify-center">
          <div className="mt-2 mx-12 w-full h-xs-[20rem]  max-w-screen-xl  max-h-[29rem]">
            <img alt="images"
              src={data?.image?.original}
              className=" object-cover w-full h-full rounded-[2rem]"
            />
          </div>
        </div>
        <div>
          <p className="ms-8 underline pt-4 text-4xl  font-bold">{data?.name}</p>
          <div className="mt-6">
            <div className="w-full h-full">
              <CardBody className=" h-full w-full  bg-white  bottom-10 left-72 right-10 top-96 ">
                <p className=" text-lg">{data?.summary}</p>
              </CardBody>
            </div>
            <p><span className="ms-4 text-lg font-semibold ">Type : </span>{data?.type}</p>
            <p><span className="ms-4 text-lg font-semibold ">premiered :</span> {data?.premiered}</p>
            <p><span className="ms-4 text-lg font-semibold ">Rating :</span> {data?.rating?.average}</p>
            <p><span className="ms-4 text-lg font-semibold ">Country :</span> {data?.network?.country?.name}</p>
            <p><span className="ms-4 text-lg font-semibold ">Status :</span> {data?.status}</p>
          </div>
        </div>
        <hr className="mt-4  bg-orange-900 z-[10]" />

        <p className="ms-4 pt-4 text-2xl  font-bold text-red-600">
          Book your ticket
        </p>
        <div className="mt-5 flex justify-center">
          <BookForm data={{data:data?.name,id:data?.id}} />
        </div>
      </div>
      <Footer />
    </>
  );
}
