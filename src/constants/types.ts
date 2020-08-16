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
export const UPDATE_KARYAWAN = "@karyawan/UPDATE_KARYAWAN";
export const DELETE_KARYAWAN = "@karyawan/DELETE_KARYAWAN";

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

interface UpdateKaryawanRequest {
  type: typeof UPDATE_KARYAWAN;
  payload: { karyawan: IKaryawan };
}

interface DeleteKaryawanRequest {
  type: typeof DELETE_KARYAWAN;
  payload: { karyawan: IKaryawan };
}

export type KaryawanActionsTypes =
  | CreateKaryawanRequest
  | SetKaryawanListRequest
  | SetFilterDateRequest
  | UpdateKaryawanRequest
  | DeleteKaryawanRequest;

export function setKaryawanList(
  karyawanList: KaryawanList
): KaryawanActionsTypes {
  return {
    type: SET_KARYAWAN_LIST,
    payload: { karyawanList },
  };
}

export function updateKaryawan(karyawan: IKaryawan): KaryawanActionsTypes {
  return {
    type: UPDATE_KARYAWAN,
    payload: { karyawan },
  };
}

export function deleteKaryawan(karyawan: IKaryawan): KaryawanActionsTypes {
  return {
    type: DELETE_KARYAWAN,
    payload: { karyawan },
  };
}

export interface IAppState {
  karyawan: IKaryawanState;
}

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  KaryawanEdit: {
    karyawan: Omit<IKaryawan, "tanggal_masuk"> & { tanggal_masuk: string };
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

export type KaryawanListScreenRouteProp = RouteProp<
  RootStackParamList,
  "KaryawanList"
>;
export type KaryawanEditScreenRouteProp = RouteProp<
  RootStackParamList,
  "KaryawanEdit"
>;

export type KaryawanListScreenProps = {
  navigation: KaryawanListScreenNavigationProp;
  route: KaryawanListScreenRouteProp;
};

export type KaryawanEditScreenProps = {
  navigation: KaryawanEditScreenNavigationProp;
  route: KaryawanEditScreenRouteProp;
};
