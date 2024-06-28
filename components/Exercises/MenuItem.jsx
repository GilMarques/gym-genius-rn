import { Divider, Icon, Menu } from "react-native-paper";

export const MenuItem = ({ leadingIcon, title, onPress, color }) => {
  return (
    <>
      <Menu.Item
        leadingIcon={(props) => (
          <Icon
            source={leadingIcon}
            color={color || "white"}
            size={props.size}
          />
        )}
        onPress={onPress}
        title={title}
        titleStyle={{ color: color || "white" }}
      />
      <Divider style={{ width: "90%", alignSelf: "center" }} />
    </>
  );
};
