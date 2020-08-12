import {
  IKaryawanState,
  KaryawanActionsTypes,
  CREATE_KARYAWAN,
  SET_KARYAWAN_LIST,
  SET_FILTER_DATE,
} from "../../constants/types";

export default function karyawanReducer(
  state: IKaryawanState,
  action: KaryawanActionsTypes
): IKaryawanState {
  switch (action.type) {
    case CREATE_KARYAWAN:
      return {
        ...state,
        data: [...state.data, action.payload.karyawan],
      };

    case SET_KARYAWAN_LIST:
      return {
        ...state,
        data: action.payload.karyawanList,
      };

    case SET_FILTER_DATE:
      return {
        ...state,
        filter: action.payload.filterDate,
      };

    default:
      return state;
  }
}
