import { Image, ImageProps, View } from "react-native";
import { FlatList, ScrollView } from "react-native";
import { CircularCarouselListItem } from "./list-item";
import { useSharedValue } from "react-native-reanimated";


type CircularCarouselProps = {
    data: ImageProps['source'][];
}

const CircularCarousel: React.FC<CircularCarouselProps> = ({ data, }) => {

    const contentOffset = useSharedValue(0)

    return (
        <FlatList style={{
            flex: 1, backgroundColor: 'transparent', alignContent: 'center'
        }}
            data={data}
            horizontal
            keyExtractor={(_, index) => index.toString()}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onScroll={(Event) => { contentOffset.value = Event.nativeEvent.contentOffset.x }}
            renderItem={({ item, index }) => {
                return <CircularCarouselListItem contentOffset={contentOffset} imageSrc={item} index={index} />
            }} />
    )
}

export { CircularCarousel };