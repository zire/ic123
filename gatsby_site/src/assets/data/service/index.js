import contractIcon from "assets/images/deck/agreement-svgrepo-com.svg";
import chainIcon from "assets/images/deck/link-chain-svgrepo-com.svg";
import gasIcon from "assets/images/deck/gas-svgrepo-com.svg";
import voteIcon from "assets/images/deck/vote-svgrepo-com.svg";

export default {
  services: [
    {
      icon: chainIcon,
      title: "Chain Key Technology",
      body: "Weaves subnets into an infinitely expanding blockchain",
    },
    {
      icon: contractIcon,
      title: "Canister Smart Contract",
      body: "Hosts web applications with smart contract in a canister",
    },
    {
      icon: gasIcon,
      title: "Reverse Gas Model",
      body: "No gas fee on ICP as developer bears the cost",
    },
    {
      icon: voteIcon,
      title: "Network Nervous System",
      body: "Manages the operation and sets direction of ICP via DAO",
    },
  ],
};
