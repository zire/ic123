import React from 'react';
import { FaLink, FaNetworkWired, FaWarehouse, FaServer, FaFileSignature, FaVoteYea, FaUser, FaCoins, FaSdCard } from "react-icons/fa";

export default {
  awards: [
    {
      icon: <FaLink />,
      count: 31.93,
      body: "Blocks per Second",
    },
    {
      icon: <FaNetworkWired />,
      count: 30,
      body: "Blockchain Subnets",
    },
    {
      icon: <FaWarehouse />,
      count: 53,
      body: "Node Providers",
    },
    {
      icon: <FaServer />,
      count: 408,
      body: "Node Machines",
    },
    {
      icon: <FaFileSignature />,
      count: 28,
      body: "Thousand of Smart Contracts",
    },
    {
      icon: <FaVoteYea />,
      count: 40,
      body: "Thousand of DAO Proposals",
    },
    {
      icon: <FaUser />,
      count: 192,
      body: "Thousand of Internet Identities",
    },
    {
      icon: <FaCoins />,
      count: 476,
      body: "Million of Token Supply",
    },
    {
      icon: <FaSdCard />,
      count: 797.77,
      body: "TB of Memory",
    },
  ],
};
