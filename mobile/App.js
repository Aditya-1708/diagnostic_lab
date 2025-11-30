import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swiper from './components/Swiper';

const packages = [
  {
    title: "GENERAL CHECKUP 1",
    total: "₹1200",
    discount: "₹200",
    price: "₹1000",
    features: [
      "FBS (Fasting Blood Sugar)",
      "PPBS (Post Prandial Blood Sugar)",
      "HbA1C (Glycosylated Haemoglobin)",
      "Lipid Profile Test (LPT)",
      "Urine Routine"
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "MINI GENERAL CHECKUP",
    total: "₹3600",
    discount: "₹1000",
    price: "₹2600",
    features: [
      "FBS",
      "PPBS",
      "HbA1C",
      "CBC (Complete Blood Count)",
      "Blood Urea",
      "Serum Creatinine",
      "Lipid Profile Test",
      "Liver Function Test",
      "Urine Routine",
      "ECG"
    ],
    color: "from-purple-500 to-indigo-500",
    popular: true
  },
  {
    title: "MINI GENERAL CHECKUP - 2",
    total: "₹3600",
    discount: "₹1100",
    price: "₹2500",
    features: [
      "FBS",
      "PPBS",
      "HbA1C",
      "CBC",
      "Renal Function Test (RFT)",
      "Lipid Profile Test",
      "Liver Function Test",
      "Urine Routine",
      "ECG"
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "DIABETIC HEALTH PACKAGE - 2",
    total: "₹4650",
    discount: "₹1300",
    price: "₹3350",
    features: [
      "CBC",
      "RBS (Random Blood Sugar)",
      "FBS",
      "PPBS",
      "Liver Function Test",
      "Renal Function Test",
      "HbA1C",
      "TFT (Thyroid Profile)",
      "Lipid Profile Test",
      "EGFR",
      "Urine Analysis",
      "Urine Microalbuminurea"
    ],
    color: "from-rose-500 to-red-500",
  },
  {
    title: "MASTER HEALTH CHECKUP",
    total: "₹6100",
    discount: "₹1900",
    price: "₹4200",
    features: [
      "CBC",
      "FBS",
      "PPBS",
      "RFT",
      "Lipid Profile Test",
      "Liver Function Test",
      "Urine Analysis",
      "Vitamin B-12",
      "Vitamin D-3",
      "ECG",
      "TFT",
      "HbA1C"
    ],
    color: "from-yellow-500 to-orange-500",
    popular: true
  },
  {
    title: "DIABETIC HEALTH PACKAGE",
    total: "₹6650",
    discount: "₹2000",
    price: "₹4650",
    features: [
      "CBC",
      "RBS",
      "FBS",
      "PPBS",
      "Liver Function Test",
      "Renal Function Test",
      "HbA1C",
      "TFT",
      "Lipid Profile Test",
      "Vitamin B-12",
      "Vitamin D-3",
      "EGFR",
      "Urine Analysis",
      "Urine Microalbuminurea"
    ],
    color: "from-lime-500 to-teal-500",
  },
  {
    title: "TATHAGAT SILVER HEALTH CHECKUP",
    total: "₹8400",
    discount: "₹2800",
    price: "₹5600",
    features: [
      "CBC",
      "ESR",
      "HbA1C",
      "Blood Group & RH Type",
      "FBS",
      "PPBS",
      "RFT",
      "LPT",
      "LFT",
      "Urine Analysis",
      "TFT",
      "Vitamin B-12",
      "Vitamin D-3",
      "ECG",
      "Ultrasound Scan",
      "Chest X-Ray"
    ],
    color: "from-gray-500 to-zinc-500",
  },
  {
    title: "TATHAGAT GOLD HEALTH CHECKUP",
    total: "₹10200",
    discount: "₹3400",
    price: "₹6800",
    features: [
      "CBC",
      "ESR",
      "HbA1C",
      "Blood Group & RH Type",
      "FBS",
      "PPBS",
      "RFT",
      "LPT",
      "LFT",
      "Urine Analysis",
      "TFT",
      "Vitamin B-12",
      "Vitamin D-3",
      "ECG",
      "2D Echo",
      "Ultrasound Scan",
      "Chest X-Ray"
    ],
    color: "from-amber-500 to-yellow-600",
    popular: true
  },
  {
    title: "TATHAGAT DIAMOND HEALTH CHECKUP",
    total: "₹12000",
    discount: "₹4000",
    price: "₹8000",
    features: [
      "CBC",
      "ESR",
      "Blood Group & RH Type",
      "FBS",
      "PPBS",
      "HbA1C",
      "RFT",
      "Lipid Profile Test",
      "Liver Function Test",
      "Urine Analysis",
      "TFT",
      "Vitamin B-12",
      "Vitamin D-3",
      "ECG",
      "2D Echo",
      "TMT",
      "Ultrasound Scan",
      "Chest X-Ray"
    ],
    color: "from-sky-500 to-indigo-500",
    popular: true
  }
];

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <LinearGradient
        colors={['#f8fafc', '#e2e8f0']}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View className="flex-1">
            <View className="mt-4 mb-2 items-center">
              <View className="bg-white/50 px-4 py-2 rounded-full border border-white/60">
                <View className="flex-row items-center">
                    <View className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                    <View>
                        <View className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                            Health Packages
                        </View>
                    </View>
                </View>
              </View>
            </View>
            <Swiper packages={packages} />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </GestureHandlerRootView>
  );
}
