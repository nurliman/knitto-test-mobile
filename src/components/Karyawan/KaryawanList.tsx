import React from "react";
import { FlatList, ListRenderItem } from "react-native";

import { IKaryawan, KaryawanList as KaryawanListType } from "../../constants/types";
import KaryawanListItem from "./KaryawanListItem";

const KaryawanList: React.FC<{ karyawanList: KaryawanListType }> = ({
  karyawanList,
}) => {
  const renderItem: ListRenderItem<IKaryawan> = ({ item }) => (
    <KaryawanListItem karyawan={item} />
  );

  return <FlatList data={karyawanList} renderItem={renderItem} />;
};

export default KaryawanList;
