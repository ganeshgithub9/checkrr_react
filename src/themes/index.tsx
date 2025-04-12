import { Theme } from '@emotion/react';
import { createTheme, SxProps } from '@mui/material';
import React from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h1?: React.CSSProperties;
    h2?: React.CSSProperties;
    subtitle1?: SxProps<Theme>;
    body1?: SxProps<Theme>;
    body2: SxProps<Theme>;
    caption1?: SxProps<Theme>;
    caption2?: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1?: React.CSSProperties;
    h2?: React.CSSProperties;
    subtitle1?: SxProps<Theme>;
    body1?: SxProps<Theme>;
    body2: SxProps<Theme>;
    caption1?: SxProps<Theme>;
    caption2?: React.CSSProperties;
  }

  interface Palette {
    primaryColor: {
      primary100: string;
      primary300: string;
      primary400: string;
      primary500: string;
      primary700: string;
    };
    accent: {
      blue: string;
      lightBlue: string;
      green: string;
      lightGreen: string;
      yellow: string;
      lightYellow: string;
    };
    textColor: {
      highEmphasis: string;
      mediumEmphasis: string;
      lowEmphasis: string;
    };
    structuralColor: {
      white: string;
      stroke: string;
      icon1: string;
      icon2: string;
    };
  }

  interface PaletteOptions {
    primaryColor?: {
      primary100: string;
      primary300: string;
      primary400: string;
      primary500: string;
      primary700: string;
    };
    accent?: {
      blue: string;
      lightBlue: string;
      green: string;
      lightGreen: string;
      yellow: string;
      lightYellow: string;
    };
    textColor?: {
      highEmphasis: string;
      mediumEmphasis: string;
      lowEmphasis: string;
    };
    structuralColor?: {
      white: string;
      stroke: string;
      icon1: string;
      icon2: string;
    };
  }

  interface Color {
    highEmphasis: string;
    mediumEmphasis: string;
    lowEmphasis: string;
    white: string;
    stroke: string;
    icon1: string;
    icon2: string;
    primary100: string;
    primary300: string;
    primary400: string;
    primary500: string;
    primary700: string;
    blue: string;
    lightBlue: string;
    green: string;
    lightGreen: string;
    yellow: string;
    lightYellow: string;
  }

  interface PaletteColor extends Color {}

  interface SimplePaletteColorOptions extends Color {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    subtitle1: true;
    body1: true;
    body2: true;
    caption1: true;
    caption2: true;
  }
}

export const theme = createTheme({
  spacing: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64],
  typography: {
    h1: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '30px'
    },

    h2: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '28px'
    },

    subtitle1: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px'
    },
    body1: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px'
    },

    body2: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px'
    },
    caption1: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '18px'
    },
    caption2: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px'
    }
  },
  palette: {
    primaryColor: {
      primary100: '#F7F7F9',
      primary300: '#EFF2FF',
      primary400: '#95AAFF',
      primary500: '#224DFF',
      primary700: '#1132B7'
    },
    accent: {
      blue: '#3E5FE2',
      lightBlue: '#F2F4FC',
      green: '#17A076',
      lightGreen: '#F2FCFB',
      yellow: '#A08817',
      lightYellow: '#FAF8EB'
    },
    textColor: {
      highEmphasis: '#2C2C2E',
      mediumEmphasis: '#696A6E',
      lowEmphasis: '#818287'
    },
    structuralColor: {
      white: '#FFFFFF',
      stroke: '#E5E7ED',
      icon1: '#696A6E',
      icon2: '#3E414D'
    }
  }
});
