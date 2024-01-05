import {
  LrtLine,
  Resolvers,
} from "./graphql-types/__generated__/graphql-types.js";

export const stubResolvers: Resolvers = {
  Query: {
    calgaryLRTStations: () => [
      {
        name: "Tuscany",
        lines: [LrtLine.RedLine],
      },
      {
        name: "Crowfoot",
        lines: [LrtLine.RedLine],
      },
      {
        name: "Dalhousie",
        lines: [LrtLine.RedLine],
      },
      {
        name: "Brentwood",
        lines: [LrtLine.RedLine],
      },
      {
        name: "University",
        lines: [LrtLine.RedLine],
      },
      {
        name: "Banff Trail",
        lines: [LrtLine.RedLine],
      },
      {
        name: "Lion's Park",
        lines: [LrtLine.RedLine],
      },
      {
        name: "SAIT/AUArts/Jubilee",
        lines: [LrtLine.RedLine],
      },
      {
        name: "Sunnyside",
        lines: [LrtLine.RedLine],
      },
      {
        name: "8th Street",
        lines: [LrtLine.RedLine, LrtLine.BlueLine],
      },
      {
        name: "7th Street",
        lines: [LrtLine.RedLine, LrtLine.BlueLine],
      },
      {
        name: "6th Street",
        lines: [LrtLine.RedLine, LrtLine.BlueLine],
      },
      {
        name: "4th Street",
        lines: [LrtLine.RedLine, LrtLine.BlueLine],
      },
      {
        name: "3rd Street",
        lines: [LrtLine.RedLine, LrtLine.BlueLine],
      },
      {
        name: "1st Street",
        lines: [LrtLine.RedLine, LrtLine.BlueLine],
      },
      {
        name: "Centre Street",
        lines: [LrtLine.RedLine, LrtLine.BlueLine],
      },
      {
        name: "City Hall",
        lines: [LrtLine.RedLine, LrtLine.BlueLine],
      },
      {
        name: "Victoria Park / Stampede",
        lines: [LrtLine.RedLine],
      },
      {
        name: "Erlton / Stampede",
        lines: [LrtLine.RedLine],
      },
      {
        name: "39th Avenue",
        lines: [LrtLine.RedLine],
      },
      {
        name: "Chinook",
        lines: [LrtLine.RedLine],
      },
      {
        name: "Heritage",
        lines: [LrtLine.RedLine],
      },
      {
        name: "Southland",
        lines: [LrtLine.RedLine],
      },
      {
        name: "Anderson",
        lines: [LrtLine.RedLine],
      },
      {
        name: "Canyon Meadows",
        lines: [LrtLine.RedLine],
      },
      {
        name: "Fish Creek-Lacombe",
        lines: [LrtLine.RedLine],
      },
      {
        name: "Shawnessy",
        lines: [LrtLine.RedLine],
      },
      {
        name: "Someset-Bridlewood",
        lines: [LrtLine.RedLine],
      },
      {
        name: "69th Street",
        lines: [LrtLine.BlueLine],
      },
      {
        name: "Sirocco",
        lines: [LrtLine.BlueLine],
      },
      {
        name: "45th Street",
        lines: [LrtLine.BlueLine],
      },
      {
        name: "Westbrook",
        lines: [LrtLine.BlueLine],
      },
      {
        name: "Shaganappi Point",
        lines: [LrtLine.BlueLine],
      },
      {
        name: "Downtown West/Kerby",
        lines: [LrtLine.BlueLine],
      },
      {
        name: "Bridgeland/Memorial",
        lines: [LrtLine.BlueLine],
      },
      {
        name: "Calgary Zoo",
        lines: [LrtLine.BlueLine],
      },
      {
        name: "Barlow / Max Bell",
        lines: [LrtLine.BlueLine],
      },
      {
        name: "Franklin",
        lines: [LrtLine.BlueLine],
      },
      {
        name: "Marlborough",
        lines: [LrtLine.BlueLine],
      },
      {
        name: "Rundle",
        lines: [LrtLine.BlueLine],
      },
      {
        name: "Whitehorn",
        lines: [LrtLine.BlueLine],
      },
      {
        name: "McKnight-Westwinds",
        lines: [LrtLine.BlueLine],
      },
      {
        name: "Martindale",
        lines: [LrtLine.BlueLine],
      },
      {
        name: "Saddletowne",
        lines: [LrtLine.BlueLine],
      },
    ],
    calgaryRivers: () => [
      {
        name: "Bow River",
        lengthInKilometers: 587,
      },
      {
        name: "Elbow River",
        lengthInKilometers: 120,
      },
    ],
  },
};
