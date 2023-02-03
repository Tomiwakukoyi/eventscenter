import EventPage from "@/src/components/events/EventPage";

const EventsPage = ({ data }) => {
  return <EventPage data={data} />;
};
export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
