import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

export const DoneButton = ({
  styles, onDoneBtnClick, onNextBtnClick,
  rightTextColor, isDoneBtnShow,
  doneBtnLabel, nextBtnLabel,
  doneFadeOpacity, skipFadeOpacity, nextOpacity
}) => {
  return (
    <View style={styles.btnContainer}>
      <Animated.View style={[styles.full, { height: 0 }, {
        opacity: doneFadeOpacity,
        transform: [{
          translateX: skipFadeOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 20],
          }),
        }],
      }]}
      >
        <TouchableOpacity
          style={styles.full}
          onPress={isDoneBtnShow ? onDoneBtnClick : onNextBtnClick}
        >
          <Text style={[styles.controllText, {
            color: rightTextColor, paddingRight: 30,
          }]}>
            {doneBtnLabel}
          </Text>
        </TouchableOpacity>
      </Animated.View>
      {isDoneBtnShow ? null : (
        <Animated.View style={[styles.full, { height: 0 }, { opacity: nextOpacity }]}>
          <TouchableOpacity style={styles.full} onPress={onNextBtnClick}>
            <Text style={[styles.nextButtonText, { color: rightTextColor }]}>
              {nextBtnLabel}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  )
}

export default DoneButton
