import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = ({ data }) => {
  return (
    <div className="home_body">
      {data.map((ev) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
          <div>
            <Image
              className="image"
              src={ev.image}
              alt={ev.title}
              width={600}
              height={400}
            />
          </div>
          <div className="content">
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
