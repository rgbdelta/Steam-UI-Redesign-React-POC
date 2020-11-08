import styled from '@emotion/styled';
import { colors } from './Constants/Colors';

export type TypographyIntent = 'default' | 'inverted';

interface IProps {
  intent?: TypographyIntent;
}

export const Heading2 = styled.div`
  font-size: 20px;
  color: ${(props: IProps) => {
    switch (props.intent) {
      case 'inverted':
        return colors.textInverted;
      default:
        return colors.textDefault;
    }
  }};
`;

export const Heading3 = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: ${(props: IProps) => {
    switch (props.intent) {
      case 'inverted':
        return colors.textInverted;
      default:
        return colors.textDefault;
    }
  }};
`;

export const Paragraph = styled.div`
  font-size: 13px;
  color: ${(props: IProps) => {
    switch (props.intent) {
      case 'inverted':
        return colors.textInverted;
      default:
        return colors.textDefault;
    }
  }};
`;
