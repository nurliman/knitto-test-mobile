import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
  GestureResponderEvent,
} from "react-native";
import { Entypo as DelIcon } from "@expo/vector-icons";

import MyInputText from "../MyInputText";
import MyDatePicker from "../MyDatePicker";
import {
  KaryawanEditScreenProps,
  IKaryawan,
  updateKaryawan,
  deleteKaryawan,
} from "../../constants/types";

import { AppContext } from "../../store";
import { editKaryawan, removeKaryawan } from "../../apis/karyawan";

const KaryawanEdit: React.FC<{} & KaryawanEditScreenProps> = ({
  route,
  navigation,
}) => {
  const [form, setForm] = useState<IKaryawan>({
    ...route.params.karyawan,
    tanggal_masuk: new Date(route.params.karyawan.tanggal_masuk),
  });
  const { state, dispatch } = useContext(AppContext);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const changeHandler = (value: string | Date, name: keyof typeof form) => {
    setForm({ ...form, [name]: value });
  };

  const { id } = route.params.karyawan;
  const applyEditHandler = (e: GestureResponderEvent) => {
    const oldKaryawan = state.karyawan.data.find(
      (oldData) => oldData.id === id
    );
    if (oldKaryawan === form) return;
    let status: number;
    setUpdateLoading(true);
    editKaryawan(form)
      .then((response) => {
        if (response.status === 200) {
          status = response.status;
          dispatch(updateKaryawan(form));
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setUpdateLoading(false);
        status === 200 && navigation.goBack();
      });
  };

  const deleteHandler = (e: GestureResponderEvent) => {
    let status: number;
    setDeleteLoading(true);
    removeKaryawan(form)
      .then((response) => {
        if (response.status === 204) {
          status = response.status;
          dispatch(deleteKaryawan(form));
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setDeleteLoading(false);
        status === 204 && navigation.goBack();
      });
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
          onChangeDate={(date) => changeHandler(date, "tanggal_masuk")}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={{
            ...styles.applyButtonContainer,
            backgroundColor: updateLoading
              ? "#636e72"
              : styles.applyButtonContainer.backgroundColor,
          }}
          activeOpacity={0.7}
          onPress={applyEditHandler}
          disabled={deleteLoading || updateLoading}
        >
          <View>
            {updateLoading ? (
              <ActivityIndicator color="white" size="large" />
            ) : (
              <Text style={styles.buttonText}>APPLY</Text>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.delButtonContainer,
            backgroundColor: deleteLoading
              ? "#636e72"
              : styles.delButtonContainer.backgroundColor,
          }}
          activeOpacity={0.7}
          onPress={deleteHandler}
          disabled={deleteLoading || updateLoading}
        >
          {deleteLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <DelIcon name="trash" size={22} color="#fff" />
          )}
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

  buttonsContainer: {
    flexDirection: "row",
    height: 52,
    borderTopWidth: 2,
    borderTopColor: "#dfe6e9",
  },
  applyButtonContainer: {
    flex: 4.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00b894",
  },
  delButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff7675",
    borderLeftWidth: 2,
    borderLeftColor: "#dfe6e9",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Quicksand-Bold",
    fontSize: 20,
  },
});
