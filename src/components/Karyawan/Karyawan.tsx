import React, { useLayoutEffect, useContext } from "react";
import { View } from "react-native";

import { AppContext } from "../../store";
import { fetchKaryawan,setKaryawanList } from "../../apis/karyawan";
import KaryawanList from "./KaryawanList";

const Karyawan: React.FC = () => {
  const { state,dispatch } = useContext(AppContext);
  useLayoutEffect(() => {
    fetchKaryawan(state.karyawan.filter)
    .then(data=>{
      dispatch(setKaryawanList(data))
    })
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <KaryawanList karyawanList={state.karyawan.data} />
    </View>
  );
};

export default Karyawan;
