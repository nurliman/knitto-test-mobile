export interface IKaryawan {
  id: number;
  nama: string;
  jabatan: string;
  tanggal_masuk: Date;
}

export type KaryawanList = IKaryawan[];

export interface IKaryawanState {
  data: KaryawanList;
  filter: FilterDate;
}

export type FilterDate = {
  start: Date;
  end: Date;
};

export const CREATE_KARYAWAN = "@karyawan/CREATE_KARYAWAN";
export const SET_KARYAWAN_LIST = "@karyawan/SET_KARYAWAN_LIST ";
export const SET_FILTER_DATE = "@karyawan/SET_FILTER_DATE";

interface SetFilterDateRequest {
  type: typeof SET_FILTER_DATE;
  payload: { filterDate: FilterDate };
}

interface CreateKaryawanRequest {
  type: typeof CREATE_KARYAWAN;
  payload: { karyawan: IKaryawan };
}

interface SetKaryawanListRequest {
  type: typeof SET_KARYAWAN_LIST;
  payload: { karyawanList: KaryawanList };
}

export type KaryawanActionsTypes =
  | CreateKaryawanRequest
  | SetKaryawanListRequest
  | SetFilterDateRequest;

export function setKaryawanList(
  karyawanList: KaryawanList
): KaryawanActionsTypes {
  return {
    type: SET_KARYAWAN_LIST,
    payload: { karyawanList },
  };
}

export interface IAppState {
  karyawan: IKaryawanState;
}

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  KaryawanEdit: {
    karyawan: IKaryawan;
  };
  KaryawanList: undefined;
};

export type KaryawanListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "KaryawanList"
>;

export type KaryawanEditScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "KaryawanEdit"
>;

export type KaryawanListScreenRouteProp = RouteProp<RootStackParamList, "KaryawanList">;
export type KaryawanEditScreenRouteProp = RouteProp<RootStackParamList, "KaryawanEdit">;

export type KaryawanListScreenProps = {
  navigation: KaryawanListScreenNavigationProp;
  route: KaryawanListScreenRouteProp;
};

export type KaryawanEditScreenProps = {
  navigation: KaryawanEditScreenNavigationProp;
  route: KaryawanEditScreenRouteProp;
};



