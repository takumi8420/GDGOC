export type CurriculumTopic = "vite" | "next" | "todo" | "mui";

export type CurriculumSection = {
  title: string;
  description: string;
  bullets: string[];
};

export type CurriculumPractice = {
  title: string;
  description: string;
  steps: string[];
};

export type CurriculumResource = {
  label: string;
  description: string;
  url?: string;
};

export type CurriculumContent = {
  slug: CurriculumTopic;
  title: string;
  subtitle: string;
  summary: string;
  heroHighlight: string;
  estimatedHours: string;
  prerequisites: string[];
  learningGoals: string[];
  sections: CurriculumSection[];
  practice: CurriculumPractice[];
  timeline: string[];
  resources: CurriculumResource[];
  branchTip?: string;
};

const viteCurriculum: CurriculumContent = {
  slug: "vite",
  title: "React Fundamentals with Vite",
  subtitle: "Hands-on: React + TypeScript",
  summary:
    "Vite + React + TypeScript を使って環境構築から状態管理、コンポーネント分割、フォーム、データ取得までを10ステップで体験するハンズオン教材です。ページを上から順に進めるだけで、同じ成果物をTSXで実装できます。",
  heroHighlight: "Component Thinking",
  estimatedHours: "10-12h",
  prerequisites: [
    "Node.js 20 LTS 以上 + npm 10 以上",
    "VS Code と Chrome DevTools の基本操作",
    "JavaScript（ES6+）とTypeScriptの基礎知識",
    "HTML/CSS の基本理解",
    "GitHub でのブランチ作成・PR 作成経験",
  ],
  learningGoals: [
    "Vite + TypeScript テンプレートでReactアプリを初期化し、ホットリロードを使いこなす。",
    "TSXでコンポーネントを分割し、props・state・イベント・条件分岐を型安全に実装できる。",
    "配列やフォームの状態を管理し、MUI導入前の土台となるコンポーネント思考を身につける。",
    "useEffectとfetchを組み合わせて外部データを扱える。",
    "ハンズオン課題を通してTypeScriptの型付けとリファクタリングの流れを理解する。",
  ],
  sections: [
    {
      title: "Step 1: 環境構築とプロジェクトセットアップ",
      description:
        "ViteのTypeScriptテンプレートを使ってプロジェクトを初期化し、ホットリロードが動作することを確認します。",
      bullets: [
        "`mkdir react-handson && cd react-handson` で作業用ディレクトリを作成",
        "`npm create vite@latest my-react-app -- --template react-ts` を実行。rolldown-viteの使用を聞かれるので、ここではNoを選択",
        "`cd my-react-app && npm install` で依存関係をインストール",
        "`npm run dev -- --open` で http://localhost:5173 を開き、初期画面を確認",
        "`code .` もしくは、VS Codeからmy-react-appを開く",
        "VS Code で `src/main.tsx`, `src/App.tsx`, `index.html` を開き、TSX構成を確認",
        "（任意）`git checkout -b feature/vite-step1` などブランチを切り、以降もステップごとにブランチ運用",
      ],
    },
    {
      title: "Step 2: App.tsx をTSXで書き直す",
      description:
        "テンプレートコードを削除し、関数コンポーネントで最初のUIを記述してホットリロードを体験します。",
      bullets: [
        "`src/App.tsx` のテンプレートを削除し、以下の最小コードに置き換える:",
        "CODE:tsx:const App: React.FC = () => (\n  <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>\n    <h1>React + TypeScript Hands-on</h1>\n    <p>Step 2: TSX の基本構文を確認します。</p>\n    <button onClick={() => console.log('clicked')}>Say hi</button>\n  </main>\n);\n\nexport default App;",
        "`className` や `style` で余白・色を調整し、保存→ブラウザで反映されることを確認",
        "(任意)`npm run lint` で型エラーがないかチェックし、VS Code 上のヒントに慣れる",
      ],
    },
    {
      title: "Step 3: コンポーネント分割と再利用",
      description:
        "`src/components` ディレクトリを作り、Header や Footer をTSXで切り出してApp.tsxに読み込みます。",
      bullets: [
        "`mkdir -p src/components` を実行し、`Header.tsx` を作成",
        "Headerコンポーネントを実装:",
        "CODE:tsx:type HeaderProps = { title: string; subtitle?: string };\n\nexport const Header = ({ title, subtitle }: HeaderProps) => (\n  <header style={{ marginBottom: '1.5rem' }}>\n    <h1>{title}</h1>\n    {subtitle && <p>{subtitle}</p>}\n  </header>\n);",
        "`Footer.tsx` も作成し、以下のように定義:",
        "CODE:tsx:export const Footer = () => (\n  <footer style={{ marginTop: '2rem', padding: '1rem', textAlign: 'center', color: '#666' }}>\n    © 2025 My Workshop\n  </footer>\n);",
        "`src/App.tsx` で `import { Header } from './components/Header';` として読み込み、レイアウト要素をコンポーネント化",
      ],
    },
    {
      title: "Step 4: Props と型定義（Sushiサンプル）",
      description:
        "定番の寿司カードUIをTypeScriptで再現し、propsに型を付けます。",
      bullets: [
        "`src/components/Sushi.tsx` を作成し、以下のように型付きpropsを宣言:",
        "CODE:tsx:type SushiProps = {\n  name: string;\n  price: number;\n};\n\nexport const Sushi = ({ name, price }: SushiProps) => (\n  <article>\n    <h2>{name}</h2>\n    <p>{price}円</p>\n  </article>\n);",
        "`App.tsx` で `<Sushi name=\"いくら\" price={200} />` を並べ、型エラーが出ないことを確認",
        "(メモ)配列を使う場合は `type SushiItem = { name: string; price: number }; const sushis: SushiItem[] = [...]` のように型を付ける",
      ],
    },
    {
      title: "Step 5: useState で状態を管理",
      description:
        "状態フックをTypeScriptで扱い、カウンターを実装して再レンダリングの仕組みを理解します。",
      bullets: [
        "`src/App.tsx` を開き、`import { useState } from 'react';` を追加",
        "`App.tsx` 内で `const [count, setCount] = useState<number>(0);` を宣言",
        "加算・減算・リセット用のボタンを実装し、`setCount((prev) => prev + 1)` のように関数型更新も試す:",
        "CODE:tsx:import { useState } from 'react';\nimport { Header } from './components/Header';\nimport { Sushi } from './components/Sushi';\nimport { Footer } from './components/Footer';\n\nconst App: React.FC = () => {\n  const [count, setCount] = useState<number>(0);\n  return (\n    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>\n      <Header title=\"React + TypeScript Hands-on\" subtitle=\"Step 2: TSX の基本構文を確認します。\" />\n      <section>\n        <p>Count: {count}</p>\n        <button onClick={() => setCount((prev) => prev + 1)}>+1</button>\n        <button onClick={() => setCount((prev) => prev - 1)}>-1</button>\n        <button onClick={() => setCount(0)}>Reset</button>\n      </section>\n      <Sushi name=\"いくら\" price={200} />\n      <Footer />\n    </main>\n  );\n};\n\nexport default App;",
      ],
    },
    {
      title: "Step 6: イベントハンドリングとフォーム",
      description:
        "Controlled Componentでフォームを実装し、イベント引数に型を付けます。",
      bullets: [
        "`src/App.tsx` を開き、`const [taskInput, setTaskInput] = useState<string>('');` を追加",
        "`handleChange` と `handleSubmit` 関数を定義し、フォームを実装:",
        "CODE:tsx:import { useState } from 'react';\nimport { Header } from './components/Header';\nimport { Sushi } from './components/Sushi';\nimport { Footer } from './components/Footer';\n\nconst App: React.FC = () => {\n  const [count, setCount] = useState<number>(0);\n  const [taskInput, setTaskInput] = useState<string>('');\n\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setTaskInput(event.target.value);\n  };\n\n  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {\n    event.preventDefault();\n    if (!taskInput.trim()) return;\n    console.log(taskInput);\n    setTaskInput('');\n  };\n\n  return (\n    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>\n      <Header title=\"React + TypeScript Hands-on\" subtitle=\"Step 2: TSX の基本構文を確認します。\" />\n      <section>\n        <p>Count: {count}</p>\n        <button onClick={() => setCount((prev) => prev + 1)}>+1</button>\n        <button onClick={() => setCount((prev) => prev - 1)}>-1</button>\n        <button onClick={() => setCount(0)}>Reset</button>\n      </section>\n      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>\n        <input value={taskInput} onChange={handleChange} />\n        <button type=\"submit\">Add</button>\n      </form>\n      <Sushi name=\"いくら\" price={200} />\n      <Footer />\n    </main>\n  );\n};\n\nexport default App;",
        "**動作確認**: 入力フィールドに文字を入力すると、リアルタイムで入力値が反映される（Controlled Componentの動作）",
        "**動作確認**: 「Add」ボタンをクリックまたはEnterキーを押すと、ブラウザのコンソールに入力値が表示される",
        "**動作確認**: 送信後、入力フィールドが自動的にクリアされる（`setTaskInput('')` の効果）",
        "**動作確認**: 空文字やスペースのみの場合は送信されない（`if (!taskInput.trim()) return;` の効果）",
        "**補足: `event.preventDefault()` の重要性**: フォーム送信時、デフォルトではブラウザがページをリロードします。`event.preventDefault()` がないと、フォーム送信のたびにページがリロードされ、入力値が消え、Reactの状態もリセットされてしまいます。SPA（Single Page Application）では、ページリロードを防ぐことで、スムーズなユーザー体験を提供できます。試しに `event.preventDefault()` をコメントアウトして送信すると、ページがリロードされることを確認できます。",
      ],
    },
    {
      title: "Step 7: 条件付きレンダリング",
      description:
        "booleanやユニオン型のstateを使って表示/非表示や状態別UIを切り替えます。",
      bullets: [
        "`src/App.tsx` を開き、`const [isVisible, setIsVisible] = useState<boolean>(true);` を追加",
        "文字列ユニオン型: `type LoginState = 'guest' | 'logged-in'; const [loginState, setLoginState] = useState<LoginState>('guest');` を定義",
        "条件付きレンダリングを実装:",
        "CODE:tsx:import { useState } from 'react';\nimport { Header } from './components/Header';\nimport { Sushi } from './components/Sushi';\nimport { Footer } from './components/Footer';\n\ntype LoginState = 'guest' | 'logged-in';\n\nconst App: React.FC = () => {\n  const [count, setCount] = useState<number>(0);\n  const [taskInput, setTaskInput] = useState<string>('');\n  const [isVisible, setIsVisible] = useState<boolean>(true);\n  const [loginState, setLoginState] = useState<LoginState>('guest');\n\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setTaskInput(event.target.value);\n  };\n\n  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {\n    event.preventDefault();\n    if (!taskInput.trim()) return;\n    console.log(taskInput);\n    setTaskInput('');\n  };\n\n  return (\n    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>\n      <Header title=\"React + TypeScript Hands-on\" subtitle=\"Step 2: TSX の基本構文を確認します。\" />\n      <section>\n        <p>Count: {count}</p>\n        <button onClick={() => setCount((prev) => prev + 1)}>+1</button>\n        <button onClick={() => setCount((prev) => prev - 1)}>-1</button>\n        <button onClick={() => setCount(0)}>Reset</button>\n      </section>\n      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>\n        <input value={taskInput} onChange={handleChange} />\n        <button type=\"submit\">Add</button>\n      </form>\n      <section style={{ marginTop: '1rem' }}>\n        {isVisible ? <p>表示中</p> : <p>隠れています</p>}\n        <button onClick={() => setIsVisible((prev) => !prev)}>\n          {isVisible ? 'Hide' : 'Show'}\n        </button>\n        <p>Status: {loginState === 'guest' ? 'ゲスト' : 'ログイン済み'}</p>\n        <button onClick={() => setLoginState('logged-in')}>ログインする</button>\n      </section>\n      <Sushi name=\"いくら\" price={200} />\n      <Footer />\n    </main>\n  );\n};\n\nexport default App;",
      ],
    },
    {
      title: "Step 8: 配列 + map でTodoリスト",
      description:
        "tasks配列に型を付け、mapとキーでリストを描画し、完了/削除の操作を実装します。",
      bullets: [
        "`src/App.tsx` を開き、`type Task = { id: number; title: string; isDone: boolean }; const [tasks, setTasks] = useState<Task[]>([]);` を追加",
        "`handleAddTask`, `handleToggle`, `handleDelete` 関数を実装し、フォーム送信時にタスクを追加するように `handleSubmit` を修正:",
        "CODE:tsx:import { useState } from 'react';\nimport { Header } from './components/Header';\nimport { Sushi } from './components/Sushi';\nimport { Footer } from './components/Footer';\n\ntype Task = { id: number; title: string; isDone: boolean };\n\ntype LoginState = 'guest' | 'logged-in';\n\nconst App: React.FC = () => {\n  const [count, setCount] = useState<number>(0);\n  const [taskInput, setTaskInput] = useState<string>('');\n  const [tasks, setTasks] = useState<Task[]>([]);\n  const [isVisible, setIsVisible] = useState<boolean>(true);\n  const [loginState, setLoginState] = useState<LoginState>('guest');\n\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setTaskInput(event.target.value);\n  };\n\n  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {\n    event.preventDefault();\n    if (!taskInput.trim()) return;\n    setTasks((prev) => [...prev, { id: Date.now(), title: taskInput, isDone: false }]);\n    setTaskInput('');\n  };\n\n  const handleToggle = (id: number) =>\n    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)));\n\n  const handleDelete = (id: number) =>\n    setTasks((prev) => prev.filter((task) => task.id !== id));\n\n  return (\n    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>\n      <Header title=\"React + TypeScript Hands-on\" subtitle=\"Step 2: TSX の基本構文を確認します。\" />\n      <section>\n        <p>Count: {count}</p>\n        <button onClick={() => setCount((prev) => prev + 1)}>+1</button>\n        <button onClick={() => setCount((prev) => prev - 1)}>-1</button>\n        <button onClick={() => setCount(0)}>Reset</button>\n      </section>\n      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>\n        <input value={taskInput} onChange={handleChange} />\n        <button type=\"submit\">Add</button>\n      </form>\n      <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>\n        {tasks.map((task) => (\n          <li key={task.id} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>\n            <input\n              type=\"checkbox\"\n              checked={task.isDone}\n              onChange={() => handleToggle(task.id)}\n            />\n            <span style={{ textDecoration: task.isDone ? 'line-through' : 'none', opacity: task.isDone ? 0.5 : 1 }}>\n              {task.title}\n            </span>\n            <button onClick={() => handleDelete(task.id)}>Delete</button>\n          </li>\n        ))}\n      </ul>\n      <section style={{ marginTop: '1rem' }}>\n        {isVisible ? <p>表示中</p> : <p>隠れています</p>}\n        <button onClick={() => setIsVisible((prev) => !prev)}>\n          {isVisible ? 'Hide' : 'Show'}\n        </button>\n        <p>Status: {loginState === 'guest' ? 'ゲスト' : 'ログイン済み'}</p>\n        <button onClick={() => setLoginState('logged-in')}>ログインする</button>\n      </section>\n      <Sushi name=\"いくら\" price={200} />\n      <Footer />\n    </main>\n  );\n};\n\nexport default App;",
        "**動作確認**: フォームに入力して「Add」ボタンを押すと、タスクがリストに追加される",
        "**動作確認**: チェックボックスをクリックすると、タスクの完了状態が切り替わり、取り消し線が表示される",
        "**動作確認**: 「Delete」ボタンをクリックすると、該当タスクがリストから削除される",
      ],
    },
    {
      title: "Step 9: フォーム + バリデーション",
      description:
        "複数フィールドのフォームを1つのstateで管理し、型に沿ったバリデーションメッセージを表示します。",
      bullets: [
        "`src/App.tsx` を開き、`type ProfileForm = { name: string; email: string; age: number | ''; note: string };` を定義",
        "`const [form, setForm] = useState<ProfileForm>({ name: '', email: '', age: '', note: '' });` と `const [errors, setErrors] = useState<Partial<Record<keyof ProfileForm, string>>>({});` を追加",
        "`handleFormChange` と `handleFormSubmit` 関数を実装し、プロフィールフォームを追加:",
        "CODE:tsx:import { useState } from 'react';\nimport { Header } from './components/Header';\nimport { Sushi } from './components/Sushi';\nimport { Footer } from './components/Footer';\n\ntype Task = { id: number; title: string; isDone: boolean };\ntype ProfileForm = { name: string; email: string; age: number | ''; note: string };\ntype LoginState = 'guest' | 'logged-in';\n\nconst App: React.FC = () => {\n  const [count, setCount] = useState<number>(0);\n  const [taskInput, setTaskInput] = useState<string>('');\n  const [tasks, setTasks] = useState<Task[]>([]);\n  const [form, setForm] = useState<ProfileForm>({ name: '', email: '', age: '', note: '' });\n  const [errors, setErrors] = useState<Partial<Record<keyof ProfileForm, string>>>({});\n  const [isVisible, setIsVisible] = useState<boolean>(true);\n  const [loginState, setLoginState] = useState<LoginState>('guest');\n\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setTaskInput(event.target.value);\n  };\n\n  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {\n    event.preventDefault();\n    if (!taskInput.trim()) return;\n    setTasks((prev) => [...prev, { id: Date.now(), title: taskInput, isDone: false }]);\n    setTaskInput('');\n  };\n\n  const handleFormChange = (field: keyof ProfileForm) => (\n    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>\n  ) => {\n    const value = field === 'age' ? (event.target.value === '' ? '' : Number(event.target.value)) : event.target.value;\n    setForm((prev) => ({ ...prev, [field]: value }));\n  };\n\n  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {\n    event.preventDefault();\n    const nextErrors: typeof errors = {};\n    if (!form.name.trim()) nextErrors.name = '名前は必須です';\n    if (!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(form.email)) nextErrors.email = 'メール書式が不正です';\n    if (form.age === '' || form.age < 18) nextErrors.age = '18歳以上のみ登録できます';\n    setErrors(nextErrors);\n    if (Object.keys(nextErrors).length === 0) {\n      console.log(form);\n      setForm({ name: '', email: '', age: '', note: '' });\n      setErrors({});\n    }\n  };\n\n  const handleToggle = (id: number) =>\n    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)));\n\n  const handleDelete = (id: number) =>\n    setTasks((prev) => prev.filter((task) => task.id !== id));\n\n  return (\n    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>\n      <Header title=\"React + TypeScript Hands-on\" subtitle=\"Step 2: TSX の基本構文を確認します。\" />\n      <section>\n        <p>Count: {count}</p>\n        <button onClick={() => setCount((prev) => prev + 1)}>+1</button>\n        <button onClick={() => setCount((prev) => prev - 1)}>-1</button>\n        <button onClick={() => setCount(0)}>Reset</button>\n      </section>\n      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>\n        <input value={taskInput} onChange={handleChange} />\n        <button type=\"submit\">Add</button>\n      </form>\n      <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>\n        {tasks.map((task) => (\n          <li key={task.id} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>\n            <input\n              type=\"checkbox\"\n              checked={task.isDone}\n              onChange={() => handleToggle(task.id)}\n            />\n            <span style={{ textDecoration: task.isDone ? 'line-through' : 'none', opacity: task.isDone ? 0.5 : 1 }}>\n              {task.title}\n            </span>\n            <button onClick={() => handleDelete(task.id)}>Delete</button>\n          </li>\n        ))}\n      </ul>\n      <form onSubmit={handleFormSubmit} style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: 400 }}>\n        <div>\n          <input\n            type=\"text\"\n            placeholder=\"名前\"\n            value={form.name}\n            onChange={handleFormChange('name')}\n            style={{ width: '100%', padding: '0.5rem' }}\n          />\n          {errors.name && <p style={{ color: 'red', fontSize: '0.875rem', margin: '0.25rem 0' }}>{errors.name}</p>}\n        </div>\n        <div>\n          <input\n            type=\"email\"\n            placeholder=\"メールアドレス\"\n            value={form.email}\n            onChange={handleFormChange('email')}\n            style={{ width: '100%', padding: '0.5rem' }}\n          />\n          {errors.email && <p style={{ color: 'red', fontSize: '0.875rem', margin: '0.25rem 0' }}>{errors.email}</p>}\n        </div>\n        <div>\n          <input\n            type=\"number\"\n            placeholder=\"年齢\"\n            value={form.age}\n            onChange={handleFormChange('age')}\n            style={{ width: '100%', padding: '0.5rem' }}\n          />\n          {errors.age && <p style={{ color: 'red', fontSize: '0.875rem', margin: '0.25rem 0' }}>{errors.age}</p>}\n        </div>\n        <div>\n          <textarea\n            placeholder=\"備考\"\n            value={form.note}\n            onChange={handleFormChange('note')}\n            style={{ width: '100%', padding: '0.5rem' }}\n          />\n        </div>\n        <button type=\"submit\">送信</button>\n      </form>\n      <section style={{ marginTop: '1rem' }}>\n        {isVisible ? <p>表示中</p> : <p>隠れています</p>}\n        <button onClick={() => setIsVisible((prev) => !prev)}>\n          {isVisible ? 'Hide' : 'Show'}\n        </button>\n        <p>Status: {loginState === 'guest' ? 'ゲスト' : 'ログイン済み'}</p>\n        <button onClick={() => setLoginState('logged-in')}>ログインする</button>\n      </section>\n      <Sushi name=\"いくら\" price={200} />\n      <Footer />\n    </main>\n  );\n};\n\nexport default App;",
        "**動作確認**: 名前を空欄にして送信すると、「名前は必須です」というエラーメッセージが表示される",
        "**動作確認**: メールアドレスの形式が不正な場合、「メール書式が不正です」というエラーメッセージが表示される",
        "**動作確認**: 年齢が18未満の場合、「18歳以上のみ登録できます」というエラーメッセージが表示される",
        "**動作確認**: すべてのバリデーションが通ると、コンソールにフォームデータが表示され、フォームがクリアされる",
      ],
    },
    {
      title: "Step 10: useEffect とデータ取得",
      description:
        "副作用フックでライフサイクルを理解し、fetchで外部データを読み込みます。",
      bullets: [
        "`src/App.tsx` を開き、`import { useState, useEffect } from 'react';` に変更",
        "`type User = { id: number; name: string; email: string };` を定義し、`const [users, setUsers] = useState<User[]>([]); const [loading, setLoading] = useState(true); const [error, setError] = useState('');` を追加",
        "`useEffect` でデータ取得を実装し、取得したデータを表示:",
        "CODE:tsx:import { useState, useEffect } from 'react';\nimport { Header } from './components/Header';\nimport { Sushi } from './components/Sushi';\nimport { Footer } from './components/Footer';\n\ntype Task = { id: number; title: string; isDone: boolean };\ntype ProfileForm = { name: string; email: string; age: number | ''; note: string };\ntype User = { id: number; name: string; email: string };\ntype LoginState = 'guest' | 'logged-in';\n\nconst App: React.FC = () => {\n  const [count, setCount] = useState<number>(0);\n  const [taskInput, setTaskInput] = useState<string>('');\n  const [tasks, setTasks] = useState<Task[]>([]);\n  const [form, setForm] = useState<ProfileForm>({ name: '', email: '', age: '', note: '' });\n  const [errors, setErrors] = useState<Partial<Record<keyof ProfileForm, string>>>({});\n  const [users, setUsers] = useState<User[]>([]);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState('');\n  const [isVisible, setIsVisible] = useState<boolean>(true);\n  const [loginState, setLoginState] = useState<LoginState>('guest');\n\n  useEffect(() => {\n    const controller = new AbortController();\n    const load = async () => {\n      try {\n        setLoading(true);\n        const res = await fetch('https://jsonplaceholder.typicode.com/users', { signal: controller.signal });\n        if (!res.ok) throw new Error('Failed to fetch');\n        const data: User[] = await res.json();\n        setUsers(data);\n      } catch (err) {\n        if (err instanceof Error && err.name !== 'AbortError') setError(err.message);\n      } finally {\n        setLoading(false);\n      }\n    };\n    load();\n    return () => controller.abort();\n  }, []);\n\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setTaskInput(event.target.value);\n  };\n\n  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {\n    event.preventDefault();\n    if (!taskInput.trim()) return;\n    setTasks((prev) => [...prev, { id: Date.now(), title: taskInput, isDone: false }]);\n    setTaskInput('');\n  };\n\n  const handleFormChange = (field: keyof ProfileForm) => (\n    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>\n  ) => {\n    const value = field === 'age' ? (event.target.value === '' ? '' : Number(event.target.value)) : event.target.value;\n    setForm((prev) => ({ ...prev, [field]: value }));\n  };\n\n  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {\n    event.preventDefault();\n    const nextErrors: typeof errors = {};\n    if (!form.name.trim()) nextErrors.name = '名前は必須です';\n    if (!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(form.email)) nextErrors.email = 'メール書式が不正です';\n    if (form.age === '' || form.age < 18) nextErrors.age = '18歳以上のみ登録できます';\n    setErrors(nextErrors);\n    if (Object.keys(nextErrors).length === 0) {\n      console.log(form);\n      setForm({ name: '', email: '', age: '', note: '' });\n      setErrors({});\n    }\n  };\n\n  const handleToggle = (id: number) =>\n    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)));\n\n  const handleDelete = (id: number) =>\n    setTasks((prev) => prev.filter((task) => task.id !== id));\n\n  return (\n    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>\n      <Header title=\"React + TypeScript Hands-on\" subtitle=\"Step 2: TSX の基本構文を確認します。\" />\n      <section>\n        <p>Count: {count}</p>\n        <button onClick={() => setCount((prev) => prev + 1)}>+1</button>\n        <button onClick={() => setCount((prev) => prev - 1)}>-1</button>\n        <button onClick={() => setCount(0)}>Reset</button>\n      </section>\n      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>\n        <input value={taskInput} onChange={handleChange} />\n        <button type=\"submit\">Add</button>\n      </form>\n      <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>\n        {tasks.map((task) => (\n          <li key={task.id} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>\n            <input\n              type=\"checkbox\"\n              checked={task.isDone}\n              onChange={() => handleToggle(task.id)}\n            />\n            <span style={{ textDecoration: task.isDone ? 'line-through' : 'none', opacity: task.isDone ? 0.5 : 1 }}>\n              {task.title}\n            </span>\n            <button onClick={() => handleDelete(task.id)}>Delete</button>\n          </li>\n        ))}\n      </ul>\n      <section style={{ marginTop: '2rem' }}>\n        <h2>ユーザー一覧</h2>\n        {loading && <p>読み込み中...</p>}\n        {error && <p style={{ color: 'red' }}>エラー: {error}</p>}\n        {!loading && !error && (\n          <ul style={{ listStyle: 'none', padding: 0 }}>\n            {users.map((user) => (\n              <li key={user.id} style={{ marginBottom: '0.5rem', padding: '0.5rem', border: '1px solid #ddd', borderRadius: 4 }}>\n                <strong>{user.name}</strong> - {user.email}\n              </li>\n            ))}\n          </ul>\n        )}\n      </section>\n      <form onSubmit={handleFormSubmit} style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: 400 }}>\n        <div>\n          <input\n            type=\"text\"\n            placeholder=\"名前\"\n            value={form.name}\n            onChange={handleFormChange('name')}\n            style={{ width: '100%', padding: '0.5rem' }}\n          />\n          {errors.name && <p style={{ color: 'red', fontSize: '0.875rem', margin: '0.25rem 0' }}>{errors.name}</p>}\n        </div>\n        <div>\n          <input\n            type=\"email\"\n            placeholder=\"メールアドレス\"\n            value={form.email}\n            onChange={handleFormChange('email')}\n            style={{ width: '100%', padding: '0.5rem' }}\n          />\n          {errors.email && <p style={{ color: 'red', fontSize: '0.875rem', margin: '0.25rem 0' }}>{errors.email}</p>}\n        </div>\n        <div>\n          <input\n            type=\"number\"\n            placeholder=\"年齢\"\n            value={form.age}\n            onChange={handleFormChange('age')}\n            style={{ width: '100%', padding: '0.5rem' }}\n          />\n          {errors.age && <p style={{ color: 'red', fontSize: '0.875rem', margin: '0.25rem 0' }}>{errors.age}</p>}\n        </div>\n        <div>\n          <textarea\n            placeholder=\"備考\"\n            value={form.note}\n            onChange={handleFormChange('note')}\n            style={{ width: '100%', padding: '0.5rem' }}\n          />\n        </div>\n        <button type=\"submit\">送信</button>\n      </form>\n      <section style={{ marginTop: '1rem' }}>\n        {isVisible ? <p>表示中</p> : <p>隠れています</p>}\n        <button onClick={() => setIsVisible((prev) => !prev)}>\n          {isVisible ? 'Hide' : 'Show'}\n        </button>\n        <p>Status: {loginState === 'guest' ? 'ゲスト' : 'ログイン済み'}</p>\n        <button onClick={() => setLoginState('logged-in')}>ログインする</button>\n      </section>\n      <Sushi name=\"いくら\" price={200} />\n      <Footer />\n    </main>\n  );\n};\n\nexport default App;",
        "**動作確認**: ページを読み込むと、自動的にAPIからユーザーデータが取得される（useEffectの動作）",
        "**動作確認**: データ取得中は「読み込み中...」が表示される",
        "**動作確認**: データ取得が成功すると、ユーザー一覧が表示される",
        "**動作確認**: エラーが発生した場合、エラーメッセージが表示される",
        "**補足**: `useEffect` の依存配列が `[]` なので、コンポーネントのマウント時に1回だけ実行される",
      ],
    },
  ],
  practice: [
    {
      title: "ハンズオン課題 1: カウンターダッシュボード",
      description: "複数のカウンターカードを並べ、Props と useState を組み合わせたダッシュボードを構築します。",
      steps: [
        "`git checkout -b feature/counter-dashboard` でブランチを作成",
        "`src/components/CounterPanel.tsx` を作り、`type CounterPanelProps = { label: string; initialValue?: number; step?: number };` を定義",
        "CounterPanelコンポーネントを実装:",
        "CODE:tsx:import { useState } from 'react';\n\ntype CounterPanelProps = {\n  label: string;\n  initialValue?: number;\n  step?: number;\n};\n\nexport const CounterPanel = ({ label, initialValue = 0, step = 1 }: CounterPanelProps) => {\n  const [value, setValue] = useState<number>(initialValue);\n  return (\n    <section style={{ border: '1px solid #ddd', borderRadius: 12, padding: '1rem', width: 220 }}>\n      <p style={{ fontSize: 14, color: '#666' }}>{label}</p>\n      <strong style={{ fontSize: 32 }}>{value}</strong>\n      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>\n        <button onClick={() => setValue((prev) => prev + step)}>+{step}</button>\n        <button onClick={() => setValue((prev) => prev - step)}>-{step}</button>\n        <button onClick={() => setValue(initialValue)}>Reset</button>\n      </div>\n    </section>\n  );\n};",
        "App.tsx で CounterPanel を3つ並べ、props に違う `step` や `label` を渡して再利用性を確認",
        "`useEffect` で全パネルの合計値を監視し、document.title に反映する（任意）",
      ],
    },
    {
      title: "ハンズオン課題 2: Todoマネージャー",
      description: "Step 6〜8を発展させ、フィルター付きのTodoリストを完成させます。",
      steps: [
        "`type Todo = { id: string; text: string; completed: boolean; createdAt: string };` を宣言",
        "`TodoForm.tsx`, `TodoList.tsx`, `TodoItem.tsx` に分割し、props で `Todo[]` とハンドラを受け取る",
        "TodoItemコンポーネントを実装:",
        "CODE:tsx:type TodoItemProps = {\n  todo: Todo;\n  onToggle: (id: string) => void;\n  onDelete: (id: string) => void;\n};\n\nexport const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => (\n  <li style={{ opacity: todo.completed ? 0.5 : 1 }}>\n    <label>\n      <input\n        type=\"checkbox\"\n        checked={todo.completed}\n        onChange={() => onToggle(todo.id)}\n      />\n      {todo.text}\n    </label>\n    <button onClick={() => onDelete(todo.id)}>Delete</button>\n  </li>\n);",
        "フィルター用の `type Filter = 'all' | 'active' | 'done'; const [filter, setFilter] = useState<Filter>('all');` を追加",
        "localStorage に保存/復元する `useEffect` を追加し、ページリロード後もデータを保持",
      ],
    },
    {
      title: "ハンズオン課題 3: ユーザー登録フォーム",
      description: "Step 9 をベースに、条件付きレンダリングでフォームと送信完了UIを切り替えます。",
      steps: [
        "`type RegisterForm = { name: string; email: string; password: string; confirmPassword: string; agree: boolean };` を定義",
        "`useReducer` または `useState` でフォーム状態とエラー状態を分離し、バリデーションロジックを関数化",
        "パスワード確認、利用規約チェック、送信ボタンの disabled 制御など実務で必要な分岐を追加",
        "送信後は条件付きレンダリングで確認用のサマリーカードを表示し、別コンポーネント `RegistrationResult.tsx` に切り出して表示",
      ],
    },
    {
      title: "ハンズオン課題 4: 天気情報ウィジェット",
      description: "公開API（例: https://api.open-meteo.com/ ）を使って天気を取得し、カードに表示します。",
      steps: [
        "`type WeatherResponse = { current_weather: { temperature: number; windspeed: number; weathercode: number } };` を定義",
        "`const [weather, setWeather] = useState<WeatherResponse | null>(null); const [error, setError] = useState<string>('');` を追加",
        "`useEffect` で API を呼び、ローディング/エラー/成功の3状態を表示",
        "都市を入力できるフォームと「再取得」ボタンを用意し、fetch関数を再利用",
        "スタイルやアイコンを調整し、カード1枚で情報が伝わるデザインに仕上げる",
      ],
    },
  ],
  timeline: [
    "Step 1: Vite + TypeScript プロジェクトの初期化",
    "Step 2: TSX の基本構文でUIを描画",
    "Step 3: コンポーネント分割とレイアウト整理",
    "Step 4: Props/型定義でデータを渡す",
    "Step 5: useState で状態管理",
    "Step 6: イベントとフォーム入力を制御",
    "Step 7: 条件付きレンダリングでUIを切り替え",
    "Step 8: リスト + キーでタスク管理",
    "Step 9: フォーム + バリデーション",
    "Step 10: useEffect + データ取得",
  ],
  resources: [
    {
      label: "React 公式ドキュメント",
      description: "Learn React – Official Tutorial",
      url: "https://react.dev/learn",
    },
    {
      label: "TypeScript + React チートシート",
      description: "React + TypeScript の型付けリファレンス",
      url: "https://react-typescript-cheatsheet.netlify.app/",
    },
    {
      label: "Vite 公式ドキュメント",
      description: "Viteの設定と開発フロー",
      url: "https://vitejs.dev/",
    },
  ],
  branchTip: "推奨ブランチ: feature/react-fundamentals など用途に応じて切り分け",
};


const nextCurriculum: CurriculumContent = {
  slug: "next",
  title: "Next.js Fundamentals",
  subtitle: "おまけ: Next.js App Router",
  summary:
    "ViteでReactの基礎を学んだ後、Next.js（App Router）を使った実践的なWebアプリケーション開発を学ぶ追加カリキュラムです。",
  heroHighlight: "Full-Stack Framework",
  estimatedHours: "8-10h",
  prerequisites: [
    "Vite + React の基礎（課題 1-1 〜 1-3 を完了）",
    "Node.js 20 LTS 以上 + npm 10 以上",
    "ReactのuseStateとフォーム処理の理解",
  ],
  learningGoals: [
    "Next.jsとReactの役割の違いを理解し、App Router構成でプロジェクトを初期化できる。",
    "App Routerのファイルベースルーティングを理解し、ページを作成できる。",
    "Server ComponentsとClient Componentsの違いを理解する。",
    "Next.jsのビルドとデプロイの流れを理解する。",
  ],
  sections: [
    {
      title: "Next.jsとは",
      description:
        "Next.jsはReactをベースにしたフルスタックフレームワークで、ルーティング、SSR、SSGなどの機能を提供します。",
      bullets: [
        "React単体との違い：ルーティング、SSR、画像最適化などが自動化される",
        "App Router：ファイルベースのルーティングシステム",
        "Server Components：サーバー側でレンダリングされるコンポーネント",
      ],
    },
    {
      title: "環境構築とブランチ戦略",
      description:
        "main を最新化してから next-1-1 ブランチを切り、`next` ディレクトリを用意し create-next-app を実行します。",
      bullets: [
        "git checkout main && git pull → git checkout -b next-1-1",
        "`npx create-next-app@latest my-app`（App Router を Yes）",
        "`npm run dev` で http://localhost:3000 を確認し、初回コミット",
      ],
    },
    {
      title: "App Routerの基本",
      description:
        "App Routerでは `app` ディレクトリ内のフォルダ構造がそのままルーティングになります。",
      bullets: [
        "`app/page.tsx` が `/` ルートになる",
        "`app/about/page.tsx` が `/about` ルートになる",
        "`use client` ディレクティブでClient Componentsを明示する",
      ],
    },
    {
      title: "Server ComponentsとClient Components",
      description:
        "Next.jsではデフォルトでServer Componentsですが、インタラクティブな機能にはClient Componentsが必要です。",
      bullets: [
        "Server Components：サーバー側でレンダリング、useState/useEffectは使えない",
        "Client Components：`use client`を付けて、useState/useEffectが使える",
        "適切に使い分けることでパフォーマンスを最適化できる",
      ],
    },
  ],
  practice: [
    {
      title: "課題: Next.jsアプリの作成",
      description: "create-next-appでNext.jsアプリを初期化し、基本的なページ構造を確認します。",
      steps: [
        "next-1-1 ブランチを切る",
        "create-next-appでプロジェクトを作成",
        "app/page.tsxを編集して動作確認",
      ],
    },
    {
      title: "課題: 複数ページの作成",
      description: "App Routerを使って複数のページを作成し、ナビゲーションを実装します。",
      steps: [
        "next-1-2 ブランチを作成",
        "app/about/page.tsxとapp/contact/page.tsxを作成",
        "Linkコンポーネントでナビゲーションを実装",
      ],
    },
    {
      title: "課題: Client Componentの実装",
      description: "useStateを使ったインタラクティブなコンポーネントをClient Componentとして実装します。",
      steps: [
        "next-1-3 ブランチで `use client` を使ったコンポーネントを作成",
        "カウンターやフォームなどのインタラクティブな機能を実装",
        "Server ComponentとClient Componentの使い分けを理解する",
      ],
    },
  ],
  timeline: [
    "next-1-1: Next.js プロジェクトの初期化と基本構造の理解",
    "next-1-2: App Routerを使った複数ページの作成",
    "next-1-3: Client ComponentsとServer Componentsの使い分け",
    "next-1-4: ビルドとデプロイの流れを確認",
  ],
  resources: [
    { label: "docs/next-js.md", description: "Next.js × React 入門（詳細手順）" },
    {
      label: "docs/next-js-ts.md",
      description: "TypeScript 版の補足資料。型の付け方やフォームの書き換え方を確認できます。",
    },
    {
      label: "Next.js 公式ドキュメント",
      description: "App Router、Server Components、ルーティングなどの詳細",
      url: "https://nextjs.org/docs",
    },
  ],
  branchTip: "推奨ブランチ: next-1-1 → next-1-2 → next-1-3",
};

const todoCurriculum: CurriculumContent = {
  slug: "todo",
  title: "TODOリストアプリ作成",
  subtitle: "課題 2-1 〜 2-3",
  summary:
    "docs/next-js.md と docs/next-js-ts.md を参考に、Viteで学んだ基礎を統合して実践的なTODOリストアプリを作成するハンズオンカリキュラムです。配列の状態管理、フィルタリング、CRUD操作を学びます。",
  heroHighlight: "Practical Application",
  estimatedHours: "8-10h",
  prerequisites: [
    "Vite + React の基礎（課題 1-1 〜 1-3 を完了）",
    "useState とフォーム処理の理解",
    "配列操作（map, filter）の基礎知識",
  ],
  learningGoals: [
    "useStateで配列を管理し、追加・削除・更新の操作を実装できる。",
    "フィルタリング機能を実装し、条件に応じた表示切り替えができる。",
    "フォーム入力とバリデーションを組み合わせた実践的なUIを作成できる。",
    "コンポーネント分割の考え方を理解し、再利用可能なコードを書ける。",
  ],
  sections: [
    {
      title: "TODOリストの基本構造",
      description:
        "課題 2-1 では、TODOアイテムの型定義と、追加・表示の基本機能を実装します。",
      bullets: [
        "TODOアイテムの型を定義（id, text, completed）",
        "useStateでTODO配列を管理する",
        "入力フォームと追加ボタンで新しいTODOを追加する",
        "map関数でTODOリストを表示する",
      ],
    },
    {
      title: "完了状態の切り替えと削除",
      description:
        "課題 2-2 では、チェックボックスで完了状態を切り替え、削除ボタンでTODOを削除する機能を追加します。",
      bullets: [
        "チェックボックスでcompleted状態を切り替える",
        "filter関数を使って削除機能を実装する",
        "条件付きレンダリングで完了済みTODOにスタイルを適用する",
      ],
    },
    {
      title: "フィルタリング機能",
      description:
        "課題 2-3 では、すべて/未完了/完了済みでフィルタリングする機能を実装します。",
      bullets: [
        "フィルター状態をuseStateで管理する",
        "filter関数で表示するTODOを絞り込む",
        "タブやボタンでフィルターを切り替えるUIを実装する",
      ],
    },
    {
      title: "コンポーネント分割とリファクタリング",
      description:
        "機能が完成したら、コンポーネントを分割してコードの可読性と再利用性を向上させます。",
      bullets: [
        "TodoItemコンポーネントを分離する",
        "TodoFormコンポーネントを分離する",
        "FilterButtonsコンポーネントを分離する",
        "propsの型定義を追加する（TypeScript使用時）",
      ],
    },
  ],
  practice: [
    {
      title: "課題 2-1: 基本的なTODOリスト",
      description: "TODOの追加と表示機能を実装します。入力フォームとリスト表示を作成しましょう。",
      steps: [
        "vite-2-1 ブランチを切る",
        "TODO型を定義し、useStateで配列を管理する",
        "入力フォームと追加ボタンを実装する",
        "map関数でTODOリストを表示する",
      ],
    },
    {
      title: "課題 2-2: 完了・削除機能",
      description: "チェックボックスで完了状態を切り替え、削除ボタンでTODOを削除できるようにします。",
      steps: [
        "vite-2-2 ブランチを作成",
        "チェックボックスでcompleted状態を更新する関数を実装",
        "削除ボタンでfilter関数を使ってTODOを削除する",
        "完了済みTODOに取り消し線などのスタイルを適用",
      ],
    },
    {
      title: "課題 2-3: フィルタリング機能",
      description: "すべて/未完了/完了済みでフィルタリングする機能を追加します。",
      steps: [
        "vite-2-3 ブランチでフィルター状態を追加",
        "filter関数で表示するTODOを絞り込む",
        "タブやボタンでフィルターを切り替えるUIを実装",
        "PRでフィルタリングの実装方法を説明する",
      ],
    },
  ],
  timeline: [
    "vite-2-1: TODOの追加と表示機能を実装",
    "vite-2-2: 完了状態の切り替えと削除機能を追加",
    "vite-2-3: フィルタリング機能を実装",
    "vite-2-4: コンポーネント分割とリファクタリング（任意）",
  ],
  resources: [
    {
      label: "docs/next-js.md",
      description: "Next.js × React 入門（基本的な実装パターンの参考）",
    },
    {
      label: "docs/next-js-ts.md",
      description: "TypeScript版の補足資料。型定義の参考になります。",
    },
    {
      label: "React 公式: リストとキー",
      description: "リストのレンダリング方法とkey属性の重要性",
      url: "https://react.dev/learn/rendering-lists",
    },
    {
      label: "React 公式: 状態の管理",
      description: "状態管理のベストプラクティス",
      url: "https://react.dev/learn/managing-state",
    },
  ],
  branchTip: "推奨ブランチ: vite-2-1 → vite-2-2 → vite-2-3",
};

const muiCurriculum: CurriculumContent = {
  slug: "mui",
  title: "MUI UI Design",
  subtitle: "コンポーネント活用とテーマ設計",
  summary:
    "Vite + React + MUI を使って AppBar / Card / TextField / sx をTSXで組み立て、状態管理やテーマ拡張まで一気に体験できるカリキュラムです。サンプルコードをそのまま写経し、実装とコンポーネントの役割を同時に学べます。",
  heroHighlight: "Material Design Literacy",
  estimatedHours: "4-6h",
  prerequisites: [
    "Reactの関数コンポーネントとpropsの基礎",
    "Vite + React の基礎（React Fundamentals with Viteカリキュラムを完了していることが望ましい）",
    "npm で @mui/material を導入済みであること",
  ],
  learningGoals: [
    "AppBar・Card・Button・TextField などの代表的なMUIコンポーネントを手を動かしながら把握する。",
    "sx prop や ThemeProvider を使ってレイアウトと配色を素早く調整する。",
    "useState とフォーム入力をMUIのUIパーツに接続し、状態とデザインを同時に管理する。",
    "コンポーネント化したスニペットをカードにまとめ、ハンズオン資料として再利用する。",
  ],
  sections: [
    {
      title: "MUIコンポーネントの役割",
      description:
        "このカリキュラムで使用する主要なMUIコンポーネントの役割と使い方を理解します。",
      bullets: [
        "**AppBar / Toolbar**: アプリケーションのヘッダーやナビゲーションバーを構成します。`position=\"static\"` で固定表示、`position=\"sticky\"` でスクロール時に固定できます。",
        "**Typography**: テキストを表示するコンポーネントです。`variant` プロパティで見出し（`h1`〜`h6`）、本文（`body1`, `body2`）、サブタイトル（`subtitle1`, `subtitle2`）などを指定できます。",
        "**Button**: クリック可能なボタンです。`variant=\"text\"`（テキストのみ）、`variant=\"contained\"`（背景色付き）、`variant=\"outlined\"`（枠線付き）の3種類があります。`color` プロパティで `primary`, `secondary`, `error` などを指定できます。",
        "**Card / CardContent / CardActions**: カード形式のコンテナです。`Card` が外枠、`CardContent` がメインコンテンツ、`CardActions` がボタンなどのアクション要素を配置する領域です。",
        "**Stack**: Flexboxレイアウトを簡単に実装できるコンポーネントです。`direction=\"row\"` または `\"column\"` で方向を指定し、`spacing` で要素間の余白を設定できます。",
        "**List / ListItem / ListItemIcon / ListItemText**: リスト表示を実装します。`List` がリスト全体、`ListItem` が各項目、`ListItemIcon` がアイコン領域、`ListItemText` がテキスト領域です。`secondaryAction` で右側にアクションボタンを配置できます。",
        "**Checkbox**: チェックボックスです。`checked` で状態を制御し、`onChange` で変更を検知します。",
        "**IconButton**: アイコンを表示するボタンです。`@mui/icons-material` からアイコンをインポートして使用します。`edge=\"end\"` で右端に配置できます。",
        "**TextField**: テキスト入力フィールドです。`label` でラベル、`value` と `onChange` で制御コンポーネントとして使用、`error` でエラー表示、`helperText` で補助テキストを表示できます。",
        "**sx prop**: すべてのMUIコンポーネントで使用できるスタイリングプロパティです。CSSプロパティをオブジェクト形式で指定でき、テーマの値（`theme.palette.primary.main` など）も参照できます。`p: 2` は `padding: 16px`、`my: 1` は `margin-top: 8px; margin-bottom: 8px` を意味します。",
        "**ThemeProvider**: アプリ全体のテーマを設定するコンポーネントです。`createTheme()` でテーマを作成し、`palette` でカラーパレット、`shape` で角丸などの形状を統一できます。",
      ],
    },
    {
      title: "コンポーネントカタログ",
      description:
        "AppBar, Typography, Button, Card, Stack など頻出コンポーネントを1画面に並べ、Propsと見た目を確認します。",
      bullets: [
        "Viteプロジェクトで `npm install @mui/material @emotion/react @emotion/styled` を実行してMUIを導入",
        "`src/components/DemoAppBar.tsx` を作成し、以下のコードを実装:",
        "CODE:tsx:import AppBar from '@mui/material/AppBar';\nimport Toolbar from '@mui/material/Toolbar';\nimport Typography from '@mui/material/Typography';\nimport Button from '@mui/material/Button';\n\nexport const DemoAppBar = () => (\n  <AppBar position=\"static\">\n    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>\n      <Typography variant=\"h6\">React Hands-on</Typography>\n      <Button color=\"inherit\" onClick={() => alert('clicked!')}>\n        Start\n      </Button>\n    </Toolbar>\n  </AppBar>\n);",
        "`src/App.tsx` で `import { DemoAppBar } from './components/DemoAppBar';` としてインポートし、`<DemoAppBar />` を配置",
        "`src/components/ButtonDemo.tsx` を作成し、Button variantの比較コンポーネントを実装: variant=\"text\", contained, outlined と color=\"secondary\" を並べて差分を確認",
        "`src/components/CardDemo.tsx` を作成し、Cardテンプレートを実装: `Card -> CardContent -> CardActions` を使い、`Typography` の `variant` を `h6`/`body2` で切り替える",
        "`src/App.tsx` で各コンポーネントを並べて表示し、見た目を確認",
      ],
    },
    {
      title: "状態管理とインタラクション",
      description:
        "useState を用いてボタンやチェックボックスと状態を同期させ、MUIコンポーネントで視覚化します。",
      bullets: [
        "`src/components/CountCard.tsx` を作成し、以下のコードを実装:",
        "CODE:tsx:import { useState } from 'react';\nimport { Card, CardContent, Typography, Stack, Button } from '@mui/material';\n\nexport const CountCard = () => {\n  const [count, setCount] = useState<number>(0);\n  return (\n    <Card sx={{ maxWidth: 360 }}>\n      <CardContent>\n        <Typography variant=\"subtitle2\" color=\"text.secondary\">\n          useState Sample\n        </Typography>\n        <Typography variant=\"h3\" sx={{ my: 1 }}>\n          {count}\n        </Typography>\n        <Stack direction=\"row\" spacing={1}>\n          <Button variant=\"contained\" onClick={() => setCount((prev) => prev + 1)}>\n            +1\n          </Button>\n          <Button variant=\"outlined\" onClick={() => setCount((prev) => prev - 1)}>\n            -1\n          </Button>\n          <Button onClick={() => setCount(0)}>Reset</Button>\n        </Stack>\n      </CardContent>\n    </Card>\n  );\n};",
        "`src/App.tsx` で `import { CountCard } from './components/CountCard';` としてインポートし、`<CountCard />` を配置",
        "`src/components/TaskList.tsx` を作成し、Task配列を `List` と `ListItem` で描画するコンポーネントを実装:",
        "CODE:tsx:import { List, ListItem, ListItemIcon, ListItemText, Checkbox, IconButton } from '@mui/material';\nimport DeleteIcon from '@mui/icons-material/Delete';\n\ntype Task = { id: number; title: string; isDone: boolean };\n\ntype TaskListProps = {\n  tasks: Task[];\n  onToggle: (id: number) => void;\n  onDelete: (id: number) => void;\n};\n\nexport const TaskList = ({ tasks, onToggle, onDelete }: TaskListProps) => (\n  <List>\n    {tasks.map((task) => (\n      <ListItem\n        key={task.id}\n        secondaryAction={\n          <IconButton edge=\"end\" onClick={() => onDelete(task.id)}>\n            <DeleteIcon />\n          </IconButton>\n        }\n      >\n        <ListItemIcon>\n          <Checkbox checked={task.isDone} onChange={() => onToggle(task.id)} />\n        </ListItemIcon>\n        <ListItemText\n          primary={task.title}\n          sx={{ opacity: task.isDone ? 0.4 : 1, textDecoration: task.isDone ? 'line-through' : 'none' }}\n        />\n      </ListItem>\n    ))}\n  </List>\n);",
        "`src/App.tsx` で `import { TaskList } from './components/TaskList';` としてインポートし、`useState` で `tasks` 配列を管理して `<TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />` として使用",
      ],
    },
    {
      title: "フォーム入力と TextField",
      description:
        "TextField + Button のフォームを実装し、エラーメッセージやHelperTextを使ったUX改善まで行います。",
      bullets: [
        "`src/components/TaskForm.tsx` を作成し、以下のコードを実装:",
        "CODE:tsx:import { useState } from 'react';\nimport TextField from '@mui/material/TextField';\nimport Button from '@mui/material/Button';\nimport Stack from '@mui/material/Stack';\n\ntype TaskFormProps = {\n  onSubmit: (title: string) => void;\n};\n\nexport const TaskForm = ({ onSubmit }: TaskFormProps) => {\n  const [title, setTitle] = useState<string>('');\n  const [error, setError] = useState<string>('');\n\n  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {\n    event.preventDefault();\n    if (!title.trim()) {\n      setError('タスク名を入力してください');\n      return;\n    }\n    onSubmit(title.trim());\n    setTitle('');\n    setError('');\n  };\n\n  return (\n    <Stack component=\"form\" direction=\"row\" spacing={1} onSubmit={handleSubmit}>\n      <TextField\n        value={title}\n        onChange={(e) => setTitle(e.target.value)}\n        label=\"タスク名\"\n        size=\"small\"\n        error={Boolean(error)}\n        helperText={error || '例: React勉強会の資料を仕上げる'}\n      />\n      <Button type=\"submit\" variant=\"contained\">\n        追加\n      </Button>\n    </Stack>\n  );\n};",
        "`src/App.tsx` で `import { TaskForm } from './components/TaskForm';` としてインポートし、`<TaskForm onSubmit={handleAddTask} />` として使用（`handleAddTask` は `App.tsx` 内で定義）",
        "**動作確認**: 空文字やスペースのみの場合は return で早期終了し、HelperText で理由が表示される",
        "**動作確認**: 送信後は `setTitle('')` で入力欄がクリアされる",
        "（任意）`@mui/icons-material` をインストールし、Snackbarで完了通知を表示する",
      ],
    },
    {
      title: "sx prop とテーマ",
      description:
        "sx で余白・Flex配置・背景色を整えつつ、ThemeProvider でブランドカラーを反映します。",
      bullets: [
        "`src/components/SxCardDemo.tsx` を作成し、sx propを使ったCardの例を実装:",
        "CODE:tsx:import { Card, CardContent, Typography } from '@mui/material';\n\nexport const SxCardDemo = () => (\n  <Card\n    sx={{\n      p: 3,\n      bgcolor: (theme) => theme.palette.background.paper,\n      boxShadow: 4,\n      borderRadius: 3,\n      display: 'flex',\n      flexDirection: 'column',\n      gap: 2,\n    }}\n  >\n    <Typography variant=\"h5\">sx Prop Tips</Typography>\n    <Typography variant=\"body2\" color=\"text.secondary\">\n      padding, gap, flex などを一箇所で制御できます。\n    </Typography>\n  </Card>\n);",
        "`src/App.tsx` で `import { SxCardDemo } from './components/SxCardDemo';` としてインポートし、`<SxCardDemo />` を配置",
        "`src/main.tsx` を開き、`ThemeProvider` でアプリ全体をラップ:",
        "CODE:tsx:import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { ThemeProvider, createTheme } from '@mui/material/styles';\nimport CssBaseline from '@mui/material/CssBaseline';\nimport App from './App';\n\nconst theme = createTheme({\n  palette: {\n    primary: { main: '#0066FF' },\n    secondary: { main: '#34A853' },\n  },\n  shape: { borderRadius: 12 },\n});\n\nReactDOM.createRoot(document.getElementById('root')!).render(\n  <React.StrictMode>\n    <ThemeProvider theme={theme}>\n      <CssBaseline />\n      <App />\n    </ThemeProvider>\n  </React.StrictMode>\n);",
        "**動作確認**: `palette.primary` を変更すると、AppBar や Button の `color=\"primary\"` に即時反映される",
        "**動作確認**: `shape.borderRadius` を変更すると、すべてのMUIコンポーネントの角丸が統一される",
      ],
    },
  ],
  practice: [
    {
      title: "コンポーネント図鑑を拡張",
      description: "Buttonだけでなく Alert / Tabs / Dialog など頻出UIを追加し、パーツ別カードを増やします。",
      steps: [
        "MUIドキュメントから追加したいコンポーネントを3つ選び、`src/app/page.tsx` にサンプルカードを作成",
        "各カードは `Card` + `CardContent` + `Typography component='pre'` で構成し、Props例やイベントハンドラを記述",
        "Dialog の開閉や Tabs の選択状態は `useState` で管理し、コンポーネントごとに型を付ける",
      ],
    },
    {
      title: "タスクリストをミニワーク化",
      description: "Task カードに詳細やステータス Chip を追加し、完了ボタンで state を更新する演習に落とし込みます。",
      steps: [
        "Task 型に `description` と `status: 'todo' | 'doing' | 'done'` を追加",
        "CardActions に Chip や IconButton を配置し、クリックで status を更新",
        "完了時は Snackbar や Alert でフィードバックを表示し、`List` を map で再描画",
      ],
    },
    {
      title: "テーマカスタマイズ課題",
      description: "theme.ts にブランドカラーとタイポグラフィを設定し、AppBar や Button に即時反映させます。",
      steps: [
        "`createTheme` に `palette.primary` と `palette.secondary` を設定し、`typography.button` でフォントを変更",
        "ThemeRegistry 配下で `CssBaseline` と `GlobalStyles` を適用し、背景色やフォントを全ページで統一",
        "チームのデザインシステムのルールを `docs/next-js.md` 等に追記し、共有できるようにする",
      ],
    },
  ],
  timeline: [
    "MUI の導入と ThemeRegistry の設定確認",
    "コンポーネントカタログでサンプルを整備",
    "状態管理とフォームで動きのあるUIを実装",
    "sx prop とテーマでデザインを仕上げる",
  ],
  resources: [
    {
      label: "MUI 公式ドキュメント",
      description: "Components, System, Theming の各ガイド",
      url: "https://mui.com/material-ui/",
    },
    {
      label: "Material Design 3",
      description: "配色やタイポグラフィのリファレンス",
      url: "https://m3.material.io/",
    },
    {
      label: "MUI 公式ドキュメント - Getting Started",
      description: "Vite + React でのMUI導入方法",
      url: "https://mui.com/material-ui/getting-started/installation/",
    },
  ],
  branchTip: "推奨ブランチ: feature/mui-handson など用途に応じて切り分け",
};


export const curriculumData: Record<CurriculumTopic, CurriculumContent> = {
  vite: viteCurriculum,
  next: nextCurriculum,
  todo: todoCurriculum,
  mui: muiCurriculum,
};

export const curriculumCards = [
  {
    topic: "vite" as const,
    title: "React Fundamentals with Vite",
    description: "Vite × TypeScript で React の基礎から実用的なUIまでを10ステップで学べるハンズオンカリキュラム。",
    path: "/curriculum/vite",
    highlight: "TSX Hands-on",
  },
  {
    topic: "next" as const,
    title: "Next.js Fundamentals",
    description: "Viteで基礎を学んだ後、Next.js（App Router）を使った実践的な開発を学ぶ追加カリキュラム。",
    path: "/curriculum/next",
    highlight: "おまけ",
  },
    {
      topic: "mui" as const,
      title: "MUI UI Design",
      description: "Vite + React + MUI で AppBar / Card / TextField / sx を組み合わせ、Material Design を体験できるハンズオン。",
      path: "/curriculum/mui",
      highlight: "コンポーネント図鑑",
    },
  {
    topic: "todo" as const,
    title: "TODOリストアプリ作成",
    description: "docs/next-js.mdを参考に、Viteで学んだ基礎を統合して実践的なTODOリストアプリを作成するハンズオン。",
    path: "/curriculum/todo",
    highlight: "課題2-1〜2-3",
  },
];
