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
React native modal
is visible when visible = true
call onRequestClose when the modal is closed
This custom modal close when you click on the backdrop of the modal (=outside the modal)
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
