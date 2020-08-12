import React from "react";
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  RefreshControlProps,
} from "react-native";

import {
  IKaryawan,
  KaryawanList as KaryawanListType,
} from "../../constants/types";
import KaryawanListItem from "./KaryawanListItem";

const KaryawanList: React.FC<{
  karyawanList: KaryawanListType;
  refreshControl: React.ReactElement<RefreshControlProps, string>;
}> = ({ karyawanList, children, refreshControl }) => {
  const renderItem: ListRenderItem<IKaryawan> = ({ item }) => (
    <KaryawanListItem karyawan={item} />
  );

  return (
    <FlatList
      refreshControl={refreshControl}
      data={karyawanList}
      renderItem={renderItem}
    />
  );
};

export default KaryawanList;
