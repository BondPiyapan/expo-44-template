import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const stylesNormal = StyleSheet.create({
  buttonContainer: {
    height: 48,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#37dac3',
  },
  buttonLabel: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontFamily: 'Prompt_500Medium',
    letterSpacing: 0.25,
    color: '#fff',
  },
  buttonImage: {
    marginRight: 10,
  },
})

const stylesTransparent = StyleSheet.create({
  buttonContainer: {
    height: 48,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    borderColor: '#37dac3',
    borderWidth: 1,
  },
  buttonContainerred: {
    height: 48,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    borderColor: '#F03738',
    borderWidth: 1,
  },
  buttonLabel: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontFamily: 'Prompt_500Medium',
    letterSpacing: 0.25,
    color: '#37dac3',
  },
  buttonImage: {
    marginRight: 10,
  },
})

type Props = {
    label?: string
    transparent?: boolean
    transparentRed?: boolean
    icon?: boolean
    transferIcon?: boolean
    saveIcon?: boolean
    callIcon?: boolean
    returnIcon?: boolean
    lightGray?: boolean
    darkGray?: boolean
    onPress?: () => void
    loading?: boolean
    loadingText?: string
    disabled?: boolean
    green?: boolean
    red?: boolean
    closeIcon?: boolean
    checkIcon?: boolean
}

export default function Button({
  label,
  transparent,
  transparentRed,
  icon,
  transferIcon,
  saveIcon,
  callIcon,
  returnIcon,
  lightGray,
  darkGray,
  onPress,
  loading,
  loadingText,
  disabled,
  green,
  red,
  closeIcon,
  checkIcon,
}: Props) {
  return (
    <TouchableOpacity
      style={{
        ...transparent ? stylesTransparent.buttonContainer : stylesNormal.buttonContainer,
        ...transparentRed ? stylesTransparent.buttonContainerred : stylesNormal.buttonContainer,
        ...lightGray ? { backgroundColor: '#C2C9D1' } : { },
        ...darkGray ? { backgroundColor: '#616569' } : { },
        ...green ? { backgroundColor: '#3CC13B' } : { },
        ...red ? { backgroundColor: '#F03738' } : { },
      }}
      onPress={onPress}
      disabled={disabled}
    >
      {icon && (
        <MaterialIcons
          name="business"
          size={24}
          color="#37dac3"
          style={transparent ? stylesTransparent.buttonImage : stylesNormal.buttonImage}
        />
      )}
      {saveIcon && (
        <MaterialIcons
          name="save-alt"
          size={24}
          color="#37dac3"
          style={transparent ? stylesTransparent.buttonImage : stylesNormal.buttonImage}
        />
      )}
      {callIcon && (
        <MaterialIcons
          name="call"
          size={24}
          color="#37dac3"
          style={transparent ? stylesTransparent.buttonImage : stylesNormal.buttonImage}
        />
      )}
      {transferIcon && (
        <MaterialIcons
          name="swap-horiz"
          size={24}
          color="#fff"
          style={transparent ? stylesTransparent.buttonImage : stylesNormal.buttonImage}
        />
      )}
      {returnIcon && (
        <MaterialIcons
          name="rotate-right"
          size={24}
          color="#37dac3"
          style={transparent ? stylesTransparent.buttonImage : stylesNormal.buttonImage}
        />
      )}
      {closeIcon && (
        <MaterialIcons
          name="close"
          size={24}
          color="#fff"
          style={transparent ? stylesTransparent.buttonImage : stylesNormal.buttonImage}
        />
      )}
      {checkIcon && (
        <MaterialIcons
          name="check"
          size={24}
          color="#fff"
          style={transparent ? stylesTransparent.buttonImage : stylesNormal.buttonImage}
        />
      )}
      {loading
        ? (
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <ActivityIndicator color="#fff" />
            {!!loadingText && (
              <Text
                style={{
                  color: transparent ? '#37dac3' : '#FFF',
                  paddingTop: 3,
                  marginLeft: 8,
                  fontSize: 14,
                }}
              >
                {loadingText}
              </Text>
            )}
          </View>
        )
        : (
          <Text
            style={transparent ? {
              color: '#37dac3',
              fontFamily: 'sukhumvit-set',
              fontSize: 16,
            } : transparentRed ? {
                color: '#F03738',
                fontFamily: 'sukhumvit-set',
                fontSize: 16,
              }: {
              color: '#fff',
              fontFamily: 'sukhumvit-set',
              fontSize: 16,
            }}
          >
            {label}
          </Text>
        )}
    </TouchableOpacity>
  )
}
