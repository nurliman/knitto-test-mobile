import React, { useContext } from "react";
import axios from "axios";

import {
  FilterDate,
  IKaryawan,
  KaryawanList,
  KaryawanActionsTypes,
  SET_KARYAWAN_LIST,
} from "../constants/types";
import { AppContext } from "../store";
import { formatDate } from "../helpers";

const HOST = "http://localhost";

export function setKaryawanList(karyawanList: KaryawanList): KaryawanActionsTypes {
  return {
    type: SET_KARYAWAN_LIST,
    payload: { karyawanList },
  };
}

export function fetchKaryawan(filterDate: FilterDate, callback?: Function) {
  let url = HOST + "/api/karyawan";

  url += "?start=" + formatDate(filterDate.start);
  url += "&end=" + formatDate(filterDate.end);
  url += "&offset=" + new Date().getTimezoneOffset();

  return axios
    .get(url, { timeout: 5000 })
    .then((response) => {
      response.data.sort((a: IKaryawan, b: IKaryawan) =>
        a.id > b.id ? 1 : b.id > a.id ? -1 : 0
      );
      return response.data;
    })
    .catch((err) => console.error(err))
    .finally(() => (callback ? callback() : null));
}
