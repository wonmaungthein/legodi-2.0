import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  Foundation
} from "@expo/vector-icons";
import styles from "./IconStyles";
import PropTypes from "prop-types";
import Colors from "../../constants/Colors";
// Color passed from the Constants => yellow
const { primaryColor } = Colors;

const CategoriesIcon = props => {
  const getIconName = name => {
    switch (name) {
      case "Welcome":
        return <Entypo name="hand" size={36} color={primaryColor} />;
      case "Asylum":
        return (
          <FontAwesome name="balance-scale" size={32} color={primaryColor} />
        );
      case "Volunteering":
        return <FontAwesome name="child" size={36} color={primaryColor} />;
      case "Food":
        return (
          <MaterialCommunityIcons name="food" size={43} color={primaryColor} />
        );
      case "Parks":
        return <Foundation name="guide-dog" size={47} color={primaryColor} />;
      case "Sport":
        return (
          <MaterialIcons name="directions-run" size={39} color={primaryColor} />
        );
      case "Shopping":
        return <Ionicons name="md-cart" size={36} color={primaryColor} />;
      case "Transport":
        return <Ionicons name="ios-train" size={40} color={primaryColor} />;
      case "Children":
        return <Ionicons name="md-contacts" size={36} color={primaryColor} />;
      case "Emergency":
        return <FontAwesome name="heartbeat" size={36} color={primaryColor} />;
      default:
        return <Ionicons name="md-help" size={36} color={primaryColor} />;
    }
  };
  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() =>
        props.navigation("Articles", {
          id: props.id,
          categoryTitle: props.title,
          description: props.description,
          categoryId: props.id
        })
      }
    >
      <View style={styles.corner} />
      {getIconName(props.iconName)}

      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

CategoriesIcon.propTypes = {
  navigation: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  categoryTitle: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
};

export default CategoriesIcon;
