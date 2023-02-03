import React from "react";
import Link from "next/link";
import Image from "next/image";

const EventPage = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((ev) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
          <Image src={ev.image} alt={ev.title} width={400} height={400} />
          <h2>{ev.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default EventPage;
