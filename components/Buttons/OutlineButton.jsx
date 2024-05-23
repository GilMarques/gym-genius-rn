import React from "react";
import PrimaryButton from "./PrimaryButton";

const OutlineButton = ({ title, containerStyles, textStyles }) => {
  return (
    <PrimaryButton
      title={title}
      containerStyles={`border border-white ${containerStyles}`}
      color={"transparent"}
      textStyles={`text-white ${textStyles}`}
    />
  );
};

export default OutlineButton;
