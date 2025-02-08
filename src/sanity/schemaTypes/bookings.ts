import { defineField, defineType } from "sanity";

export default defineType({
  name: "booking",
  title: "Booking",
  type: "document",
  fields: [
    defineField({
      name: "pickup",
      title: "Pick-Up Location",
      type: "object",
      fields: [
        { name: "city", title: "City", type: "string" },
        { name: "location", title: "Location", type: "string" },
        { name: "date", title: "Date", type: "date" },
        { name: "time", title: "Time", type: "string" },
      ],
    }),
    defineField({
      name: "dropoff",
      title: "Drop-Off Location",
      type: "object",
      fields: [
        { name: "city", title: "City", type: "string" },
        { name: "location", title: "Location", type: "string" },
        { name: "date", title: "Date", type: "date" },
        { name: "time", title: "Time", type: "string" },
      ],
    }),
    defineField({
      name: "rentalDays",
      title: "Rental Days",
      type: "number",
      validation: (Rule) => Rule.min(1).max(7).error("Rental days must be between 1 and 7"),
    }),
  ],
});
