import React from "react";
import { StatusBar } from "react-native";
import { Button, HStack, Icon, Text, VStack } from "native-base";
import { Feather } from "@expo/vector-icons";
import {MotiView, MotiText} from 'moti'
const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight - 16
  : 16;

export function Header({ name }) {
  function teste() {
    console.log("sasasas");
  }
  return (
    <MotiView
      from={{translateY: -150, opacity: 0}}
      animate={{translateY: 0, opacity: 1}}
      transition={{
        type: "timing",
        duration: 800,
        delay: 300
      }}
    >
      <VStack
      bg="#8000ff"
      pt={statusBarHeight}
      pb={8}
      paddingLeft={4}
      paddingRight={4}
    >
      <HStack alignItems="center" justifyContent="space-between">
        <MotiText
          from={{
            translateX: -300
          }}
          animate={{
            translateX: 0
          }}
          transition={{
            type: "timing",
            duration: 800,
            delay: 800
          }}
        >
          <Text fontSize={18} color="#fff" fontWeight="bold">
            {name}
          </Text>
        </MotiText>
        <Button
          width={44}
          height={44}
          backgroundColor="rgba(255,255,255, 0.5)"
          borderRadius={44}
          onPress={teste}
        >
          <Icon
            as={<Feather name="user" />}
            size={27}
            opacity={0.9}
            color="#FFF"
          />
        </Button>
      </HStack>
    </VStack>
    </MotiView>

  );
}
