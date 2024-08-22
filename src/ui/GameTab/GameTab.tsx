import { Box, Button, Flex, Text, Grid, VStack } from "@chakra-ui/react";
import { GameTabAnswer } from "../GameTabAnswer/GameTabAnswer";
import { observer } from "mobx-react-lite";
import { store } from "../../lib/store";
import { RefObject, useLayoutEffect, useRef, useState } from "react";
import jsonData from "../../lib/data.json";

export const GameTab = observer(() => {
  let questionRef = useRef() as RefObject<HTMLDivElement> | null;

  let [questionSize, setquestionSize] = useState<number>(20);
  //Переписать в отдельный хук, мб
  useLayoutEffect(() => {
    if (questionRef?.current) {
      let step = 0.3;
      let minfs = 8;
      let scw = questionRef.current.scrollHeight;
      let w = questionRef.current.offsetHeight;
      if (scw > w && questionSize > minfs) {
        setquestionSize((prev) => prev - step);
      }
    }
  });

  return (
    <Grid h="100%" templateRows="calc(75% - 6px) 25%" gap={1}>
      <Box
        p={2}
        fontSize={questionSize}
        ref={questionRef}
        border="thick double #DC143C;"
      >
        {store.currentQuestion.map((str, i) => (
          <Text key={i} wordBreak="break-word" whiteSpace="wrap">
            {str}
          </Text>
        ))}
      </Box>
      <VStack align={"flex-start"} border="thick double #DC143C;" gap={0}>
        {[...store.currentAnswers].map((item, i) => (
          <GameTabAnswer
            key={`${item}${i}`}
            height={Math.floor((1 / store.currentAnswers.length) * 100)}
            message={item}
            cb={() => {}}
          />
        ))}
      </VStack>
    </Grid>
  );
});
