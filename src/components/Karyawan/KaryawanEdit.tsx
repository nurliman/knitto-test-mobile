import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Entypo as DelIcon } from "@expo/vector-icons";

import MyInputText from "../MyInputText";
import MyDatePicker from "../MyDatePicker";
import { KaryawanEditScreenProps, IKaryawan } from "../../constants/types";

const KaryawanEdit: React.FC<{} & KaryawanEditScreenProps> = ({ route }) => {
  const [form, setForm] = useState<IKaryawan>(route.params.karyawan);

  const changeHandler = (txt: string, name: keyof typeof form) => {
    setForm({ ...form, [name]: txt });
  };

  return (
    <>
      <View style={styles.container}>
        <MyInputText
          style={styles.item}
          label="Nama"
          placeholder="Tulis Nama"
          textContentType="name"
          value={form.nama}
          onChangeText={(txt) => changeHandler(txt, "nama")}
        />
        <MyInputText
          style={styles.item}
          label="Jabatan"
          placeholder="Tulis Jabatan"
          textContentType="jobTitle"
          value={form.jabatan}
          onChangeText={(txt) => changeHandler(txt, "jabatan")}
        />
        <MyDatePicker
          style={styles.item}
          label={`Tanggal\nMasuk`}
          value={form.tanggal_masuk}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.applyButtonContainer}
          activeOpacity={0.7}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>APPLY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.delButtonContainer}
          activeOpacity={0.7}
          onPress={() => {}}
        >
        <DelIcon name="trash" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default KaryawanEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#ecf0f1",
  },

  item: {
    marginBottom: 12,
  },


  buttonsContainer:{
    flexDirection:'row',
    height: 52,
    borderTopWidth:2,
    borderTopColor:'#dfe6e9'
  },
  applyButtonContainer: {
    flex:4.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00b894",
  },
  delButtonContainer: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff7675",
    borderLeftWidth:2,
    borderLeftColor:'#dfe6e9'
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Quicksand-Bold",
    fontSize: 20,
  },
});
