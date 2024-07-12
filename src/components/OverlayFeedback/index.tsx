import { BlurMask, Canvas, Rect } from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";

const STATUS = ["transparente", "#4fff64e5", "#fb4444e4"];

type Props = {
  status: number;
};

export function OverlayFeedback({ status }: Props) {
  const color = STATUS[status];
  const opacity = useSharedValue(0);

  const { height, width } = useWindowDimensions();

  return (
    <Animated.View style={{ height, width, position: "absolute" }}>
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height} color={color}>
          <BlurMask blur={50} style="inner" />
        </Rect>
      </Canvas>
    </Animated.View>
  );
}
