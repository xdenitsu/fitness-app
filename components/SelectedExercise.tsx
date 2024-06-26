// Header.js
import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { IconButton, Text } from "react-native-paper";
import { SelectedExerciseProps } from "@/types/components/SelectedExercise";
import { exerciseImages } from "@/constants/images";

function SelectedExercise({
  name,
  order,
  information,
  imageURL,
  onRemove,
  theme,
}: SelectedExerciseProps) {
  //Getting the preloaded image for the current exercise
  const URL =
    exerciseImages[imageURL.split(".")[0] as keyof typeof exerciseImages];

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.surface }}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={URL} />
      </View>
      <View style={styles.textContainer}>
        <Text variant="titleMedium" style={styles.title}>
          {name}
        </Text>
        {information && (
          <Text variant="titleMedium" style={styles.information}>
            {information}
          </Text>
        )}
      </View>
      <IconButton
        icon="delete"
        iconColor="red"
        onPress={() => onRemove(order)}
      />
    </View>
  );
}

export default SelectedExercise;

// This is where all of the styles for this component reside
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    gap: 10,
    padding: 10,
    elevation: 3,
    borderRadius: 10,
  },
  imageContainer: {
    height: 70,
    width: 70,
    borderWidth: 2,
    borderRadius: 10,
    overflow: "hidden",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontFamily: "ProtestStrike",
  },
  information: {
    fontFamily: "LatoBold",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
