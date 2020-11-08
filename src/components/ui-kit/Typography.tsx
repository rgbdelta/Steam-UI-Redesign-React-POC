import styled from '@emotion/styled';
import { colors } from './constants/colors';

export type TypographyIntent = 'default' | 'inverted' | 'muted';

interface IProps {
  intent?: TypographyIntent;
}

const getColorFromIntent = (props: IProps) => {
  switch (props.intent) {
    case 'muted':
      return colors.textMuted;
    case 'inverted':
      return colors.textInverted;
    default:
      return colors.textDefault;
  }
};

export const Heading2 = styled.div`
  font-size: 20px;
  color: ${(props: IProps) => getColorFromIntent(props)};
`;

export const Heading3 = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: ${(props: IProps) => getColorFromIntent(props)};
`;

export const Paragraph = styled.div`
  font-size: 13px;
  color: ${(props: IProps) => getColorFromIntent(props)};
`;
