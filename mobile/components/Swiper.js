import { useState } from 'react';
import { Dimensions, View } from 'react-native';
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';
import Card from './Card';
import Modal from './Modal';
import Pagination from './Pagination';

const { width } = Dimensions.get('window');

const Swiper = ({ packages }) => {
  const scrollX = useSharedValue(0);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View className="flex-1 justify-center items-center">
      <View style={{ height: 550 }}>
        <Animated.FlatList
          data={packages}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={width}
          decelerationRate="fast"
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          renderItem={({ item, index }) => (
            <Card
              item={item}
              index={index}
              scrollX={scrollX}
              onPress={setSelectedPackage}
            />
          )}
          contentContainerStyle={{ alignItems: 'center' }}
        />
      </View>

      <Pagination data={packages} scrollX={scrollX} />

      <Modal
        visible={!!selectedPackage}
        item={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />
    </View>
  );
};

export default Swiper;
