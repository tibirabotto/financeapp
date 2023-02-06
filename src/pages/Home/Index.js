import React from "react";
import { VStack, Text, FlatList } from "native-base";
import { Header } from "../../components/Header/Index";
import { Balance } from "../../components/Balance/Index";
import { Transations } from "../../components/Transations/Index";
import { Actions } from "../../components/Actions/Index";

const list = [
  {
    id: 1,
    label: "Pizza Pizza",
    value: "18.53",
    date: "01/01/2023",
    type: 0,
  },
  {
    id: 2,
    label: "Salary",
    value: "1500,00",
    date: "17/12/2022",
    type: 1,
  },
  {
    id: 3,
    label: "etransfer",
    value: "1500,00",
    date: "12/08/2022",
    type: 1,
  }
];

export function Home() {
  return (
    <VStack backgroundColor="#fafafa">
      <Header name="Tibira Botto" />

      <Balance credit="15.000,00" debit="-390,00" />
      <Actions/>
      <Text
        fontSize={18}
        fontWeight="bold"
        marginLeft={4}
        marginRight={4}
        marginTop={4}
      >
        Last transations
      </Text>
      <FlatList
        data={list}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <Transations data={item}/>}
        showsVerticalScrollIndicator={false}
        marginRight={4}
        marginLeft={4}
      />
    </VStack>
  );
}
