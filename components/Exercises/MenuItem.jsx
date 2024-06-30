import { Icon, Menu } from "react-native-paper";

export const MenuItem = ({
  leadingIcon,
  title,
  onPress,
  color,
  menuActions,
  exerciseId,
}) => {
  return (
    <Menu.Item
      leadingIcon={(props) => (
        <Icon source={leadingIcon} color={color || "white"} size={props.size} />
      )}
      onPress={() => onPress(menuActions, exerciseId)}
      title={title}
      titleStyle={{ color: color || "white" }}
    />
  );
};
