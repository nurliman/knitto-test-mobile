import React, {
  useLayoutEffect,
  useContext,
  useState,
  useCallback,
} from "react";
import { View, RefreshControl } from "react-native";

import { AppContext } from "../../store";
import { setKaryawanList } from "../../constants/types";
import { fetchKaryawan } from "../../apis/karyawan";
import KaryawanList from "./KaryawanList";

const Karyawan: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const handleFetchKaryawan = () => {
    setLoading(true);
    fetchKaryawan(state.karyawan.filter)
      .then((data) => dispatch(setKaryawanList(data)))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const onRefresh = useCallback(handleFetchKaryawan, []);
  const refreshControl = (
    <RefreshControl refreshing={loading} onRefresh={onRefresh} />
  );
  
  useLayoutEffect(handleFetchKaryawan, []);

  return (
    <View style={{ flex: 1,backgroundColor:'#fff'}}>
      <KaryawanList
        karyawanList={state.karyawan.data}
        refreshControl={refreshControl}
      />
    </View>
  );
};

export default Karyawan;
