import { useStyles, createStyleSheet } from "styles";
import { View, Text } from "react-native";
import { Image } from "react-expo/image";
import BiPlayFill from "assets/svg/biplayfill.svg";
import ellipse1 from "assets/img/ellipse1.png";
import rectangle1 from "assets/img/rectangle1.png";

export interface ExerciseTitleProps {
  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export function ExerciseTitle(props: ExerciseTitleProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID ?? "109:393"}>
      <View style={styles.frame6} testID="109:515">
        <Text style={styles.exercise1} testID="109:397">
          {`Exercise 1`}
        </Text>
        <Text style={styles.$0230Minutes} testID="109:398">
          {`02.30 Minutes`}
        </Text>
      </View>
      <View style={styles.playBtn} testID="109:399">
        <Image url={ellipse1} width={50} height={50} />
        <BiPlayFill />
      </View>
      <View style={styles.cardExercise} testID="109:394">
        <View style={styles.rectangle1} testID="109:395" />
        <Image url={rectangle1} width={68} height={68} />
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet({
  root: {
    width: 374,
    height: 71,
    flexShrink: 0,
  },
  exercise1: {
    color: "rgba(69, 69, 69, 1)",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  $0230Minutes: {
    color: "rgba(196, 196, 196, 1)",
    fontFamily: "Inter",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "500",
  },
  frame6: {
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 5,
    columnGap: 5,
  },
  playBtn: {
    width: 50,
    height: 50,
    flexShrink: 0,
  },
  rectangle1: {
    width: 68,
    height: 68,
    flexShrink: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "rgba(251, 227, 212, 1)",
  },
  cardExercise: {
    width: 68,
    height: 68,
    flexShrink: 0,
  },
});
