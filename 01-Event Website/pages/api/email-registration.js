import path from "path";
import fs from "fs"; // To update data.json

// Access our data by creating the path of our data
function buildPath() {
  // cwd => current word directory which means the root file of our project
  return path.join(process.cwd(), "data", "data.json");
}

// Before updating data, we need to extract it to find which data we want to update
function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    return res.status(404).json({ message: "Events data not found" });
  }

  if (method === "POST") {
    const { email, eventId } = req.body;

    const newAllEvents = allEvents.map((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res
            .status(201)
            .json({ message: "This email has already been registered!" });
        } else {
          return {
            ...ev,
            emails_registered: [...ev.emails_registered, email],
          };
        }
      }
      return ev;
    });

    // Overwrite new allevents
    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    res.status(200).json({
      message: `You have been registered successfully with email : ${email} for the event ${eventId}`,
    });
  }
}
