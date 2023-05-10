import React from "react";
import CatEvent from "@/src/components/events/catEvent";

const EventsCatPage = ({ data, cityName }) => {
  return <CatEvent data={data} cityName={cityName} />;
};

export default EventsCatPage;

// Declaring next js how many pages it needs to create at build time
export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

// Next fetches data for each page
export async function getStaticProps(context) {
  //console.log(context);
  const id = context?.params.cat;
  // console.log(context.params);
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  return {
    props: { data, cityName: id },
  };
}
