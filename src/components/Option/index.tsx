import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";
import {
  BlurMask,
  Canvas,
  Path,
  runTiming,
  Skia,
  useValue,
  Circle,
  Easing,
} from "@shopify/react-native-skia";
import { useEffect } from "react";

type Props = TouchableOpacityProps & {
  checked: boolean;
  title: string;
};

const CHECK_SIZE = 28;
const CHECK_STOKE = 2;

export function Option({ checked, title, ...rest }: Props) {
  const percentage = useValue(0);
  const circle = useValue(0);

  const RADIUS = (CHECK_SIZE - CHECK_STOKE) / 2;
  const CENTER_RADIUS = RADIUS / 2;

  const path = Skia.Path.Make();
  path.addCircle(CHECK_SIZE, CHECK_SIZE, RADIUS);

  useEffect(() => {
    if (checked) {
      runTiming(percentage, 1, { duration: 700 });
      runTiming(circle, CENTER_RADIUS, { easing: Easing.bounce });
    } else {
      runTiming(percentage, 0, { duration: 400 });
      runTiming(circle, 0, { duration: 300 });
    }
  }, [checked]);

  return (
    <TouchableOpacity
      style={[styles.container, checked && styles.checked]}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>

      <Canvas style={{ height: CHECK_SIZE * 2, width: CHECK_SIZE * 2 }}>
        <Path
          path={path}
          color="#555555"
          style="stroke"
          strokeWidth={CHECK_STOKE}
        />
        <Path
          path={path}
          color="#00875F"
          style="stroke"
          strokeWidth={CHECK_STOKE}
          start={0}
          end={percentage}
        >
          <BlurMask blur={1} style="solid" />
        </Path>

        <Circle cx={CHECK_SIZE} cy={CHECK_SIZE} r={circle} color="#00875F">
          <BlurMask blur={1} style="solid" />
        </Circle>
      </Canvas>
    </TouchableOpacity>
  );
}
