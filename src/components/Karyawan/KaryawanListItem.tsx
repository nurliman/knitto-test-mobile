import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo, Foundation as Avatar } from "@expo/vector-icons";

import { IKaryawan, KaryawanListScreenNavigationProp } from "../../constants/types";

const KaryawanListItem: React.FC<{ karyawan: IKaryawan; index: number }> = ({
  karyawan,
  index,
}) => {

  const navigation = useNavigation<KaryawanListScreenNavigationProp>();

  const handlePress = (e: GestureResponderEvent) => {
    navigation.navigate("KaryawanEdit", { karyawan: karyawan });
  };

  return (
    <TouchableOpacity
      style={{ ...styles.container, marginTop: paddingTop(index) }}
      activeOpacity={0.75}
      onPress={handlePress}
    >
      <View style={{ ...styles.avatar, backgroundColor: randomColor() }}>
        <Avatar name="torso-business" size={50} color="white" />
      </View>
      <View>
        <Text style={styles.name}>{karyawan.nama}</Text>
        <Text style={styles.jabatan}>{karyawan.jabatan}</Text>
        <Text style={styles.tanggal_masuk}>
          Joined {new Date(karyawan.tanggal_masuk).toLocaleDateString()}
        </Text>
      </View>
      <Entypo style={styles.chevron} name="chevron-right" size={25} />
    </TouchableOpacity>
  );
};

export default KaryawanListItem;

const AVATAR_COLOURS = [
  "#55efc4",
  "#74b9ff",
  "#ffeaa7",
  "#fab1a0",
  "#ff7675",
  "#fd79a8",
  "#b2bec3",
];

const randomColor = () => {
  return AVATAR_COLOURS[Math.floor(Math.random() * AVATAR_COLOURS.length)];
};

const paddingTop = (index: number) => (index === 0 ? 15 : 0);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 5,
    flexDirection: "row",

    borderWidth: 2,
    borderColor: "#dfe6e9",
  },

  avatar: {
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 14,
  },

  name: {
    fontSize: 18,
    color: "#2d3436",
    fontFamily: "Quicksand-Bold",
  },

  jabatan: {
    fontSize: 15,
    color: "#636e72",
    fontFamily: "Quicksand-Medium",
  },

  tanggal_masuk: {
    color: "#00b894",
    fontFamily: "Quicksand-SemiBold",
  },

  chevron: {
    alignSelf: "center",
    marginLeft: "auto",
    color: "#b2bec3",
  },
});
