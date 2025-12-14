"use client";

import { AppBar, Toolbar, Typography, Stack, Button, Box, Container } from "@mui/material";
import { School } from "@mui/icons-material";
import { curriculumCards } from "@/app/curriculumData";
import MuiLink from "./MuiLink";

export default function SiteHeader() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: { xs: 0 }, minHeight: { xs: 64 } }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            component={MuiLink}
            href="/"
            sx={{
              textDecoration: "none",
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 6 },
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: 2,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <School sx={{ color: "#fff", fontSize: 20 }} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                color: "text.primary",
                fontWeight: 700,
                fontSize: "1rem",
                display: { xs: "none", sm: "block" },
              }}
            >
             GDGOC
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={0.5}
            useFlexGap
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {curriculumCards.map((card) => (
              <Button
                key={card.topic}
                component={MuiLink}
                href={card.path}
                size="small"
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: "rgba(102, 126, 234, 0.08)",
                    color: "primary.main",
                  },
                }}
              >
                {card.title}
              </Button>
            ))}
          </Stack>

          <Box sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }} />

          <Button
            component={MuiLink}
            href="/curriculum/vite"
            variant="contained"
            size="small"
            sx={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              px: 2.5,
              py: 0.75,
              display: { xs: "none", sm: "inline-flex" },
              "&:hover": {
                background: "linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)",
              },
            }}
          >
            始める
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
