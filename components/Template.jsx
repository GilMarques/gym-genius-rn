import { View } from "react-native";

const Template = ({ children }) => {
  return (
    <View
      className="mb-2 rounded-md bg-background-dark px-4 py-4"
      // style={{ zIndex: index }}
    >
      {children}
    </View>
  );
};

export default Template;
