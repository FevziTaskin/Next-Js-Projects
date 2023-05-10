import SingleEvent from "@/src/components/events/singleEvent";

const EventPage = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default EventPage;

// Declaring next js how many pages it needs to create at build time
export async function getStaticPaths() {
  // const { allEvents } = await import("/data/data.json");  Another option
  const data = await import("/data/data.json");
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
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
  // console.log(context);
  const id = context.params.id;
  const { allEvents } = await import("/data/data.json");
  const eventData = allEvents.find((ev) => ev.id === id);
  return {
    props: { data: eventData },
  };
}
