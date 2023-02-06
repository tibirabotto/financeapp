import React, { useState } from "react";
import { VStack, Text, HStack, Pressable } from "native-base";
import { MotiView, AnimatePresence, MotiText } from "moti";
export function Transations({ data }) {
  const [showValue, setShowValue] = useState(false);

  return (
    <Pressable
      onPress={() => setShowValue(!showValue)}
      _pressed={{
        opacity: 0.1,
      }}
    >
      <VStack
        flex={1}
        m={2}
        borderBottomWidth={0.5}
        borderBottomColor="#dadada"
      >
        <Text color="#dadada" fontWeight="bold">
          {data.date}
        </Text>
        <HStack justifyContent="space-between" mt={2} mb={4}>
          <Text fontWeight="bold" fontSize={16}>
            {data.label}
          </Text>
          {showValue ? (
            <AnimatePresence exitBeforeEnter>
              <MotiText
                from={{
                  translateX: 100,
                }}
                animate={{
                  translateX: 0,
                }}
                transition={{
                  type: "spring",
                  duration: 500,
                }}
              >
                <Text
                  fontSize={16}
                  color={data.type === 1 ? "#2ecc71" : "#e74c3c"}
                  fontWeight="bold"
                >
                  {data.type === 1 ? `$ ${data.value}` : `$ -${data.value}`}
                </Text>
              </MotiText>
            </AnimatePresence>
          ) : (
            <AnimatePresence exitBeforeEnter>
              <MotiView
                from={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                transition={{
                  type: "timing"
                }}
              >
                <VStack
                  mt={2}
                  width={32}
                  height={4}
                  bgColor="#dadada"
                  borderRadius={8}
                ></VStack>
              </MotiView>
            </AnimatePresence>
          )}
        </HStack>
      </VStack>
    </Pressable>
  );
}
