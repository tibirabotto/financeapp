import React from "react";
import {
  Pressable,
  Text,
  ScrollView,
  Icon,
  HStack,
  Box,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
export function Actions() {
  return (
    <ScrollView
      flexDirection="row"
      showsHorizontalScrollIndicator={false}
      maxHeight={84}
      mb={4}
      mt={4}
      pr={8}
      pl={8}
    >
      <HStack>
        <Pressable
          _pressed={{
            opacity: 0.1,
          }}
        >
          <Box bgColor="#ecf0f1" height={80} width={65} borderRadius={30}>
            <Icon
              as={<AntDesign name="addfolder" />}
              size={26}
              color="#000"
              bgColor="#ecf0f1"
            />
            <Text>Entradas </Text>
          </Box>
        </Pressable>
        <Pressable
          _pressed={{
            opacity: 0.1,
          }}
        >
          <Box
            bgColor="#ecf0f1"
            height={80}
            width={65}
            borderRadius={30}
            ml={4}
          >
            <Icon
              as={<AntDesign name="tagso" />}
              size={26}
              color="#000"
              bgColor="#ecf0f1"
            />
            <Text>Shop </Text>
          </Box>
        </Pressable>
        <Pressable
          _pressed={{
            opacity: 0.1,
          }}
        >
          <Box
            bgColor="#ecf0f1"
            height={80}
            width={65}
            borderRadius={30}
            ml={4}
          >
            <Icon
              as={<AntDesign name="creditcard" />}
              size={26}
              color="#000"
              bgColor="#ecf0f1"
            />
            <Text>Wallet </Text>
          </Box>
        </Pressable>
        <Pressable
          _pressed={{
            opacity: 0.1,
          }}
        >
          <Box
            bgColor="#ecf0f1"
            height={80}
            width={65}
            borderRadius={30}
            ml={4}
          >
            <Icon
              as={<AntDesign name="barcode" />}
              size={26}
              color="#000"
              bgColor="#ecf0f1"
            />
            <Text>Invoice </Text>
          </Box>
        </Pressable>
        <Pressable
          _pressed={{
            opacity: 0.1,
          }}
        >
          <Box
            bgColor="#ecf0f1"
            height={80}
            width={65}
            borderRadius={30}
            ml={4}
          >
            <Icon
              as={<AntDesign name="setting" />}
              size={26}
              color="#000"
              bgColor="#ecf0f1"
            />
            <Text>Account </Text>
          </Box>
        </Pressable>
      </HStack>
    </ScrollView>
  );
}
