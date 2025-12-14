import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  RocketLaunch,
  Code,
  Palette,
  CheckCircle,
  AutoAwesome,
  ArrowForward,
  School,
  MenuBook,
  Extension,
} from "@mui/icons-material";
import { curriculumCards } from "./curriculumData";
import MuiLink from "./components/MuiLink";

const features = [
  {
    icon: <Code sx={{ fontSize: 28 }} />,
    title: "実践的なハンズオン",
    description: "理論だけでなく、実際にコードを書きながら学習を進めます",
  },
  {
    icon: <MenuBook sx={{ fontSize: 28 }} />,
    title: "段階的なカリキュラム",
    description: "基礎から応用まで、体系的に構成されたカリキュラム",
  },
  {
    icon: <Extension sx={{ fontSize: 28 }} />,
    title: "モダンな技術スタック",
    description: "Vite, Next.js, MUIなど現場で使われる技術を学べます",
  },
];

const stepGuide = [
  {
    step: 1,
    title: "ブランチを作成",
    description: "課題ごとに新しいブランチを作成してスタート",
    color: "#4285F4",
  },
  {
    step: 2,
    title: "実装 & 学習",
    description: "ドキュメントを参考に機能を実装",
    color: "#34A853",
  },
  {
    step: 3,
    title: "PRを作成",
    description: "成果物をPRにまとめてレビュー依頼",
    color: "#FBBC04",
  },
];

const topicIcons: Record<string, React.ReactNode> = {
  vite: <RocketLaunch />,
  next: <AutoAwesome />,
  mui: <Palette />,
  todo: <CheckCircle />,
};

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            opacity: 0.5,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 10, md: 14 } }}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ mb: 3 }}
            >
              <School sx={{ color: "rgba(255,255,255,0.9)", fontSize: 20 }} />
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                }}
              >
                GDGOC
              </Typography>
            </Stack>

            <Typography
              variant="h1"
              sx={{
                color: "#fff",
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                maxWidth: 800,
              }}
            >
              モダンWebフレームワークを
              <br />
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #ffd89b, #19547b)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                実践的に
              </Box>
              学ぼう
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.85)",
                maxWidth: 640,
                lineHeight: 1.8,
                mb: 5,
                fontWeight: 400,
              }}
            >
              Vite + React → Next.js → MUI
              を横断的に学べるカリキュラムです。
              <br />
              ブランチ戦略、演習課題、参考リンクまで一つの場所で確認できます。
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                component={MuiLink}
                href="/curriculum/vite"
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  bgcolor: "#fff",
                  color: "#667eea",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.9)",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                  },
                }}
              >
                カリキュラムを始める
              </Button>
              <Button
                component={MuiLink}
                href="#curriculum"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "rgba(255,255,255,0.5)",
                  color: "#fff",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    borderColor: "#fff",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                一覧を見る
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Stack direction="row" spacing={3} alignItems="flex-start">
                <Avatar
                  sx={{
                    bgcolor: "primary.main",
                    width: 56,
                    height: 56,
                  }}
                >
                  {feature.icon}
                </Avatar>
                <Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Curriculum Cards Section */}
      <Box
        id="curriculum"
        sx={{ bgcolor: "rgba(102, 126, 234, 0.03)", py: { xs: 8, md: 10 } }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Chip
              label="CURRICULUM"
              size="small"
              sx={{
                mb: 2,
                bgcolor: "primary.main",
                color: "#fff",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            />
            <Typography variant="h3" sx={{ mb: 2 }}>
              カリキュラム一覧
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              基礎から応用まで、段階的に学べるカリキュラムを用意しています
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {curriculumCards.map((card, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={card.topic}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "visible",
                    // Card自体はクリックできないため、ホバーエフェクトを無効化
                    "&:hover": {
                      boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
                      transform: "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: -20,
                      left: 24,
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor:
                        index === 0
                          ? "#4285F4"
                          : index === 1
                            ? "#34A853"
                            : index === 2
                              ? "#EA4335"
                              : "#FBBC04",
                      color: "#fff",
                      boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                    }}
                  >
                    {topicIcons[card.topic]}
                  </Box>
                  <CardContent sx={{ pt: 5, flexGrow: 1 }}>
                    <Chip
                      label={card.highlight}
                      size="small"
                      sx={{
                        mb: 2,
                        bgcolor: "rgba(0,0,0,0.04)",
                        fontWeight: 500,
                      }}
                    />
                    <Typography variant="h6" sx={{ mb: 1.5 }}>
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, minHeight: 60 }}
                    >
                      {card.description}
                    </Typography>
                    <Button
                      component={MuiLink}
                      href={card.path}
                      variant="text"
                      endIcon={<ArrowForward />}
                      sx={{
                        px: 2,
                        py: 0.75,
                        borderRadius: 2,
                        color: "primary.main",
                        fontWeight: 500,
                        textTransform: "none",
                        position: "relative",
                        overflow: "hidden",
                        bgcolor: "transparent",
                        border: "1px solid",
                        borderColor: "primary.main",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: 0,
                          height: "100%",
                          bgcolor: "rgba(66, 133, 244, 0.1)",
                          transition: "width 0.3s ease-in-out",
                          zIndex: 0,
                        },
                        "&:hover": {
                          color: "primary.dark",
                          borderColor: "primary.dark",
                          "&::before": {
                            width: "100%",
                          },
                          "& .MuiButton-endIcon": {
                            transform: "translateX(4px)",
                          },
                        },
                        "& > *": {
                          position: "relative",
                          zIndex: 1,
                        },
                        "& .MuiButton-endIcon": {
                          transition: "transform 0.3s ease-in-out",
                        },
                        transition: "color 0.3s ease-in-out, border-color 0.3s ease-in-out",
                      }}
                    >
                      詳細を見る
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How to Use Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Chip
            label="GUIDE"
            size="small"
            sx={{
              mb: 2,
              bgcolor: "secondary.main",
              color: "#fff",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          />
          <Typography variant="h3" sx={{ mb: 2 }}>
            進め方ガイド
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            3つのステップで効率的に学習を進めましょう
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {stepGuide.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.step}>
              <Card
                sx={{
                  textAlign: "center",
                  height: "100%",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    bgcolor: item.color,
                    borderRadius: "16px 16px 0 0",
                  },
                  // クリックできない要素にはホバーエフェクトを無効化
                  "&:hover": {
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
                    transform: "none",
                  },
                }}
              >
                <CardContent sx={{ pt: 4 }}>
                  <Avatar
                    sx={{
                      bgcolor: item.color,
                      width: 48,
                      height: 48,
                      mx: "auto",
                      mb: 2,
                      fontSize: "1.25rem",
                      fontWeight: 700,
                    }}
                  >
                    {item.step}
                  </Avatar>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: "#1F2937",
          color: "rgba(255,255,255,0.7)",
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="body2">
            GDGOC
            </Typography>
            <Typography variant="body2">
              Built with Next.js + MUI
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
