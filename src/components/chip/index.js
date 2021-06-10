import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './styles';

export default class Chip extends React.PureComponent {
  static defaultProps = {
    onClose: () => {},
    text: ''
  };

  constructor(props) {
    super(props);
    this.isIOS = Platform.OS === 'ios';
  }

  render() {
    const { iconStyle, onClose, style, text } = this.props;

    return (
      <View style={[styles.root, style]}>
        <View style={styles.container}>
          <Text style={styles.text} numberOfLines={1}>
            {text}
          </Text>
          <TouchableOpacity
            style={[styles.iconWrapper, iconStyle]}
            onPress={onClose}>
            <Text
              style={[
                styles.icon,
                this.isIOS ? styles.iconIOS : styles.iconAndroid
              ]}>
              ✕
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

