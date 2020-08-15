import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";

const MyInputText: React.FC<TextInputProps & { label: string }> = (props) => {
  return (
      <View style={StyleSheet.flatten([styles.container,props.style])}>
        <View style={styles.borderBottom} />
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
          {...props}
          placeholderTextColor="#b2bec3"
          style={{...styles.input}}
        />
      </View>
  );
};

export default MyInputText;

const rem = 10;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent:'center',
    position: "relative",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderRadius: 3,
    paddingTop: 1.4 * rem,
    paddingHorizontal: 2 * rem,
    padding: 1 * rem,
    backgroundColor: "#fff",
    elevation: 1,
  },

  label: {
    fontFamily: "Quicksand-Regular",
    color: "#636e72",
    marginRight: 10,
    lineHeight: 19,
  },

  borderBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    height: 2,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    backgroundColor: "#00cec9",
  },
  input: {
    flex: 1,
    color: "#636e72",
    fontSize: 1.8 * rem,
    lineHeight: 2.4 * rem,
    textAlignVertical: "center",
    fontFamily: "Quicksand-Medium",
  },
});
