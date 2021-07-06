import {ViewStyle} from 'react-native';

export interface custIconProps {
  type:
    | 'zocial'
    | 'octicon'
    | 'material'
    | 'material-community'
    | 'ionicon'
    | 'foundation'
    | 'evilicon'
    | 'entypo'
    | 'font-awesome'
    | 'font-awesome-5'
    | 'simple-line-icon'
    | 'feather'
    | 'antdesign'
    | 'fontisto';
  name: string;
  size: number;
  color: string;
  raised?: boolean;
  containerStyle?: ViewStyle;
}
