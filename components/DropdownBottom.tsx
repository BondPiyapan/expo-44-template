import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native'
import Modal from 'react-native-modal'
import { MaterialIcons } from '@expo/vector-icons'
import _map from 'lodash/map'

const styles = StyleSheet.create({
  dropdownContainer: {
    backgroundColor: 'transparent',
    height: 57,
    width: '102%',
    overflow: 'hidden',
    borderColor: '#616569',
    borderWidth: 1,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 16,
  },
  dropdownContainerDisable: {
    backgroundColor: 'transparent',
    height: 57,
    width: '102%',
    overflow: 'hidden',
    borderColor: '#C2C9D1',
    borderWidth: 1,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
  },
  dropdownContainerNoMargin: {
    marginBottom: 0,
  },
  arrowDropdownIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  dropdownText: {
    fontFamily: 'sukhumvit-set',
    marginRight: 7,
    fontSize: 16,
    color: '#000',
  },
  centeredView: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  headerView: {
    backgroundColor: '#00184A',
    height: 70,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 21,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    fontFamily: 'Prompt_500Medium',
    letterSpacing: 0.15,
    color: '#fff',
    textTransform: 'capitalize',
  },
  closebutton: {
    position: 'absolute',
    left: 21,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  closeicon: {
    height: 14,
    width: 14,
  },
  dropdownItem: {
    color: 'red',
    paddingVertical: 15,
    paddingHorizontal: 24,
  },
  dropdownItemText: {
    fontSize: 18,
    fontFamily: 'Prompt_400Regular',
    color: '#3a3c3f',
  },
  dropdownContainerError: {
    borderColor: 'red',
  },
  dropdownTextEroor: {
    color: 'red',
  },
  error: {
    fontFamily: 'Prompt_400Regular',
    fontSize: 12,
    letterSpacing: 0.1,
    color: 'red',
    position: 'absolute',
    left: 0,
    bottom: 13,
  },
})

type Props = {
  modalTitle?: string
  label?: string
  disabled?: boolean
  touchDisabled?: boolean
  values?: string[],
  value?: string,
  setValue?: any,
  error?: boolean,
  noMargin?: boolean,
}

export default function DropdownModalBottom({
  disabled,
  touchDisabled,
  label,
  modalTitle,
  values,
  value,
  setValue,
  error,
  noMargin,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false)
  const [valueActive, setValueActive] = useState(false)
  useEffect(() => {
    if (value === '') {
      setValueActive(false)
    } else {
      setValueActive(true)
    }
  }, [valueActive, value])
  return (
    <View
      style={{
        ...styles.dropdownText,
        // ...(disabled || lightGray) && { opacity: 0.3 },
      }}
    >
      <Modal
        style={{ margin: 0 }}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}
      >
        <View
          style={{
            width: '100%',
            height: 300,
            position: 'absolute',
            left: 0,
            bottom: 0,
            zIndex: 1,
            backgroundColor: '#fff',
            padding: 16,
          }}
        >
          <Text
            style={{
              fontFamily: 'sukhumvit-set-bold',
              fontSize: 16,
              marginBottom: 16,
              color: '#000',
            }}
          >
            {modalTitle}
          </Text>
          <ScrollView style={{ flex: 1 }}>
            {_map(values, (v, index) => (
              <TouchableOpacity
                onPress={() => {
                  setValue(v)
                  setModalVisible(false)
                  setValueActive(true)
                }}
                key={index}
                style={styles.dropdownItem}
              >
                <Text style={{
                  color: '#3a3c3f',
                  fontFamily: 'sukhumvit-set',
                  fontSize: 16,
                }}
                >
                  {v}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>

      {valueActive && (
        <>
          <Text
            style={{
              fontFamily: 'sukhumvit-set',
              fontSize: 12,
              margin: 0,
              color: '#616569',
              backgroundColor: '#fff',
              position: 'absolute',
              top: -9,
              left: 12,
              paddingLeft: 5,
              paddingRight: 5,
              zIndex: 1,
            }}
          >
            {label}
          </Text>
        </>
      )}

      <TouchableOpacity
        style={{
          ...styles.dropdownContainer,
          ...noMargin && styles.dropdownContainerNoMargin,
          ...error && styles.dropdownContainerError,
          ...disabled && styles.dropdownContainerDisable,
        }}
        disabled={disabled || touchDisabled}
        onPress={() => {
          setModalVisible(true)
        }}
      >
        <Text style={{
          ...styles.dropdownText,
          ...noMargin && styles.dropdownContainerNoMargin,
          ...error && styles.dropdownTextEroor,
        }}
        >
          {value || label}
        </Text>
        {!touchDisabled && (
          <MaterialIcons
            name="arrow-drop-down"
            size={24}
            color={error ? 'red' : '#616569'}
            style={styles.arrowDropdownIcon}
          />
        )}
        {touchDisabled && (
          <MaterialIcons
            name="arrow-drop-down"
            size={24}
            color={error ? 'red' : '#C2C9D1'}
            style={styles.arrowDropdownIcon}
          />
        )}
      </TouchableOpacity>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}
