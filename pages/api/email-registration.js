import path from "path";
import fs from "fs";

function buildPath() {
  //cwd - current working directory
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}
export default function handler(req, res) {
  const { method } = req;

  //access data
  //extract data ( all events)
  //res 4040 if there are no ellevents
  //All events - loop through and identify the eventId
  // add the email into emails regsitered on our data
  //only if that email doesnt exist
  //check the format of the email

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: "Events data not found",
    });
  }

  if (method === "POST") {
    const { email, eventId } = req.body;

    const newAllEvents = allEvents.map((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res.status(201).json({ message: "This email has been used" });
          return ev;
        }
        return {
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }
      return ev;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    res.status(201).json({
      message: `You have been registered successfully with the email:${email} ${eventId}`,
    });
  }
}
