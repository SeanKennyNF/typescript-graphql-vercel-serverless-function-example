export const stubTypedefs = `
  enum LRTLine {
    RED_LINE
    BLUE_LINE
  }

  type LRTStation {
    name: String!
    lines: [LRTLine!]!
  }

  type River {
    name: String!
    lengthInKilometers: Int!
  }

  type Query {
    calgaryLRTStations: [LRTStation!]!
    calgaryRivers: [River!]!
  }
`