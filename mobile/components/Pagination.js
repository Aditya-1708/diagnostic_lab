import { Dimensions, View } from 'react-native';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const Pagination = ({ data, scrollX }) => {
  return (
    <View className="flex-row justify-center items-center mt-4">
      {data.map((_, index) => {
        const animatedDotStyle = useAnimatedStyle(() => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const widthAnim = interpolate(
            scrollX.value,
            inputRange,
            [8, 24, 8],
            Extrapolate.CLAMP
          );

          const opacity = interpolate(
            scrollX.value,
            inputRange,
            [0.4, 1, 0.4],
            Extrapolate.CLAMP
          );

          return {
            width: widthAnim,
            opacity,
          };
        });

        return (
          <Animated.View
            key={index}
            style={[
              { height: 8, borderRadius: 4, marginHorizontal: 4, backgroundColor: '#0f172a' },
              animatedDotStyle,
            ]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;
