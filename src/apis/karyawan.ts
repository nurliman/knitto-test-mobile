import React from "react";
import axios from "axios";

import { FilterDate, IKaryawan } from "../constants/types";
import { formatDate } from "../helpers";

const HOST = "http://192.168.43.125";

export const fetchKaryawan = (filterDate: FilterDate) => {
  let url = HOST + "/api/karyawan";

  url += "?start=" + formatDate(filterDate.start);
  url += "&end=" + formatDate(filterDate.end);
  url += "&offset=" + new Date().getTimezoneOffset();

  return axios.get(url, { timeout: 5000 }).then((response) => {
    response.data.sort((a: IKaryawan, b: IKaryawan) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    return response.data;
  });
};
