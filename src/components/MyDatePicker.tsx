import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Platform,
  TextInputProps,
  StyleSheet,
} from "react-native";
import DateTimePicker, {
  Event as DatePickEvent,
} from "@react-native-community/datetimepicker";

import MyInputText from "./MyInputText";

const MyDatePicker: React.FC<
  Omit<Omit<TextInputProps, "initialValue">, "value"> & {
    label: string;
    value?: Date;
    initialValue?: Date;
    onDateChange?: (date: Date) => void;
  }
> = (props) => {
  const setD8 = (v?: Date | string | number) => setDate(v ? d8(v) : d8);
  const initialValue = props.initialValue || props.value || d8();

  const [show, setShow] = useState(false);
  const [date, setDate] = useState(d8(initialValue));
  const [text, setText] = useState(loclStr(initialValue));

  const datePickHandler = (e: DatePickEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setD8(currentDate);
  };

  useEffect(() => {
    setText(loclStr(date));
    props.onDateChange && props.onDateChange(date);
  }, [date]);

  useEffect(() => {
    setD8(props.value || date || d8());
  }, [props.value]);

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.75}
        onPressIn={() => setShow(true)}
      >
        <MyInputText
          {...props}
          editable={false}
          value={text}
          label={props.label}
        />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={datePickHandler}
        />
      )}
    </>
  );
};

export default MyDatePicker;

const d8 = (v?: Date | string | number) => (v ? new Date(v) : new Date());
const loclStr = (date: Date | string) => d8(date).toLocaleDateString();

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
  },
});
