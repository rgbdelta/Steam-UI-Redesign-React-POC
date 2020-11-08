import styled from '@emotion/styled';
import { colors } from './Colors';

type TypographyIntent = 'default' | 'inverted';

interface IProps {
  intent?: TypographyIntent;
}

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
  font-size: 14px;
  color: ${(props: IProps) => {
    switch (props.intent) {
      case 'inverted':
        return colors.textInverted;
      default:
        return colors.textDefault;
    }
  }};
`;
