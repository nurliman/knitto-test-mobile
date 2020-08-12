import React from "react";
import { View, Text } from "react-native";

import { IKaryawan } from "../../constants/types";

const KaryawanListItem: React.FC<{ karyawan: IKaryawan }> = ({ karyawan }) => {
  return (
    <View key={karyawan.id}>
      <Text>{karyawan.nama}</Text>
      <Text>{karyawan.jabatan}</Text>
      <Text>{new Date(karyawan.tanggal_masuk).toLocaleDateString()}</Text>
    </View>
  );
};

export default KaryawanListItem;
