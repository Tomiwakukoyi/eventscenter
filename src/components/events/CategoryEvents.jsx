import Image from "next/image";
import Link from "next/link";

const CategoryEvents = ({ data, pageName }) => {
  return (
    <div className="category_events">
      <h1>Events in {pageName}</h1>

      <div className="content">
        {data.map((ev) => (
          <Link
            className="card"
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
            passHref
          >
            <Image src={ev.image} alt={ev.title} width={300} height={280} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryEvents;
