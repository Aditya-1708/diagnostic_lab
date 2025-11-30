import { LinearGradient } from 'expo-linear-gradient';
import { Check } from 'lucide-react-native';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;
const CARD_HEIGHT = 500;

const Card = ({ item, index, scrollX, onPress }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.9, 1, 0.9],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.7, 1, 0.7],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  // Helper to extract colors from string "from-blue-500 to-cyan-500"
  // This is a simplified mapping for demo purposes since we can't easily parse tailwind classes to hex in RN without full config access at runtime usually.
  // However, since we are using NativeWind, we might rely on it, but LinearGradient needs 'colors' array of strings.
  // We will map the color names to hex codes manually for this demo to ensure it works with expo-linear-gradient.
  const getColorArray = (colorString) => {
    const colorMap = {
      'blue-500': '#3b82f6', 'cyan-500': '#06b6d4',
      'purple-500': '#a855f7', 'indigo-500': '#6366f1',
      'green-500': '#22c55e', 'emerald-500': '#10b981',
      'rose-500': '#f43f5e', 'red-500': '#ef4444',
      'yellow-500': '#eab308', 'orange-500': '#f97316',
      'lime-500': '#84cc16', 'teal-500': '#14b8a6',
      'gray-500': '#6b7280', 'zinc-500': '#71717a',
      'amber-500': '#f59e0b', 'yellow-600': '#ca8a04',
      'sky-500': '#0ea5e9',
    };
    
    const parts = colorString.split(' ');
    const fromColor = parts.find(p => p.startsWith('from-'))?.replace('from-', '');
    const toColor = parts.find(p => p.startsWith('to-'))?.replace('to-', '');

    return [colorMap[fromColor] || '#3b82f6', colorMap[toColor] || '#06b6d4'];
  };

  return (
    <Animated.View
      style={[
        { width: width, alignItems: 'center', justifyContent: 'center' },
        animatedStyle,
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => onPress(item)}
        className="w-[85%] h-[500px] rounded-3xl overflow-hidden shadow-xl elevation-10 bg-white"
      >
        <LinearGradient
          colors={getColorArray(item.color)}
          style={{ flex: 1, padding: 24 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {item.popular && (
            <View className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full border border-white/30">
              <Text className="text-white text-xs font-bold uppercase tracking-wider">
                Most Popular
              </Text>
            </View>
          )}

          <View className="mt-4">
            <Text className="text-white/80 text-sm font-medium tracking-widest uppercase mb-2">
              Health Package
            </Text>
            <Text className="text-white text-2xl font-bold leading-tight mb-4">
              {item.title}
            </Text>
          </View>

          <View className="flex-row items-baseline mb-6">
            <Text className="text-white text-4xl font-extrabold mr-2">
              {item.price}
            </Text>
            <Text className="text-white/60 text-lg line-through decoration-white/60">
              {item.total}
            </Text>
          </View>
          
          <View className="bg-white/10 rounded-xl p-2 mb-6 self-start">
             <Text className="text-white font-semibold">
               Save {item.discount}
             </Text>
          </View>

          <View className="flex-1">
            <Text className="text-white/90 font-semibold mb-3 uppercase text-xs tracking-wider">
              Includes {item.features.length} Tests
            </Text>
            {item.features.slice(0, 5).map((feature, idx) => (
              <View key={idx} className="flex-row items-center mb-2">
                <View className="bg-white/20 rounded-full p-1 mr-3">
                  <Check size={12} color="white" strokeWidth={3} />
                </View>
                <Text className="text-white text-sm font-medium" numberOfLines={1}>
                  {feature}
                </Text>
              </View>
            ))}
            {item.features.length > 5 && (
              <Text className="text-white/60 text-sm mt-1 ml-8">
                + {item.features.length - 5} more...
              </Text>
            )}
          </View>

          <View className="mt-auto">
            <View className="bg-white h-12 rounded-full items-center justifyContent-center">
              <Text className="text-slate-900 font-bold text-base">
                View Details
              </Text>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Card;
