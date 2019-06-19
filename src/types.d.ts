import { InferProps } from 'prop-types';
import {
  StyleProp, TextStyle,
  TextInputProps, TouchableOpacityProps
} from 'react-native';

export type TextStyleProp = StyleProp<TextStyle>;
export type ErrorStyleProp = { errorStyle?: TextStyleProp }

export type ReinputProps = TextInputProps
  & InferProps<typeof import('./Input/props').propTypes>
  & ErrorStyleProp

export type ReinputButtonProps = TouchableOpacityProps
  & InferProps<typeof import('./Button/props').propTypes>
  & ErrorStyleProp
