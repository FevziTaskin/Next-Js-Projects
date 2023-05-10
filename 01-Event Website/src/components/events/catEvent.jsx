import React from "react";
import Link from "next/link";
import Image from "next/image";

const CatEvent = ({ data, cityName }) => {
  return (
    <div className="cat_events">
      <h1 className="title">Events in {cityName}</h1>
      <div className="content">
        {data.map((ev) => (
          <Link
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
            passHref
            className="card"
          >
            <Image width={300} height={300} alt={ev.title} src={ev.image} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
