import { createTheme, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    black: {
      0: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
    };
    secondaryVariable: {
      [key: string]: {
        dark: string;
        main: string;
        light: string;
      };
    };
  }

  interface PaletteOptions {
    black?: {
      0: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
    };
    secondaryVariable: {
      [key: string]: {
        dark: string;
        main: string;
        light: string;
        contrastText: string;
      };
    };
  }

  // 배경색 타입 정의
  interface TypeBackground {
    default: string;
    paper: string;
    0: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
  }

  interface TypeText {
    white: string;
    black: string;
  }
}

// 서비스에 어울리는 색상 팔레트
export const muiTheme = createTheme({
  typography: {
    fontFamily: [
      '"Ownglyph_corncorn-Rg"',
      '"Ownglyph_ParkDaHyun"',
      '"Pretendard-Regular"',
      '"Malgun Gothic"',
      '"Apple SD Gothic Neo"',
      "sans-serif",
    ].join(","),
    // 폰트 사이즈별 설정
    h1: {
      fontFamily: '"Ownglyph_corncorn-Rg", "Ownglyph_ParkDaHyun", "Pretendard-Regular", sans-serif',
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    h2: {
      fontFamily: '"Ownglyph_corncorn-Rg", "Ownglyph_ParkDaHyun", "Pretendard-Regular", sans-serif',
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h3: {
      fontFamily: '"Ownglyph_corncorn-Rg", "Ownglyph_ParkDaHyun", "Pretendard-Regular", sans-serif',
      fontSize: "1.75rem",
      fontWeight: "bold",
    },
    h4: {
      fontFamily: '"Ownglyph_corncorn-Rg", "Ownglyph_ParkDaHyun", "Pretendard-Regular", sans-serif',
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Ownglyph_corncorn-Rg", "Ownglyph_ParkDaHyun", "Pretendard-Regular", sans-serif',
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Ownglyph_corncorn-Rg", "Ownglyph_ParkDaHyun", "Pretendard-Regular", sans-serif',
      fontSize: "1rem",
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Ownglyph_corncorn-Rg", "Ownglyph_ParkDaHyun", "Pretendard-Regular", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Ownglyph_corncorn-Rg", "Ownglyph_ParkDaHyun", "Pretendard-Regular", sans-serif',
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    button: {
      fontFamily: '"Ownglyph_corncorn-Rg", "Ownglyph_ParkDaHyun", "Pretendard-Regular", sans-serif',
      fontWeight: 500,
    },
    caption: {
      fontFamily: '"Ownglyph_corncorn-Rg", "Ownglyph_ParkDaHyun", "Pretendard-Regular", sans-serif',
      fontSize: "0.75rem",
    },
  },
  palette: {
    primary: {
      dark: "#E8879F",
      main: "#FFB6B9",
      light: "#FFC5C7",
      contrastText: "#FFFFFF",
    },

    secondary: {
      dark: "#0000FF",
      main: "#2222FF",
      light: "#4444FF",
      contrastText: "#FFFFFF",
    },

    secondaryVariable: {
      blue: {
        dark: "#0A2FCC",
        main: "#0D45FF",
        light: "#567AFF",
        contrastText: "#FFFFFF",
      },
      green: {
        dark: "#00A650",
        main: "#00FF84",
        light: "#66FFC2",
        contrastText: "#000000",
      },
      yellow: {
        dark: "#C4A000",
        main: "#FFD335",
        light: "#FFE97F",
        contrastText: "#000000",
      },
      pink: {
        dark: "#D6006B",
        main: "#FF2D95",
        light: "#FF7DC2",
        contrastText: "#000000",
      },
      purple: {
        dark: "#7E57C2",
        main: "#B388FF",
        light: "#E0CFFF",
        contrastText: "#000000",
      },
    },

    error: {
      main: "#F44336",
    },

    warning: {
      main: "#FF9800",
    },

    info: {
      main: "#2196F3",
    },

    success: {
      main: "#4CAF50",
    },

    black: {
      0: "#ffffff",
      100: "#CCCCCC",
      200: "#AAAAAA",
      300: "#888888",
      400: "#666666",
      500: "#444444",
      600: "#222222",
      700: "#000000",
    },

    background: {
      default: "#FFFFFF",
      paper: "#666666",
      0: "#ffffff",
      100: "#CCCCCC",
      200: "#AAAAAA",
      300: "#888888",
      400: "#666666",
      500: "#444444",
      600: "#222222",
      700: "#000000",
    },

    text: {
      primary: "#000000",
      secondary: "#AAAAAA",
      disabled: "#666666",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.text.secondary,
          "&.Mui-focused": {
            color: theme.palette.text.primary,
          },
        }),
      },
    },
  },
});
