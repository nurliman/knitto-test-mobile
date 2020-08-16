import {
  IKaryawanState,
  KaryawanActionsTypes,
  CREATE_KARYAWAN,
  SET_KARYAWAN_LIST,
  SET_FILTER_DATE,
  UPDATE_KARYAWAN,
  DELETE_KARYAWAN,
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

    case UPDATE_KARYAWAN:
      return {
        ...state,
        data: updateObjectInArray(state.data, action.payload.karyawan),
      };

    case DELETE_KARYAWAN:
      return {
        ...state,
        data: state.data.filter(
          (item) => item.id !== action.payload.karyawan.id
        ),
      };
    default:
      return state;
  }
}

type objectWithId = { id: number } & any;
function updateObjectInArray(
  array: objectWithId[],
  newItem: objectWithId
): any[] {
  return array.map((item, index) => {
    if (array[index].id !== newItem.id) {
      return item;
    }

    return {
      ...item,
      ...newItem,
    };
  });
}
