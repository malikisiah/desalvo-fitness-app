import { Image } from "@/components/ui/image";

import { Card } from "@/components/ui/card";
import React from "react";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
export default function Home() {
  return (
    <Center className="flex-1">
      <Heading className="font-bold text-2xl mb-8">Index</Heading>
      <Card size={"lg"} variant={"filled"} className="">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          className="mb-6 h-[240px] w-full rounded-md aspect-[263/240]"
          alt="image"
        />
        <Heading size="md" className={"mb-1"}>
          Push Ups
        </Heading>
        <Text size="sm" className="text-typography-700 whitespace-normal">
          Lorem ipsum
        </Text>
      </Card>
    </Center>
  );
}
