import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import AppText from './AppText';
import Button from './Button';

/*
리엑트 네이티브 모달은 'visible = true' 일때 보일 수 있게 나타납니다.
모달이 닫힐 때 onRequestClose를 호출합니다`.
이 커스텀 모달은 모달의 바깥쪽 외부 배경을 클릭하면 닫힙니다.
*/

const AlertModal = ({ text, visible, onRequestClose }) => {
  return (
    <Modal
      style={styles.modal}
      visible={visible}
      transparent
      onRequestClose={onRequestClose}
    >
      <TouchableWithoutFeedback onPress={() => onRequestClose(null)}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <AppText style={styles.text}>{text}</AppText>
              <Button
                style={styles.button}
                onPress={() => onRequestClose(null)}
              >
                Ok
              </Button>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: '100%',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    paddingVertical: 40,
    paddingHorizontal: 80,
  },
  button: {
    marginBottom: 20,
    width: 80,
  },
});

AlertModal.propTypes = {
  text: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default AlertModal;
