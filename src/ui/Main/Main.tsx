import { useEffect } from "react";
import "../../App";
import { observer } from "mobx-react-lite";
import { store } from "../../lib/store";
import { Grid, GridItem } from "@chakra-ui/react";
import { Witch } from "../Witch/Witch";
import { WelcomeTab } from "../WelcomeTab/WelcomeTab";
import { GameTab } from "../GameTab/GameTab";
import jsonData from "../../lib/data.json";

export const Main = observer(() => {
  useEffect(() => {
    console.log(store.gameIsStarted);
    store.setQuestionsObj(jsonData);
  }, []);
  return (
    <>
      <Grid templateColumns="25vw 75vw" h="100vh" gap={0}>
        <GridItem colSpan={1} rowSpan={1} bg="#F0F8FF">
          <Witch />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1} bg="#F0F8FF">
          {!store.gameIsStarted ? <WelcomeTab /> : <GameTab />}{" "}
        </GridItem>
      </Grid>
    </>
  );
});
