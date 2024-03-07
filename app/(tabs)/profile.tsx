import Icon from "@/components/Icon";
import Progress from "@/components/Progress";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, List, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const theme = useTheme();
  const data: string = "s";

  const mockStats = {
    workouts: 48,
    calories: 12494,
    minutes: 590,
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <ScrollView
        contentContainerStyle={style.mainContainer}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            ...style.container,
            ...style.avatarContainer,
            backgroundColor: theme.colors.surface,
          }}
        >
          <Avatar.Image
            size={75}
            source={require("../../assets/images/floppa.jpg")}
          />
          <View style={style.userInfoContainer}>
            <Text
              variant="titleLarge"
              style={{ ...style.userInfo, color: theme.colors.onSurface }}
            >
              Floppa Bingus
            </Text>
            <View
              style={{ ...style.badge, backgroundColor: theme.colors.primary }}
            >
              <Text
                variant="labelSmall"
                style={{ ...style.userInfo, color: theme.colors.onPrimary }}
              >
                Joined 20.01.2024
              </Text>
            </View>
          </View>
          <Link asChild href="/modals/(workout)/step1">
            <TouchableOpacity>
              <Icon library="FontAwesome5" name="cog" color={theme.colors.primary} size={25}/>   
            </TouchableOpacity>          
          </Link>
        </View>
        <View style={style.section}>
          <View style={style.sectionTitleContainer}>
            <Icon
              library="Ionicons"
              name="time"
              color={theme.colors.primary}
              size={24}
            />
            <Text style={style.title} variant="titleMedium">
              SUMMARY
            </Text>
          </View>
          <View
            style={{
              ...style.container,
              ...style.progressContainer,
              backgroundColor: theme.colors.surface,
            }}
          >
            <Progress data={mockStats} theme={theme} />
          </View>
        </View>

        <View style={style.section}>
          <View style={style.sectionTitleContainer}>
            <Icon
              library="MaterialCommunityIcons"
              name="human-male-board-poll"
              color={theme.colors.primary}
              size={24}
            />
            <Text style={style.title} variant="titleMedium">
              USER INFORMATION
            </Text>
          </View>
          <View
            style={{
              ...style.container,
              ...style.informationContainer,
              backgroundColor: theme.colors.surface,
            }}
          >
            <List.Section
              style={{
                backgroundColor: theme.colors.surface,
              }}
            >
              <List.Item
                title={`Age: ${18}`}
                titleStyle={{ ...style.title, color: theme.colors.onSurface }}
                left={() => (
                  <Icon
                    library="MaterialCommunityIcons"
                    name="human-cane"
                    color={theme.colors.primary}
                    size={28}
                  />
                )}
              />
              <List.Item
                title={`Gender: ${"Male"}`}
                titleStyle={{ ...style.title, color: theme.colors.onSurface }}
                left={() => (
                  <Icon
                    library="MaterialCommunityIcons"
                    name="gender-male-female"
                    color={theme.colors.primary}
                    size={28}
                  />
                )}
              />
              <List.Item
                title={`Weight: ${"71kg"}`}
                titleStyle={{ ...style.title, color: theme.colors.onSurface }}
                left={() => (
                  <Icon
                    library="MaterialCommunityIcons"
                    name="weight"
                    color={theme.colors.primary}
                    size={25}
                  />
                )}
              />
              <List.Item
                title={`Height: ${"183cm"}`}
                titleStyle={{ ...style.title, color: theme.colors.onSurface }}
                left={() => (
                  <Icon
                    library="MaterialCommunityIcons"
                    name="human-male-height"
                    color={theme.colors.primary}
                    size={28}
                  />
                )}
              />
            </List.Section>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flex: 1,
    width: "100%",
    height: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },
  section: {
    flexDirection: "column",
    gap: 10,
  },
  sectionTitleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
  },
  mainContainer: {
    flexDirection: "column",
    gap: 15,
    padding: 20,
  },
  container: {
    width: "100%",
    padding: 15,
    elevation: 5,
    borderRadius: 25,
  },
  avatarContainer: {
    flexDirection: "row",
    gap: 10,
  },
  informationContainer: {
    paddingVertical: 0,
  },
  userInfoContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 5,
    padding: 5,
  },
  progressContainer: {
    flexDirection: "column",
    gap: 10,
  },
  userInfo: {
    fontFamily: "ProtestStrike",
  },
  title: {
    fontFamily: "ProtestStrike",
  },
  badge: {
    borderRadius: 10,
    padding: 5,
  },
});
