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
        link: "reorgs",
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
        link: "transaction_validated",
      },
      {
        name: "Pending",
        link: "transaction_pending",
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
        link: "https://explorer.lovely.finance/graphiql",
      },
      {
        name: "RPC",
        link: "https://explorer.lovely.finance/api-docs",
      },
      {
        name: "Lovely PC",
        link: "https://explorer.lovely.finance/eth-rpc-api-docs",
      },
    ],
  },
];
