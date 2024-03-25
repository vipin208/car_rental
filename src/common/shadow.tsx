import { Platform } from "react-native";

export const shadow = {
  box: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: 5,
          width: 5,
        },
      },
      android: {
        elevation: 5,
        backgroundColor: 'rgba(0, 0, 0, 1)',
      },
    }),
  },
};
