import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@/components/ui/slider";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
export default function Home() {
  const [value, setValue] = React.useState(30);
  return (
    <Center className="flex-1">
      <Heading className="font-bold text-2xl">Expo V3</Heading>
      <Divider className="my-[30px] w-[80%]" />
      <Text className="p-4">Hello world</Text>
      <Slider
        size={"lg"}
        orientation={"horizontal"}
        isDisabled={false}
        value={value}
        onChange={(value: number) => {
          setValue(value);
        }}
        className="w-3/4"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Center>
  );
}
