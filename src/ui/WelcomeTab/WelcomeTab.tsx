import { Button, Flex, Text } from "@chakra-ui/react";
import { store } from "../../lib/store";

export const WelcomeTab = () => {
  return (
    <Flex
      p={8}
      gap={4}
      flexDir="column"
      border="thick double #DC143C;"
      h="100%"
      align={"center"}
      justify={"center"}
    >
      <Text textAlign="center">
        Здравствуй, дорогой друг! Я божественная высокоинтелектуальная сущность
        из другого плана бытия, установившая с тобой контакт посредством ваших
        низких технологий, таких как React и MobX. Слева ты видишь мой аватар.
        Именно так и выглядят божественные высокоинтелектуальные сущности. Но
        дело не в этом. Я задам тебе четыре вопроса, и если мне понравятся твои
        ответы, я сохраню тебе жизнь. Приступай же, потенциально внезапно
        смертный.
      </Text>
      <Button onClick={() => store.start()} colorScheme="red">
        Начать
      </Button>
    </Flex>
  );
};
