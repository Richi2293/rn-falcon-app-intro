import React from 'react'
import {
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';

export const SkipButton = ({
  styles, onSkipBtnClick, isSkipBtnShow,
  leftTextColor,
  skipBtnLabel,
  skipFadeOpacity
}) => {
  return (
    <Animated.View style={[styles.btnSkipContainer, {
      opacity: skipFadeOpacity,
      transform: [{
        translateX: skipFadeOpacity.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 15],
        }),
      }],
    }]}
    >
      <TouchableOpacity
        style={styles.full}
        onPress={isSkipBtnShow ? () => onSkipBtnClick() : null}>
        <Text style={[styles.controllText, { color: leftTextColor }]}>
          {skipBtnLabel}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default SkipButton
