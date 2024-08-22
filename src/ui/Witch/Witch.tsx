import { Image } from "@chakra-ui/react";
import witch from "../../assets/witch.png";

export const Witch = () => {
  return (
    <Image boxSize="100%" objectFit="cover" src={witch} alt="Witch" />
  );
};
