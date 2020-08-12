import { IAppState, KaryawanActionsTypes } from "../../constants/types";
import karyawanReducer from "./karyawan";

const rootReducer = (
  { karyawan }: IAppState,
  action: KaryawanActionsTypes
) => ({
  karyawan: karyawanReducer(karyawan, action),
});

export default rootReducer;
