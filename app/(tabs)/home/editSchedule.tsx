import UnsavedChangesDialog from "@/components/UnsavedChangesDialog";
import defaultSchedule from "@/constants/defaultSchedule";
import { ScheduleData } from "@/types/components/Schedule";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Text,
  IconButton,
  Button,
  useTheme,
  List,
  ToggleButton,
  Switch,
  PaperProvider,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

function EditScheduleScreen() {
  const [schedule, setSchedule] = useState<ScheduleData>(defaultSchedule);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const showDialogue = () => {
    setIsDialogVisible(true);
  };

  const handleStay = () => {
    setIsDialogVisible(false);
  };

  const handleDismiss = () => {
    router.back();
  };

  const onToggleSwitch = (day: number) => {
    const dayMap: { [key: number]: keyof typeof schedule } = {
      1: "monday",
      2: "tuesday",
      3: "wednesday",
      4: "thursday",
      5: "friday",
      6: "saturday",
      7: "sunday",
    };

    const dayKey = dayMap[day];
    if (dayKey) {
      setSchedule((prev) => ({
        ...prev,
        [dayKey]: {
          rest: !prev[dayKey].rest,
        },
      }));
    }
  };

  const theme = useTheme();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={{ ...styles.header, backgroundColor: theme.colors.surface }}>
        <View style={styles.leftContainer}>
          <IconButton
            icon="arrow-left"
            size={30}
            iconColor={theme.colors.onSurface}
            rippleColor={"rgba(125,125,125,0.2)"}
            onPress={showDialogue}
          />
        </View>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Schedule
        </Text>
        <View style={styles.rightContainer}>
          <Button
            icon="content-save"
            mode="text"
            onPress={() => console.log("Pressed")}
            labelStyle={styles.buttonTitle}
          >
            SAVE
          </Button>
        </View>
      </View>
      <PaperProvider>
        <UnsavedChangesDialog
          visible={isDialogVisible}
          onStay={handleStay}
          onDismiss={handleDismiss}
          theme={theme}
        />
        <List.Section>
          <View
            style={{
              ...styles.listTitleContainer,
              borderBottomColor: theme.colors.onBackground,
            }}
          >
            <List.Subheader
              style={{ ...styles.listTitle, color: theme.colors.onBackground }}
            >
              Days of the week
            </List.Subheader>
            <List.Subheader
              style={{ ...styles.listTitle, color: theme.colors.onBackground }}
            >
              Workout Day
            </List.Subheader>
          </View>

          <ScrollView>
            <List.Item
              style={{
                ...styles.listItem,
                borderBottomColor: theme.colors.outline,
              }}
              titleStyle={styles.listItemTitle}
              title="Monday"
              right={() => (
                <Switch
                  style={{}}
                  value={schedule.monday.rest}
                  onValueChange={() => onToggleSwitch(1)}
                />
              )}
            />
            <List.Item
              style={{
                ...styles.listItem,
                borderBottomColor: theme.colors.outline,
              }}
              titleStyle={styles.listItemTitle}
              title="Tuesday"
              right={() => (
                <Switch
                  style={{}}
                  value={schedule.tuesday.rest}
                  onValueChange={() => onToggleSwitch(2)}
                />
              )}
            />
            <List.Item
              style={{
                ...styles.listItem,
                borderBottomColor: theme.colors.outline,
              }}
              titleStyle={styles.listItemTitle}
              title="Wednesday"
              right={() => (
                <Switch
                  style={{}}
                  value={schedule.wednesday.rest}
                  onValueChange={() => onToggleSwitch(3)}
                />
              )}
            />
            <List.Item
              style={{
                ...styles.listItem,
                borderBottomColor: theme.colors.outline,
              }}
              titleStyle={styles.listItemTitle}
              title="Thursday"
              right={() => (
                <Switch
                  style={{}}
                  value={schedule.thursday.rest}
                  onValueChange={() => onToggleSwitch(4)}
                />
              )}
            />
            <List.Item
              style={{
                ...styles.listItem,
                borderBottomColor: theme.colors.outline,
              }}
              titleStyle={styles.listItemTitle}
              title="Friday"
              right={() => (
                <Switch
                  style={{}}
                  value={schedule.friday.rest}
                  onValueChange={() => onToggleSwitch(5)}
                />
              )}
            />
            <List.Item
              style={{
                ...styles.listItem,
                borderBottomColor: theme.colors.outline,
              }}
              titleStyle={styles.listItemTitle}
              title="Saturday"
              right={() => (
                <Switch
                  style={{}}
                  value={schedule.saturday.rest}
                  onValueChange={() => onToggleSwitch(6)}
                />
              )}
            />
            <List.Item
              style={{
                ...styles.listItem,
                borderBottomColor: theme.colors.outline,
              }}
              titleStyle={styles.listItemTitle}
              title="Sunday"
              right={() => (
                <Switch
                  style={{}}
                  value={schedule.sunday.rest}
                  onValueChange={() => onToggleSwitch(7)}
                />
              )}
            />
          </ScrollView>
        </List.Section>
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 2,
  },
  headerTitle: {
    fontFamily: "ProtestStrike",
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttonTitle: {
    fontFamily: "ProtestStrike",
    flexDirection: "column",
    justifyContent: "center",
    padding: 0,
    alignItems: "center",
    fontSize: 18,
  },
  listTitleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 3,
  },
  listTitle: {
    fontFamily: "ProtestStrike",
    fontSize: 16,
  },
  listItem: {
    width: "100%",
    borderBottomWidth: 2,
    paddingHorizontal: 15,
  },
  listItemTitle: {
    fontFamily: "ProtestStrike",
    fontSize: 24,
  },
});

export default EditScheduleScreen;
