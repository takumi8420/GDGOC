"use client";

import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Avatar,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  AccessTime,
  CheckCircleOutline,
  MenuBook,
  Code,
  PlayArrow,
  OpenInNew,
  ChevronRight,
  FlagOutlined,
  SchoolOutlined,
} from "@mui/icons-material";
import type { CurriculumContent } from "@/app/curriculumData";

type Props = {
  data: CurriculumContent;
};

const sectionColors = ["#4285F4", "#34A853", "#EA4335", "#FBBC04"];

// コードブロックを識別するヘルパー関数
const parseBullet = (bullet: string): { isCode: boolean; language?: string; content: string } => {
  if (bullet.startsWith("CODE:")) {
    const match = bullet.match(/^CODE:(\w+):(.*)$/s);
    if (match) {
      return {
        isCode: true,
        language: match[1],
        content: match[2].trim(),
      };
    }
  }
  return { isCode: false, content: bullet };
};

// バッククォートで囲まれたインラインコードと太字を強調表示するコンポーネント
const InlineCodeText = ({ text }: { text: string }) => {
  const parts: (string | { type: "code" | "bold"; content: string })[] = [];
  let currentIndex = 0;
  
  // バッククォートと太字の両方を処理する正規表現
  const regex = /(`[^`]+`|\*\*[^*]+\*\*)/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // マッチの前のテキスト
    if (match.index > currentIndex) {
      parts.push(text.substring(currentIndex, match.index));
    }
    // マッチした部分を処理
    const matched = match[0];
    if (matched.startsWith("`") && matched.endsWith("`")) {
      // コードブロック
      parts.push({ type: "code", content: matched.slice(1, -1) });
    } else if (matched.startsWith("**") && matched.endsWith("**")) {
      // 太字
      parts.push({ type: "bold", content: matched.slice(2, -2) });
    }
    currentIndex = match.index + match[0].length;
  }
  // 残りのテキスト
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }

  if (parts.length === 0) {
    return <>{text}</>;
  }

  return (
    <>
      {parts.map((part, index) => {
        if (typeof part === "string") {
          return <span key={index}>{part}</span>;
        }
        if (part.type === "code") {
          return (
            <Box
              key={index}
              component="code"
              sx={{
                bgcolor: "rgba(0,0,0,0.06)",
                px: 0.75,
                py: 0.25,
                borderRadius: 0.5,
                fontSize: "0.875em",
                fontFamily: "monospace",
                color: "text.primary",
              }}
            >
              {part.content}
            </Box>
          );
        }
        if (part.type === "bold") {
          return (
            <Box
              key={index}
              component="strong"
              sx={{
                fontWeight: 600,
              }}
            >
              {part.content}
            </Box>
          );
        }
        return <span key={index}>{part.content}</span>;
      })}
    </>
  );
};

export default function CurriculumPage({ data }: Props) {
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
            background:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            opacity: 0.5,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 10 } }}>
            <Chip
              label={data.heroHighlight}
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                color: "#fff",
                fontWeight: 600,
                mb: 3,
                backdropFilter: "blur(4px)",
              }}
            />
            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                mb: 2,
                fontSize: { xs: "2rem", md: "2.75rem" },
              }}
            >
              {data.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontWeight: 400,
                mb: 3,
              }}
            >
              {data.subtitle}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.8)",
                maxWidth: 720,
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              {data.summary}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              flexWrap="wrap"
              useFlexGap
            >
              <Chip
                icon={<AccessTime sx={{ color: "#fff !important" }} />}
                label={`目安時間: ${data.estimatedHours}`}
                sx={{
                  bgcolor: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  fontWeight: 500,
                  "& .MuiChip-icon": { color: "#fff" },
                }}
              />
              {data.branchTip && (
                <Chip
                  icon={<Code sx={{ color: "#fff !important" }} />}
                  label={data.branchTip}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.15)",
                    color: "#fff",
                    fontWeight: 500,
                  }}
                />
              )}
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Prerequisites & Goals */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                height: "100%",
                // クリックできない要素にはホバーエフェクトを無効化
                "&:hover": {
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
                  transform: "none",
                },
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={3}>
                  <Avatar sx={{ bgcolor: "primary.main" }}>
                    <SchoolOutlined />
                  </Avatar>
                  <Typography variant="h6">前提条件</Typography>
                </Stack>
                <Stack spacing={1.5}>
                  {data.prerequisites.map((item, index) => (
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        p: 2,
                        bgcolor: "rgba(102, 126, 234, 0.04)",
                        borderRadius: 2,
                        border: "1px solid rgba(102, 126, 234, 0.1)",
                      }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <CheckCircleOutline
                          sx={{ color: "primary.main", fontSize: 20 }}
                        />
                        <Typography variant="body2">{item}</Typography>
                      </Stack>
                    </Paper>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              sx={{
                height: "100%",
                // クリックできない要素にはホバーエフェクトを無効化
                "&:hover": {
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
                  transform: "none",
                },
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={3}>
                  <Avatar sx={{ bgcolor: "secondary.main" }}>
                    <FlagOutlined />
                  </Avatar>
                  <Typography variant="h6">学習ゴール</Typography>
                </Stack>
                <List disablePadding>
                  {data.learningGoals.map((goal, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        px: 0,
                        py: 1.5,
                        borderBottom:
                          index < data.learningGoals.length - 1
                            ? "1px solid"
                            : "none",
                        borderColor: "divider",
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <Avatar
                          sx={{
                            width: 28,
                            height: 28,
                            bgcolor: "secondary.main",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                          }}
                        >
                          {index + 1}
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText
                        primary={goal}
                        primaryTypographyProps={{
                          variant: "body2",
                          sx: { lineHeight: 1.6 },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Sections */}
        <Box sx={{ mb: 8 }}>
          <Stack spacing={4}>
            {data.sections.map((section, index) => (
              <Box key={index}>
                <Card
                  sx={{
                    position: "relative",
                    overflow: "visible",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      bgcolor: sectionColors[index % sectionColors.length],
                      borderRadius: "16px 16px 0 0",
                    },
                    // クリックできない要素にはホバーエフェクトを無効化
                    "&:hover": {
                      boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
                      transform: "none",
                    },
                  }}
                >
                  <CardContent sx={{ pt: 3 }}>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      mb={2}
                    >
                      <Avatar
                        sx={{
                          width: 36,
                          height: 36,
                          bgcolor: sectionColors[index % sectionColors.length],
                          fontSize: "0.875rem",
                          fontWeight: 700,
                        }}
                      >
                        {index + 1}
                      </Avatar>
                      <Typography variant="h6">{section.title}</Typography>
                    </Stack>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.7 }}
                    >
                      {section.description}
                    </Typography>
                    <Stack spacing={1}>
                      {section.bullets.map((bullet, bulletIndex) => {
                        const parsed = parseBullet(bullet);
                        return (
                          <Stack
                            key={bulletIndex}
                            direction="row"
                            spacing={1.5}
                            alignItems="flex-start"
                          >
                            <ChevronRight
                              sx={{
                                color:
                                  sectionColors[index % sectionColors.length],
                                fontSize: 20,
                                mt: 0.25,
                                flexShrink: 0,
                              }}
                            />
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                              {parsed.isCode ? (
                                <Box
                                  component="pre"
                                  sx={{
                                    bgcolor: "rgba(0,0,0,0.05)",
                                    p: 2,
                                    borderRadius: 1,
                                    overflow: "auto",
                                    fontSize: "0.875rem",
                                    fontFamily: "monospace",
                                    lineHeight: 1.6,
                                    m: 0,
                                    border: "1px solid rgba(0,0,0,0.1)",
                                  }}
                                >
                                  <code>{parsed.content}</code>
                                </Box>
                              ) : (
                                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                  <InlineCodeText text={parsed.content} />
                                </Typography>
                              )}
                            </Box>
                          </Stack>
                        );
                      })}
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Practice */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ mb: 4 }}>
            演習課題
          </Typography>
          <Grid container spacing={3}>
            {data.practice.map((practice, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    // クリックできない要素にはホバーエフェクトを無効化
                    "&:hover": {
                      boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
                      transform: "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: sectionColors[index % sectionColors.length],
                      color: "#fff",
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <PlayArrow sx={{ fontSize: 20 }} />
                      <Typography variant="subtitle1" fontWeight={600}>
                        {practice.title}
                      </Typography>
                    </Stack>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.7 }}
                    >
                      {practice.description}
                    </Typography>
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      sx={{ mb: 1, display: "block" }}
                    >
                      手順
                    </Typography>
                    <Stack spacing={1}>
                      {practice.steps.map((step, stepIndex) => {
                        const parsed = parseBullet(step);
                        return (
                          <Stack
                            key={stepIndex}
                            direction="row"
                            spacing={1.5}
                            alignItems="flex-start"
                          >
                            <Avatar
                              sx={{
                                width: 20,
                                height: 20,
                                bgcolor: "rgba(0,0,0,0.08)",
                                color: "text.secondary",
                                fontSize: "0.7rem",
                                fontWeight: 600,
                                flexShrink: 0,
                              }}
                            >
                              {stepIndex + 1}
                            </Avatar>
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                              {parsed.isCode ? (
                                <Box
                                  component="pre"
                                  sx={{
                                    bgcolor: "rgba(0,0,0,0.05)",
                                    p: 2,
                                    borderRadius: 1,
                                    overflow: "auto",
                                    fontSize: "0.875rem",
                                    fontFamily: "monospace",
                                    lineHeight: 1.6,
                                    m: 0,
                                    border: "1px solid rgba(0,0,0,0.1)",
                                  }}
                                >
                                  <code>{parsed.content}</code>
                                </Box>
                              ) : (
                                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                  <InlineCodeText text={parsed.content} />
                                </Typography>
                              )}
                            </Box>
                          </Stack>
                        );
                      })}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Resources */}
        <Box>
          <Typography variant="h4" sx={{ mb: 4 }}>
            参考資料
          </Typography>
          <Grid container spacing={3}>
            {data.resources.map((resource, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    // クリックできない要素にはホバーエフェクトを無効化
                    ...(!resource.url && {
                      "&:hover": {
                        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
                        transform: "none",
                      },
                    }),
                  }}
                >
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                      <Avatar
                        sx={{
                          bgcolor: "rgba(102, 126, 234, 0.1)",
                          color: "primary.main",
                        }}
                      >
                        <MenuBook />
                      </Avatar>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {resource.label}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.6 }}
                    >
                      {resource.description}
                    </Typography>
                    {resource.url && (
                      <Button
                        component={Link}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="small"
                        endIcon={<OpenInNew sx={{ fontSize: 16 }} />}
                      >
                        資料を開く
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
