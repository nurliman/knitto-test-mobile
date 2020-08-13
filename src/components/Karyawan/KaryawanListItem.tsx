import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { IKaryawan } from "../../constants/types";


const KaryawanListItem: React.FC<{ karyawan: IKaryawan }> = ({ karyawan }) => {
  return (
    <View style={styles.container} key={karyawan.id}>
    <View>
    <Text style={styles.name}>{karyawan.nama.toUpperCase()}</Text>
    <Text style={styles.jabatan}>{karyawan.jabatan}</Text>
    <Text>{new Date(karyawan.tanggal_masuk).toLocaleDateString()}</Text>
    </View>
    <Ionicons.Button name="ellipsis-vertical" />
    </View>
  );
};

export default KaryawanListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginBottom: 8,
    borderRadius: 5,
    flexDirection:'row',

    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  jabatan: {
    fontSize: 16,
    fontWeight: "500",
  },
});
