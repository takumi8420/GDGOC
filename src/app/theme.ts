"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4285F4", // Google Blue
      light: "#669DF6",
      dark: "#1967D2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#34A853", // Google Green
      light: "#5BB974",
      dark: "#1E8E3E",
      contrastText: "#fff",
    },
    error: {
      main: "#EA4335", // Google Red
      light: "#EE675C",
      dark: "#C5221F",
    },
    warning: {
      main: "#FBBC04", // Google Yellow
      light: "#FCC934",
      dark: "#F9AB00",
    },
    background: {
      default: "#FAFBFC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1F2937",
      secondary: "#6B7280",
    },
    divider: "rgba(0, 0, 0, 0.08)",
  },
  typography: {
    fontFamily: '"Inter", "Noto Sans JP", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontSize: "3rem",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.875rem",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: "#6B7280",
    },
    button: {
      textTransform: "none" as const,
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    "none",
    "0 1px 2px rgba(0,0,0,0.04)",
    "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
    "0 4px 6px -1px rgba(0,0,0,0.06), 0 2px 4px -1px rgba(0,0,0,0.04)",
    "0 10px 15px -3px rgba(0,0,0,0.06), 0 4px 6px -2px rgba(0,0,0,0.04)",
    "0 20px 25px -5px rgba(0,0,0,0.06), 0 10px 10px -5px rgba(0,0,0,0.02)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
    "0 25px 50px -12px rgba(0,0,0,0.15)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 20px",
          fontWeight: 500,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(66, 133, 244, 0.25)",
          },
        },
        contained: {
          "&:hover": {
            boxShadow: "0 4px 12px rgba(66, 133, 244, 0.35)",
          },
        },
        outlined: {
          borderWidth: "1.5px",
          "&:hover": {
            borderWidth: "1.5px",
            backgroundColor: "rgba(66, 133, 244, 0.04)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
          border: "1px solid rgba(0,0,0,0.06)",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
          "&:last-child": {
            paddingBottom: "24px",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          fontSize: "0.8125rem",
        },
        colorPrimary: {
          backgroundColor: "rgba(66, 133, 244, 0.1)",
          color: "#1967D2",
        },
        colorSecondary: {
          backgroundColor: "rgba(52, 168, 83, 0.1)",
          color: "#1E8E3E",
        },
        outlined: {
          borderColor: "rgba(0,0,0,0.12)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(0,0,0,0.06)",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontSize: "0.8125rem",
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;

