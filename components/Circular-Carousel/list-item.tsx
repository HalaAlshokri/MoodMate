import { Dimensions, View, StyleSheet } from "react-native"
import { ImageProps, Image } from 'expo-image'
import Animated, { SharedValue, interpolate, useAnimatedStyle } from "react-native-reanimated"

type CircularCarouselListItemProps = {
    imageSrc: ImageProps['source']
    index: number
    contentOffset: Animated.SharedValue<number>
}

const { width: windowWidth } = Dimensions.get('window')

const ListItemWidth = windowWidth / 1.5

const CircularCarouselListItem: React.FC<CircularCarouselListItemProps> = ({ imageSrc, index, contentOffset }) => {
    /**/const rStyle = useAnimatedStyle(() => {

    const inputRange = [
        (index - 1) * ListItemWidth,
        index * ListItemWidth,
        (index + 1) * ListItemWidth,
    ]

    const outputRange = [
        0,
        -ListItemWidth / 2,
        0,
    ]

    const translateY = interpolate(contentOffset.value, inputRange, outputRange)

    return {
        transform: [
            { translateY: 0 }
        ]
    }
})
    return (
        <Animated.View
            style={[
                { width: ListItemWidth, aspectRatio: 1, borderRadius: 100, backgroundColor: 'transparent' },
                rStyle,
            ]} >
            <Image source={imageSrc} style={styles.glow} />
        </Animated.View>)
};

export { CircularCarouselListItem };

const styles = StyleSheet.create({
    glow: {
        borderRadius: 16,
        shadowOpacity: 0.5,
        shadowRadius: 16,
        flex: 1,
        //borderRadius: 100 ,
        shadowColor: 'white'
    }
})