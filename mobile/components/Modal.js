import { LinearGradient } from 'expo-linear-gradient';
import { Calendar, CheckCircle2, X } from 'lucide-react-native';
import { Modal as RNModal, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const Modal = ({ visible, item, onClose }) => {
  if (!item) return null;

  // Reusing the color helper logic or passing it down would be better, but for simplicity duplicating or assuming similar logic.
  // We'll just use a standard header color or try to match.
  // Let's use a clean white modal with colored header.
  
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
    <RNModal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-slate-50">
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false} bounces={false}>
          {/* Header */}
          <LinearGradient
            colors={getColorArray(item.color)}
            className="pt-12 pb-8 px-6 rounded-b-[40px]"
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <TouchableOpacity 
              onPress={onClose}
              className="absolute top-12 right-6 bg-black/10 p-2 rounded-full"
            >
              <X size={24} color="white" />
            </TouchableOpacity>

            <Text className="text-white/80 font-medium tracking-wider uppercase mb-2 mt-4">
              Selected Package
            </Text>
            <Text className="text-white text-3xl font-bold mb-4 leading-tight">
              {item.title}
            </Text>
            
            <View className="flex-row items-baseline">
              <Text className="text-white text-5xl font-extrabold mr-3">
                {item.price}
              </Text>
              <Text className="text-white/60 text-xl line-through">
                {item.total}
              </Text>
            </View>
            <View className="bg-white/20 self-start px-3 py-1 rounded-lg mt-2">
                <Text className="text-white font-medium">You save {item.discount}</Text>
            </View>
          </LinearGradient>

          {/* Content */}
          <View className="px-6 py-8">
            <Text className="text-slate-900 text-xl font-bold mb-6">
              Package Features
            </Text>

            <View className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-8">
                {item.features.map((feature, idx) => (
                <View key={idx} className="flex-row items-start mb-4 last:mb-0">
                    <CheckCircle2 size={20} color="#10b981" style={{ marginTop: 2, marginRight: 12 }} />
                    <Text className="text-slate-600 text-base flex-1 leading-6">
                    {feature}
                    </Text>
                </View>
                ))}
            </View>

            <Text className="text-slate-900 text-xl font-bold mb-4">
              Important Information
            </Text>
            <View className="bg-blue-50 rounded-xl p-4 mb-24">
                <Text className="text-blue-800 leading-6">
                    • 10-12 hours fasting is required.
                    {'\n'}• Water is allowed during fasting.
                    {'\n'}• Reports will be emailed within 24 hours.
                </Text>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Action Bar */}
        <View className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-slate-100 shadow-2xl">
            <SafeAreaView>
                <TouchableOpacity className="bg-slate-900 h-14 rounded-xl flex-row items-center justify-center shadow-lg active:scale-95 transition-transform">
                    <Calendar size={20} color="white" style={{ marginRight: 8 }} />
                    <Text className="text-white font-bold text-lg">
                        Book Now
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
