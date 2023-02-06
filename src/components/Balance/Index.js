import React from "react";
import { VStack, Text, HStack } from "native-base";
import { MotiView} from "moti";
export function Balance({ credit, debit }) {
  return (
    <MotiView
      from={{
        rotateX: '-100deg',
        opacity: 0
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1
      }}
      transition={{
        type: "timing",
        delay: 300,
        duration: 900
      }}
    >
      <VStack justifyContent="space-between">
        <HStack
          background="#fff"
          justifyContent="space-between"
          paddingTop={22}
          paddingBottom={22}
          paddingLeft={2}
          paddingRight={2}
          mt={-4}
          mr={14}
          ml={14}
          borderRadius={4}
          zIndex={99}
        >
          <VStack>
            <Text fontSize={20} color="#dadada">
              Credit
            </Text>
            <HStack>
              <Text color="#dadada" mr={2} fontSize={22}>
                $
              </Text>
              <Text fontSize={22} color="#2ecc71">
                {credit}
              </Text>
            </HStack>
          </VStack>
          <VStack>
            <Text fontSize={20} color="#dadada">
              Debit
            </Text>
            <HStack>
              <Text color="#dadada" mr={2} fontSize={22}>
                $
              </Text>
              <Text fontSize={22} color="#e74c3c">
                {debit}
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </MotiView>
  );
}
