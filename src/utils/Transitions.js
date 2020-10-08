import { TransitionPresets } from "@react-navigation/stack";
import { isAndroid } from "./Platform";

const transitions = {
  transitionBetweenScreenPresets: isAndroid()
    ? TransitionPresets.FadeFromBottomAndroid
    : null,
};

export default transitions;
