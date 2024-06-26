import React from "react";
import PrimaryButton from "./PrimaryButton";

const OutlineButton = ({
  title,
  containerStyles,
  textStyles,
  handlePress,
  disabled,
}) => {
  return (
    <PrimaryButton
      title={title}
      containerStyles={`border border-white ${containerStyles}`}
      color={"transparent"}
      textStyles={`text-white ${textStyles}`}
      disabled={disabled}
      handlePress={handlePress}
    />
  );
};

export default OutlineButton;
