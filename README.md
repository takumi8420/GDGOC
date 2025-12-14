# Next Curriculum

ReactとMUIの基本を学ぶためのシンプルなNext.jsアプリです。App Router構成（`src/app`）の1ページに以下の内容をまとめ、ハンズオン中にコードを見せながら振る舞いを確認できます。

- MUIのButton / TextField / Cardと`map()`によるリスト描画
- `useState`でのカウントアップとタスク追加
- `sx` propによるスタイル指定、`ThemeRegistry`を用いたMUIテーマ適用

## 必要要件

- Node.js 20 LTS 以上（Next.js 16 + React 19 の推奨環境）
- npm 10 以上

## セットアップ

```bash
cd next-curriculum
npm install
npm run dev
# http://localhost:3000 をブラウザで開く
```

## 利用できるnpmスクリプト

| コマンド | 説明 |
| --- | --- |
| `npm run dev` | 開発サーバーをポート3000で起動します。ホットリロード対応。 |
| `npm run build` | 本番ビルドを生成します。エラーでCIを失敗させたいときに実行。 |
| `npm run start` | `build`済み成果物を本番モードで起動します。 |
| `npm run lint` | `eslint.config.mjs`で定義したルールを使って型とスタイルを検証します。 |

## 画面で確認できる学習トピック

1. **MUI概要**: `AppBar`とイントロダクション文章で、ライブラリの使い所を説明。
2. **Buttonバリエーション**: `variant`違いを並べ、「テキスト/Contained/Outlined」の差を視覚で確認。
3. **useState + Button**: カウントアップボタンで状態が変わることを体験。
4. **TextField + state**: 入力欄と`addTask`関数でフォームバインディングの基本を紹介。
5. **Card + map()**: `Task`コンポーネントを使ってリストを描画し、propsと`map()`を学習。
6. **sx prop**: 省略記法を含むスタイリング例をカード内のコードスニペットで整理。

## ディレクトリ構成（主要ファイル）

```
src/
  app/
    page.tsx        # React + MUIのデモ画面。状態管理・コンポーネント例を集約。
    layout.tsx      # App Routerのルートレイアウト。GeistフォントとThemeRegistryを適用。
    ThemeRegistry.tsx
    theme.ts        # `createTheme`でMUIテーマをカスタマイズする入口。
    globals.css     # Tailwind CSS v4スタイルとCSSカスタムプロパティを定義。
```

## カスタマイズのヒント

- **テーマ変更**: `src/app/theme.ts`に`palette`や`typography`を追加するとMUI全体の雰囲気を統一できます。
- **タスクデータ差し替え**: `page.tsx`の`tasks`初期値をJSONやAPIレスポンスに置き換えることで、より実践的なレッスン資料にできます。
- **セクション追加**: `Box` + `Typography`を使ってコンポーネント紹介を増やすと、ハンズオン用スライドの代替として拡張可能です。

## デプロイのヒント

- VercelやNetlifyなどNext.js対応のプラットフォームに`npm run build`の成果物をデプロイできます。
- Node.jsのメジャーバージョンアップ時は`npm run lint`と`npm run build`で互換性をチェックしてください。
