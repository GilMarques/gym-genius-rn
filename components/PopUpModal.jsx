import React from "react";
import { KeyboardAvoidingView, Modal, View } from "react-native";

const PopUpModal = ({ visible, withInput, children, ...rest }) => {
  const content = withInput ? (
    <KeyboardAvoidingView
      className="flex-1 items-center justify-center px-3"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {children}
    </KeyboardAvoidingView>
  ) : (
    <View
      className="flex-1 items-center justify-center px-3"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    >
      <View
        className="w-[90%] rounded-xl border border-neutral-800 bg-[#141414] p-4"
        style={{ elevation: 2 }}
      >
        {children}
      </View>
    </View>
  );

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}
      {...rest}
    >
      {content}
    </Modal>
  );
};

export default PopUpModal;
