import { Button, Text } from "@chakra-ui/react";
import { FC } from "react";
import { store } from "../../lib/store";

interface Props {
  message: string;
  cb: () => void;
  height: number;
}
//У ответа расчёт только на одну-две строки
export const GameTabAnswer: FC<Props> = ({ message, cb, height }) => {
  return (
    <Button
      onClick={() => store.nextQuestion()}
      textAlign="start"
      variant="outline"
      h={`${height}%`}
      maxW="100%"
      minW="100%"
    >
      <Text
        fontSize="65%"
        wordBreak="break-word"
        whiteSpace="wrap"
        maxW="100%"
        minW="100%"
        textAlign={"start"}
      >
        {message}
      </Text>
    </Button>
  );
};
