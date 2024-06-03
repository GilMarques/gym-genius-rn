import React from "react";
import PrimaryButton from "./PrimaryButton";

const OutlineButton = ({ title, containerStyles, textStyles, disabled }) => {
  return (
    <PrimaryButton
      title={title}
      containerStyles={`border border-white ${containerStyles}`}
      color={"transparent"}
      textStyles={`text-white ${textStyles}`}
      disabled={disabled}
    />
  );
};

export default OutlineButton;
