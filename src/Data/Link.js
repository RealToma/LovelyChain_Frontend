export const dataLink = [
  {
    name: "Dashboard",
    link: "dashboard",
    flagSubLink: false,
    subLink: [],
  },
  {
    name: "Blocks",
    link: "blocks",
    flagSubLink: true,
    subLink: [
      {
        name: "Blocks",
        link: "blocks",
      },
      {
        name: "Uncles",
        link: "blocks",
      },
      {
        name: "Forkes",
        link: "blocks",
      },
    ],
  },
  {
    name: "Accounts",
    link: "accounts",
    flagSubLink: false,
    subLink: [],
  },
  {
    name: "Transactions",
    link: "transactions",
    flagSubLink: true,
    subLink: [
      {
        name: "Validated",
        link: "validator_details",
      },
      {
        name: "Pending",
        link: "",
      },
    ],
  },
  {
    name: "Tokens",
    link: "tokens",
    flagSubLink: false,
  },
  {
    name: "APIs",
    link: "apis",
    flagSubLink: true,
    subLink: [
      {
        name: "GraphQL",
        link: "",
      },
      {
        name: "RPC",
        link: "",
      },
      {
        name: "Lovely PC",
        link: "",
      },
    ],
  },
];
