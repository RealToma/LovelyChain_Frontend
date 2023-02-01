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
        link: "uncles",
      },
      {
        name: "Forkes",
        link: "forkes",
      },
    ],
  },
  {
    name: "Transactions",
    link: "transactions",
    flagSubLink: true,
    subLink: [
      {
        name: "Validated",
        link: "validated",
      },
      {
        name: "Pending",
        link: "pending",
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
        link: "graphql",
      },
      {
        name: "RPC",
        link: "rpc",
      },
      {
        name: "Lovely PC",
        link: "lovleypc",
      },
    ],
  },
];
