/* 2019 全港數學思維大激鬥 · 初中組 (S1) 全真試題與核心公式題庫 (20 題全) */
(function() {
  const DECK = window.DECK = window.DECK || [];
  DECK.push({
  "ch": "2019-S1",
  "year": "2019",
  "paper": "初中組 (S1)",
  "title": "2019 全港數學思維大激鬥 · 初中組 (S1)",
  "color": "#1e40af",
  "sections": [
    "第 1~5 題 · 數論與代數基礎",
    "第 6~10 題 · 圖形規律與應用",
    "第 11~15 題 · 行程坐標與幾何",
    "第 16~20 題 · 高階數論與極值"
  ],
  "slides": [
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 1 題",
      "topic": "數論 / 完全平方數判別與計數",
      "score": "[3.0%]",
      "q": "由 101 至 200 之間，共有多少個平方數？<br><span style='color:#64748b;font-size:0.92em;'>How many square numbers are there from 101 to 200?</span>",
      "knowledge": {
        "formulas": [
          "A \\le k^2 \\le B \\implies \\lceil\\sqrt{A}\\rceil \\le k \\le \\lfloor\\sqrt{B}\\rfloor",
          "N = k_{\\max} - k_{\\min} + 1"
        ],
        "points": [
          "<b>平方數界限判定</b>：估算兩端數值的平方根，求出正整數 $k$ 的取值範圍。",
          "<b>連續整數計數</b>：若整數滿足 $a \\le k \\le b$，則個數為 $b - a + 1$。"
        ],
        "pitfall": "審題注意「101 至 200 之間」：101 與 200 本身皆非平方數，故無需糾結開閉區間端點取捨。"
      },
      "solution": {
        "thinking": "設平方數為 $k^2$（$k$ 為正整數），題目條件即 $101 \\le k^2 \\le 200$。",
        "steps": [
          "求取平方根界限：$\\sqrt{101} \\approx 10.05$、$\\sqrt{200} \\approx 14.14$。",
          "符合條件的正整數 $k$ 為：$11, 12, 13, 14$。",
          "驗算各數平方：$11^2 = 121$、$12^2 = 144$、$13^2 = 169$、$14^2 = 196$（均落在 101 與 200 之間）。",
          "計算平方數個數：$14 - 11 + 1 = 4$ 個。"
        ],
        "ans": "4",
        "quickTip": "常用數感秒殺：$10^2 = 100 < 101$，$15^2 = 225 > 200$，直接心算 $11^2$ 到 $14^2$，共 4 個。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 2 題",
      "topic": "數列規律 / 符號交錯等差數列",
      "score": "[3.1%]",
      "q": "求以下數列中第 8 項的數值：<br><div style='text-align:center;font-size:1.25em;margin:10px 0;'>$-1, 3, -5, 7, -9, \\dots$</div><span style='color:#64748b;font-size:0.92em;'>Find the 8th term of the sequence below: $-1, 3, -5, 7, -9, \\dots$</span>",
      "knowledge": {
        "formulas": [
          "a_n = (-1)^n \\cdot (2n - 1)",
          "(-1)^n = \\begin{cases} -1 & n\\text{ 為奇數} \\\\ +1 & n\\text{ 為偶數} \\end{cases}"
        ],
        "points": [
          "<b>絕對值規律</b>：$1, 3, 5, 7, 9, \\dots$ 為連續奇數，第 $n$ 項為 $2n - 1$。",
          "<b>符號交錯規律</b>：奇數項為負、偶數項為正，對應 $(-1)^n$。"
        ],
        "pitfall": "首項符號為負：故符號項為 $(-1)^n$，而不是 $(-1)^{n+1}$！"
      },
      "solution": {
        "thinking": "將數列拆解為「符號規律」與「數值絕對值規律」分別觀察。",
        "steps": [
          "絕對值序列為連續奇數：第 $n$ 項絕對值為 $2n - 1$。",
          "符號序列為負、正、負、正：第 $n$ 項符號為 $(-1)^n$。",
          "求第 8 項（$n = 8$，為偶數）：符號為正號 $+1$。",
          "數值絕對值為：$2 \\times 8 - 1 = 15$。",
          "因此第 8 項數值為 $+15$。"
        ],
        "ans": "15",
        "quickTip": "直接數到第 8 項：$-1, 3, -5, 7, -9, 11, -13, 15$，口算 2 秒得 15。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 3 題",
      "topic": "數與數線 / 非正整數判定與區間計數",
      "score": "[3.2%]",
      "q": "在 -9.3 至 7.7 之間共有多少個非正整數？<br><span style='color:#64748b;font-size:0.92em;'>How many non-positive integers are there in between -9.3 and 7.7?</span>",
      "knowledge": {
        "formulas": [
          "\\text{非正整數} \\iff x \\le 0 \\text{ 且 } x \\in \\mathbb{Z}",
          "\\{x \\in \\mathbb{Z} \\mid x \\le 0\\} = \\{0, -1, -2, -3, \\dots\\}"
        ],
        "points": [
          "<b>非正整數嚴格定義</b>：包含所有負整數以及 $0$！",
          "<b>區間範圍約束</b>：在 $-9.3$ 與 $7.7$ 之間，且滿足 $x \\le 0$。"
        ],
        "pitfall": "切勿遺漏「0」！非正整數不是負整數，0 也是非正整數！"
      },
      "solution": {
        "thinking": "明確「非正整數」的定義為 $x \\le 0$ 的整數，再結合區間過濾。",
        "steps": [
          "區間 $-9.3 < x < 7.7$ 內的所有整數為：$-9, -8, -7, \\dots, 0, 1, \\dots, 7$。",
          "篩選滿足「非正整數」（即 $x \\le 0$）的整數：$-9, -8, -7, -6, -5, -4, -3, -2, -1, 0$。",
          "計算項數：$0 - (-9) + 1 = 10$ 個。"
        ],
        "ans": "10",
        "quickTip": "負整數由 $-1$ 到 $-9$ 共 9 個，再加上 0，總計 $9 + 1 = 10$ 個。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 4 題",
      "topic": "代數表達式 / 年齡平移與多項式同類項合併",
      "score": "[3.3%]",
      "q": "甲今年 P 歲，乙比甲大 P 歲。5 年後，甲和乙的歲數之和是多少？<br><span style='color:#64748b;font-size:0.92em;'>John is P years old. Sam is P years older than John. What is the sum of their ages after 5 years?</span>",
      "knowledge": {
        "formulas": [
          "\\text{未來年齡} = \\text{現年齡} + t",
          "(aP + b) + (cP + d) = (a + c)P + (b + d)"
        ],
        "points": [
          "<b>設元與表達式</b>：甲現年 $P$ 歲，乙現年 $P + P = 2P$ 歲。",
          "<b>時間平移</b>：5 年後每個人各自增加 5 歲，兩人總共增加 10 歲。"
        ],
        "pitfall": "兩個人 5 年後的總年齡增長量是 $5 + 5 = 10$ 歲，切勿只加一個 5！"
      },
      "solution": {
        "thinking": "先分別列出甲、乙的現有年齡，再平移 5 年求和。",
        "steps": [
          "甲今年年齡為：$P$ 歲。",
          "乙比甲大 $P$ 歲，故乙今年年齡為：$P + P = 2P$ 歲。",
          "5 年後：甲的年齡為 $P + 5$ 歲，乙的年齡為 $2P + 5$ 歲。",
          "計算兩人歲數之和：$(P + 5) + (2P + 5) = 3P + 10$。"
        ],
        "ans": "3P + 10",
        "quickTip": "現年總和為 $P + 2P = 3P$，過 5 年兩人共長 $5 \\times 2 = 10$ 歲，直接得 $3P + 10$。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 5 題",
      "topic": "一元一次方程 / 含分母方程去分母與移項化簡",
      "score": "[3.4%]",
      "q": "解方程 $\\frac{2-z}{3} + \\frac{3-z}{4} = \\frac{4-z}{2}$。<br><span style='color:#64748b;font-size:0.92em;'>Solve the equation $\\frac{2-z}{3} + \\frac{3-z}{4} = \\frac{4-z}{2}$.</span>",
      "knowledge": {
        "formulas": [
          "\\text{去分母}：\\text{兩邊同乘以 } \\text{LCM}(3, 4, 2) = 12",
          "az + b = cz + d \\iff (a - c)z = d - b"
        ],
        "points": [
          "<b>找最小公倍數</b>：分母為 3, 4, 2，最小公倍數為 12。",
          "<b>括號法則</b>：去分母時分子必須括起，避免符號錯誤。"
        ],
        "pitfall": "去括號時注意負號分配：$-4z$ 與 $-3z$ 合併為 $-7z$。"
      },
      "solution": {
        "thinking": "通分或兩邊同乘最小公倍數去分母，轉化為整係數一元一次方程。",
        "steps": [
          "方程兩邊同乘以 12：$4(2 - z) + 3(3 - z) = 6(4 - z)$。",
          "展開括號：$8 - 4z + 9 - 3z = 24 - 6z$。",
          "合併左側同類項：$17 - 7z = 24 - 6z$。",
          "移項：$-7z + 6z = 24 - 17 \\implies -z = 7$。",
          "解得：$z = -7$。"
        ],
        "ans": "-7",
        "quickTip": "代入驗算：左邊 $= \\frac{2 - (-7)}{3} + \\frac{3 - (-7)}{4} = \\frac{9}{3} + \\frac{10}{4} = 3 + 2.5 = 5.5$；右邊 $= \\frac{4 - (-7)}{2} = \\frac{11}{2} = 5.5$，等式完全成立。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 6 題",
      "topic": "圖形規律 / 正方形點陣排列與面積公式",
      "score": "[3.5%]",
      "q": "以下每個圖形均由邊長為 2 的小正方形所組成。求第 2n 幅圖的面積。<br><span style='color:#64748b;font-size:0.92em;'>The figures below are formed by squares with side of 2. What is the area of the 2n-th figure?</span>",
      "visual": "<div style='text-align:center;padding:12px;'><img src='assets/q06.png' alt='第6題圖樣' style='max-width:100%;max-height:200px;border-radius:8px;border:1px solid #cbd5e1;box-shadow:0 4px 12px rgba(0,0,0,0.08);'><div style='margin-top:8px;font-size:13px;color:#64748b;font-weight:600;'>▲ 第 6 題 原卷正方形點陣遞推圖樣</div></div>",
      "caption": "第 6 題 點陣圖樣",
      "knowledge": {
        "formulas": [
          "\\text{第 } k \\text{ 幅圖小正方形數} = k \\times k = k^2",
          "\\text{單個小正方形面積} = 2 \\times 2 = 4",
          "\\text{總面積} = 4 \\times k^2 = (2k)^2"
        ],
        "points": [
          "<b>圖形構成分析</b>：第 1 幅為 $1\\times 1$、第 2 幅為 $2\\times 2$、第 $k$ 幅為 $k\\times k$ 正方形點陣。",
          "<b>代數代入</b>：求第 $2n$ 幅圖，即令 $k = 2n$ 代入。"
        ],
        "pitfall": "小正方形邊長為 2（非 1）：因此每個小正方形面積是 4，切勿直接寫 $4n^2$（漏乘小正方形面積 4）！"
      },
      "solution": {
        "thinking": "先分析第 $k$ 幅圖的邊長或正方形個數，再代入 $k = 2n$ 求總面積。",
        "steps": [
          "單個小正方形邊長為 2，其面積為 $2 \\times 2 = 4$。",
          "觀察點陣圖形排列規律：第 1 幅有 $1^2 = 1$ 個；第 2 幅有 $2^2 = 4$ 個；第 $k$ 幅圖由 $k \\times k = k^2$ 個小正方形組成。",
          "在第 $2n$ 幅圖中，小正方形總個數為 $(2n)^2 = 4n^2$ 個。",
          "總面積為：$\\text{個數} \\times \\text{單個面積} = 4n^2 \\times 4 = 16n^2$。（亦可由大正方形總邊長為 $2n \\times 2 = 4n$，面積為 $(4n)^2 = 16n^2$ 得出）。"
        ],
        "ans": "16n^2",
        "quickTip": "邊長法最快：第 $k$ 幅邊長為 $2k$，第 $2n$ 幅邊長為 $2 \\times 2n = 4n$，面積即 $(4n)^2 = 16n^2$。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 7 題",
      "topic": "應用題 / 和倍問題與一元一次方程建模",
      "score": "[3.6%]",
      "q": "甲、乙、丙三人共有 3000 元。甲有的比乙的 5 倍多 100 元，而丙有的比乙的 4 倍少 200 元。問丙有多少元？<br><span style='color:#64748b;font-size:0.92em;'>Adam, Ben, and Carl have $3000 altogether. Adam has $100 more than five times the money Ben has. Carl has $200 less than four times the money Ben has. How much does Carl have?</span>",
      "knowledge": {
        "formulas": [
          "\\text{設基準量乙} = x",
          "\\text{甲} = 5x + 100, \\quad \\text{丙} = 4x - 200",
          "\\text{總和} = (5x + 100) + x + (4x - 200) = 3000"
        ],
        "points": [
          "<b>基準量設元原則</b>：甲與丙的金額都以乙為參照基準，設乙為 $x$ 最簡潔。",
          "<b>求目標量</b>：解出 $x$ 後，需代入丙的表達式 $4x - 200$，切勿誤填乙的錢數。"
        ],
        "pitfall": "審題注意問的是「丙」有多少元，而非乙或甲！"
      },
      "solution": {
        "thinking": "設基準量乙的錢數為 $x$，列出三人總額方程式求解。",
        "steps": [
          "設乙有 $x$ 元，則甲有 $5x + 100$ 元，丙有 $4x - 200$ 元。",
          "依三人共有 3000 元列方程：$(5x + 100) + x + (4x - 200) = 3000$。",
          "合併同類項：$10x - 100 = 3000 \\implies 10x = 3100 \\implies x = 310$（元）。",
          "計算丙的金額：$4x - 200 = 4 \\times 310 - 200 = 1240 - 200 = 1040$ 元。"
        ],
        "ans": "1040",
        "quickTip": "線段圖心算：$(3000 - 100 + 200) \\div (5 + 1 + 4) = 3100 \\div 10 = 310$（乙），丙 $= 310 \\times 4 - 200 = 1040$。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 8 題",
      "topic": "幾何應用 / 等邊三角形周長與相似放大關係",
      "score": "[3.7%]",
      "q": "若把一個等邊三角形的每邊延長 3 cm，它新的周界會是原來的 $1\\frac{1}{3}$ 倍。原本等邊三角形的邊長是多少厘米？<br><span style='color:#64748b;font-size:0.92em;'>If each side of an equilateral triangle is increased by 3 cm, the perimeter of the new triangle is $1\\frac{1}{3}$ of the original one. Find the side length of the original triangle in cm.</span>",
      "knowledge": {
        "formulas": [
          "P = 3s",
          "\\frac{P_{\\text{新}}}{P_{\\text{原}}} = \\frac{3(s + \\Delta s)}{3s} = \\frac{s + \\Delta s}{s} = 1\\frac{1}{3} = \\frac{4}{3}"
        ],
        "points": [
          "<b>同比例放大性質</b>：正多邊形各邊同時增加相同長度，周長增加量為邊數倍；周長比直接等於邊長比！",
          "<b>代數比例化簡</b>：$\\frac{s+3}{s} = \\frac{4}{3} \\implies 1 + \\frac{3}{s} = 1 + \\frac{1}{3}$。"
        ],
        "pitfall": "帶分數化為假分數：$1\\frac{1}{3} = \\frac{4}{3}$。"
      },
      "solution": {
        "thinking": "利用周長比等於邊長比，列出一元一次比例方程。",
        "steps": [
          "設原本等邊三角形邊長為 $s\\text{ cm}$，原周長為 $3s\\text{ cm}$。",
          "每邊延長 $3\\text{ cm}$ 後，新邊長為 $(s + 3)\\text{ cm}$，新周長為 $3(s + 3)\\text{ cm}$。",
          "依題意列方程：$3(s + 3) = \\frac{4}{3} \\times 3s \\implies s + 3 = \\frac{4}{3}s$。",
          "移項求解：$\\frac{1}{3}s = 3 \\implies s = 9\\text{ cm}$。"
        ],
        "ans": "9",
        "quickTip": "增加量對照：增量 3 cm 佔原本邊長的分率為 $\\frac{1}{3}$，故原邊長為 $3 \\div \\frac{1}{3} = 9\\text{ cm}$。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 9 題",
      "topic": "幾何角度 / 鐘面指針角、角速度與反角計算",
      "score": "[4.8%]",
      "q": "當鐘面顯示的時間是 3:30，時針與分針組成的反角是 $n^\\circ$。求 $n$。<br><span style='color:#64748b;font-size:0.92em;'>The reflex angle formed between the hour hand and the minute hand of a clock at 3:30 is $n^\\circ$. Find $n$.</span>",
      "knowledge": {
        "formulas": [
          "\\theta = |30H - 5.5M|^\\circ",
          "\\text{反角（Reflex Angle）} = 360^\\circ - \\theta \\quad (180^\\circ < \\text{反角} < 360^\\circ)"
        ],
        "points": [
          "<b>角速度認知</b>：分針每分鐘走 $6^\\circ$；時針每分鐘走 $0.5^\\circ$。",
          "<b>反角概念</b>：反角即優角，度數必介於 $180^\\circ$ 與 $360^\\circ$ 之間。"
        ],
        "pitfall": "切勿直接回答較小夾角 $75^\\circ$！題目明確問的是「反角」（Reflex angle）！"
      },
      "solution": {
        "thinking": "先計算 3:30 時時針與分針的較小夾角，再由 $360^\\circ$ 減去夾角得出反角。",
        "steps": [
          "3:30 時，分針指向刻度 6，對應基準角度為 $6 \\times 30^\\circ = 180^\\circ$。",
          "時針從 3 點位置前進了 30 分鐘，位置為 $3 \\times 30^\\circ + 30 \\times 0.5^\\circ = 90^\\circ + 15^\\circ = 105^\\circ$。",
          "計算兩針之間的較小夾角：$\\theta = 180^\\circ - 105^\\circ = 75^\\circ$。",
          "求反角（優角）：$n^\\circ = 360^\\circ - 75^\\circ = 285^\\circ$。",
          "故 $n = 285$。"
        ],
        "ans": "285",
        "quickTip": "每大格 $30^\\circ$：3 點半時針在 3 和 4 的正中，距 6 有 $2.5$ 大格，夾角為 $2.5 \\times 30^\\circ = 75^\\circ$，反角即 $360^\\circ - 75^\\circ = 285^\\circ$。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 10 題",
      "topic": "比例百分比 / 招聘變量與男員工不變量解法",
      "score": "[4.9%]",
      "q": "某公司原有 80% 的員工是男性。新聘請了 5 位女員工後，女員工的數目佔全部員工的 25%。該公司現有員工多少位？<br><span style='color:#64748b;font-size:0.92em;'>In an office, 80% of the staff were male. After hiring 5 more female staff, the percentage of female staff increases to 25%. Find the current number of staff in the office.</span>",
      "knowledge": {
        "formulas": [
          "\\text{不變量}：M_{\\text{男}} = \\text{原總數} \\times 80\\% = \\text{現總數} \\times (1 - 25\\%)",
          "\\text{總人數增量} = \\text{現總數} - \\text{原總數} = 5"
        ],
        "points": [
          "<b>不變量思維</b>：新聘只增加女性，男性人數前後完全不變！",
          "<b>比例轉化</b>：原男佔比 $80\\%$，現男佔比 $75\\%$。以男性為基準求出總人數。"
        ],
        "pitfall": "最後問的是「現有員工」多少位，求出原人數 75 後務必記得加 5！"
      },
      "solution": {
        "thinking": "利用「男員工實際人數保持不變」建立比例或方程。",
        "steps": [
          "分析不變量：招聘前後男性人數 $M$ 不變。原男性佔比為 $80\\%$；新聘 5 位女性後，女性佔 $25\\%$，故男性佔 $100\\% - 25\\% = 75\\%$。",
          "設男性人數為 $M$：原來總人數為 $\\frac{M}{0.8} = \\frac{5}{4}M$；現有總人數為 $\\frac{M}{0.75} = \\frac{4}{3}M$。",
          "依總人數增加 5 人列方程：$\\frac{4}{3}M - \\frac{5}{4}M = 5$。",
          "通分化簡：$\\frac{16 - 15}{12}M = 5 \\implies \\frac{1}{12}M = 5 \\implies M = 60$（男性 60 人）。",
          "現有員工總人數為：$\\frac{4}{3} \\times 60 = 80$ 位。（驗算：原 75 人中男 60、女 15；現 80 人中男 60、女 20，佔比 $20/80 = 25\\%$，正確）。"
        ],
        "ans": "80",
        "quickTip": "份數法秒殺：原男:女 $= 4:1 = 12:3$；現男:女 $= 3:1 = 12:4$。女性增加 1 份對應 5 人，現總共有 $12 + 4 = 16$ 份，現人數為 $16 \\times 5 = 80$ 位。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 11 題",
      "topic": "行程問題 / 分段行駛、速度變化與總時間方程",
      "score": "[5.1%]",
      "q": "甲、乙兩城相隔 400 km。一輛汽車由甲城開往乙城，起初以 100 km/h 行駛，隨後減速至 80 km/h，直至抵達乙城。若總車程為 4.4 小時，問汽車以 100 km/h 行駛的路程是多少公里？<br><span style='color:#64748b;font-size:0.92em;'>The distance between town A and town B is 400 km. A car traveled from town A to town B at a speed of 100 km/h for part of the journey and then decreased its speed to 80 km/h for the rest of the journey. If the total traveling time was 4.4 hours, how many kilometres did the car travel at the speed of 100 km/h?</span>",
      "knowledge": {
        "formulas": [
          "\\text{時間} = \\frac{\\text{路程}}{\\text{速度}}",
          "\\frac{s}{v_1} + \\frac{S_{\\text{總}} - s}{v_2} = T_{\\text{總}}"
        ],
        "points": [
          "<b>時間等量關係</b>：高速段耗時加低速段耗時等於總耗時 4.4 小時。",
          "<b>去分母技巧</b>：方程同乘以 $\\text{LCM}(100, 80) = 400$。"
        ],
        "pitfall": "審題注意問的是以 100 km/h 行駛的「路程」，而非耗時！"
      },
      "solution": {
        "thinking": "設以 100 km/h 行駛的路程為 $s\\text{ km}$，依總時間列方程求解。",
        "steps": [
          "設以 $100\\text{ km/h}$ 行駛的路程為 $s\\text{ km}$，則以 $80\\text{ km/h}$ 行駛的路程為 $(400 - s)\\text{ km}$。",
          "依總時間 4.4 小時列方程：$\\frac{s}{100} + \\frac{400 - s}{80} = 4.4$。",
          "方程兩邊同乘以 400：$4s + 5(400 - s) = 4.4 \\times 400$。",
          "去括號化簡：$4s + 2000 - 5s = 1760$。",
          "移項求解：$2000 - s = 1760 \\implies s = 240\\text{ km}$。"
        ],
        "ans": "240",
        "quickTip": "雞兔同籠假設法：若全以 80 km/h 行駛 4.4 小時，路程為 $80 \\times 4.4 = 352\\text{ km}$，差 $400 - 352 = 48\\text{ km}$。每多以 100 km/h 行駛 1 小時多走 20 km，故高速行駛時間為 $48 \\div 20 = 2.4\\text{ h}$，路程即 $2.4 \\times 100 = 240\\text{ km}$。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 12 題",
      "topic": "解析幾何 / 直角坐標系多邊形割補面積與周界計算",
      "score": "[5.2%]",
      "q": "圖中著色部份的面積是 75，ED = 5。求 ABCDE 的周界。<br><span style='color:#64748b;font-size:0.92em;'>In the figure, ED = 5 and the area of the shaded region is 75. Find the perimeter of ABCDE.</span>",
      "visual": "<div style='text-align:center;padding:12px;'><img src='assets/q12.png' alt='第12題坐標多邊形' style='max-width:100%;max-height:220px;border-radius:8px;border:1px solid #cbd5e1;box-shadow:0 4px 12px rgba(0,0,0,0.08);'><div style='margin-top:8px;font-size:13px;color:#64748b;font-weight:600;'>▲ 第 12 題 平面坐標系多邊形 ABCDE</div></div>",
      "caption": "第 12 題 坐標圖樣",
      "knowledge": {
        "formulas": [
          "\\text{總面積} = S_{\\text{梯形}} + S_{\\text{矩形}} = \\frac{(AE + x_{\\text{底}})}{2} \\times \\Delta y_1 + x_{\\text{底}} \\times \\Delta y_2",
          "\\text{周界} = AE + ED + DC + CB + BA"
        ],
        "points": [
          "<b>水平分割割補法</b>：以水平線 $y = 1$ 將圖形分為上半梯形與下半矩形。",
          "<b>坐標求長度</b>：$AE = 3 - (-3) = 6$、$BC = 6 - (-3) = 9$、$AB = 5 - r$、$CD = 1 - r$。"
        ],
        "pitfall": "計算坐標差時注意負號：如 $5 - r$ 當 $r = -4$ 時長度為 $5 - (-4) = 9$。"
      },
      "solution": {
        "thinking": "先利用面積條件求出未知坐標 $r$，再分別計算五邊形各邊長度相加求周界。",
        "steps": [
          "頂點坐標分析：$A(-3, 5)$、$E(3, 5)$、$D(6, 1)$、$C(6, r)$、$B(-3, r)$。",
          "水平邊長：頂邊 $AE = 3 - (-3) = 6$；底邊 $BC = 6 - (-3) = 9$；斜邊 $ED = 5$（已知）。",
          "以水平直線 $y = 1$ 分割圖形：",
          "  • 上半部為梯形，頂邊長 6，底邊長 9，高為 $5 - 1 = 4$，面積為 $\\frac{6 + 9}{2} \\times 4 = 30$；",
          "  • 下半部為矩形，長為 9，高為 $1 - r$，面積為 $9(1 - r)$。",
          "依總面積 75 列方程：$30 + 9(1 - r) = 75 \\implies 9(1 - r) = 45 \\implies 1 - r = 5 \\implies r = -4$。",
          "計算垂直邊長度：$AB = 5 - (-4) = 9$、$CD = 1 - (-4) = 5$。",
          "計算五邊形周界：$AE + ED + DC + CB + BA = 6 + 5 + 5 + 9 + 9 = 34$。"
        ],
        "ans": "34",
        "quickTip": "周界等價邊長歸納：$BC = 9$，$AE = 6$，$AB = 9$，$CD = 5$，$ED = 5$，心算 $9 + 9 + 6 + 5 + 5 = 34$。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 13 題",
      "topic": "不等式 / 一元二次不等式符號法則與整數解計數",
      "score": "[6.3%]",
      "q": "要使 (3n + 7)(5n - 16) 成為負數，n 有多少個整數可能值？<br><span style='color:#64748b;font-size:0.92em;'>For how many integers n is (3n + 7)(5n - 16) a negative number?</span>",
      "knowledge": {
        "formulas": [
          "(3n + 7)(5n - 16) < 0",
          "\\text{拋物線開口向上} \\iff -\\frac{7}{3} < n < \\frac{16}{5}",
          "\\text{整數個數} = \\lfloor 3.2 \\rfloor - \\lceil -2.33 \\rceil + 1 = 3 - (-2) + 1 = 6"
        ],
        "points": [
          "<b>二次不等式零點法則</b>：首項係數 $3 \\times 5 = 15 > 0$，小於 0 的解集介於兩零點之間。",
          "<b>整數取值界限</b>：$-\\frac{7}{3} \\approx -2.33$，$\\frac{16}{5} = 3.2$。"
        ],
        "pitfall": "開區間不含端點：嚴格小於 0（負數），不能包含使式子為 0 的根。"
      },
      "solution": {
        "thinking": "將「成為負數」轉化為一元二次不等式 $< 0$，求出連續區間並統計整數解個數。",
        "steps": [
          "題目要求乘積為負數，即不等式 $(3n + 7)(5n - 16) < 0$。",
          "求方程 $(3n + 7)(5n - 16) = 0$ 的兩根：$n_1 = -\\frac{7}{3} \\approx -2.33$、$n_2 = \\frac{16}{5} = 3.2$。",
          "因拋物線開口向上（二次項係數 $15 > 0$），乘積為負數的解集為：$-\\frac{7}{3} < n < \\frac{16}{5}$，即 $-2.33 < n < 3.2$。",
          "列出滿足條件的所有整數 $n$：$-2, -1, 0, 1, 2, 3$。",
          "計算整數可能值的個數：$3 - (-2) + 1 = 6$ 個。"
        ],
        "ans": "6",
        "quickTip": "數線直接點整數：$-2, -1, 0, 1, 2, 3$ 共 6 個整數，秒速判定選 6。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 14 題",
      "topic": "立體幾何 / 長方體展開圖、表面積與體積關聯",
      "score": "[6.4%]",
      "q": "以下是一個長方體的摺紙圖樣。如果長方體的表面面積是 $228\\text{ cm}^2$，問它的體積是多少立方厘米？<br><span style='color:#64748b;font-size:0.92em;'>The figure shows the net of a cuboid. If the total surface area of the cuboid formed is $228\\text{ cm}^2$, find the volume of the cuboid in $\\text{cm}^3$.</span>",
      "visual": "<div style='text-align:center;padding:12px;'><img src='assets/q14.png' alt='第14題長方體展開圖' style='max-width:100%;max-height:220px;border-radius:8px;border:1px solid #cbd5e1;box-shadow:0 4px 12px rgba(0,0,0,0.08);'><div style='margin-top:8px;font-size:13px;color:#64748b;font-weight:600;'>▲ 第 14 題 長方體摺紙展開圖樣</div></div>",
      "caption": "第 14 題 摺紙圖樣",
      "knowledge": {
        "formulas": [
          "\\text{展開圖橫向帶長} = 2(l + w) = 30\\text{ cm} \\implies l + w = 15\\text{ cm}",
          "S = 2(lw + wh + lh) = 228\\text{ cm}^2 \\implies lw + (l + w)h = 114",
          "V = l \\times w \\times h"
        ],
        "points": [
          "<b>展開圖結構解碼</b>：橫向 4 個矩形由長與闊交替組成，總長為 $2(l + w) = 30$。",
          "<b>垂直翻折尺寸</b>：標註的 6 cm 為底面其中一邊長，即 $w = 6$，$l = 15 - 6 = 9$。"
        ],
        "pitfall": "求出高 $h = 4$ 後，題目問的是「體積」，切勿只寫表面積的一半！"
      },
      "solution": {
        "thinking": "由展開圖橫向總長求出長加寬，結合已知底面邊長求出長與寬，再由表面積求高並算體積。",
        "steps": [
          "分析展開圖：中間橫向連續拼接的 4 個矩形為側面帶，其底邊長為 $l, w, l, w$，總長為 $2(l + w) = 30\\text{ cm} \\implies l + w = 15\\text{ cm}$。",
          "展開圖中向外伸出的底面標註長度為 $6\\text{ cm}$，故取底面寬 $w = 6\\text{ cm}$，長 $l = 15 - 6 = 9\\text{ cm}$。",
          "設長方體的高（即橫向帶的垂直高）為 $h\\text{ cm}$。表面積為 $228\\text{ cm}^2$：",
          "  $2(l \\times w + w \\times h + l \\times h) = 228$",
          "  $9 \\times 6 + (9 + 6)h = 114$",
          "  $54 + 15h = 114 \\implies 15h = 60 \\implies h = 4\\text{ cm}$。",
          "計算長方體體積：$V = l \\times w \\times h = 9 \\times 6 \\times 4 = 216\\text{ cm}^3$。"
        ],
        "ans": "216",
        "quickTip": "三邊乘積：$9 \\times 6 \\times 4 = 216$，驗算表面積 $2 \\times (54 + 24 + 36) = 2 \\times 114 = 228$，完全吻合。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 15 題",
      "topic": "平面幾何 / 梯形平行截線加權分點定理與相似三角形",
      "score": "[6.5%]",
      "q": "圖中 AB // CD // EF，求 CD 的長度。<br><span style='color:#64748b;font-size:0.92em;'>In the figure, AB // CD // EF. Find the length of CD.</span>",
      "visual": "<div style='text-align:center;padding:12px;'><img src='assets/q15.png' alt='第15題梯形平行截線' style='max-width:100%;max-height:220px;border-radius:8px;border:1px solid #cbd5e1;box-shadow:0 4px 12px rgba(0,0,0,0.08);'><div style='margin-top:8px;font-size:13px;color:#64748b;font-weight:600;'>▲ 第 15 題 梯形平行線段截線</div></div>",
      "caption": "第 15 題 平行截線",
      "knowledge": {
        "formulas": [
          "\\text{加權分點公式}：CD = \\frac{CE \\cdot AB + AC \\cdot EF}{AC + CE}",
          "\\text{輔助線相似}：\\Delta AXD \\sim \\Delta AYF \\implies \\frac{XD}{YF} = \\frac{AC}{AE}"
        ],
        "points": [
          "<b>梯形加權中位線推廣</b>：若平行線將腰分為 $m:n$（即 $AC:CE = 3:2$），則平行線長度為兩底的交叉加權平均！",
          "<b>輔助線平移腰法</b>：過 $A$ 作直線平行於另一腰，將梯形拆分為平行四邊形與三角形。"
        ],
        "pitfall": "加權交叉相乘：是 $CE \\times AB$ 與 $AC \\times EF$，切勿搞反比例順序！"
      },
      "solution": {
        "thinking": "利用梯形內部平行截線的加權分點公式，或過頂點作平行線構建相似三角形。",
        "steps": [
          "方法一（加權分點公式）：",
          "  在梯形 $ABFE$ 中，$AB \\parallel CD \\parallel EF$，點 $C$ 將腰 $AE$ 分為 $AC = 3$ 與 $CE = 2$。",
          "  依平行截線加權平均公式：$CD = \\frac{CE \\times AB + AC \\times EF}{AC + CE}$。",
          "  代入已知數據：$CD = \\frac{2 \\times 4 + 3 \\times 9}{3 + 2} = \\frac{8 + 27}{5} = \\frac{35}{5} = 7$。",
          "方法二（輔助線平移）：",
          "  過點 $A$ 作直線平行於 $BF$，交 $CD$ 於 $X$，交 $EF$ 於 $Y$。",
          "  四邊形 $ABFX$ 與 $ABFY$ 為平行四邊形，故 $CX = EY = AB = 4$，$YF = 9 - 4 = 5$。",
          "  在 $\\Delta AEY$ 中，$XD \\parallel YF$，由相似三角形得：$\\frac{XD}{YF} = \\frac{AC}{AE} = \\frac{3}{3 + 2} = \\frac{3}{5}$。",
          "  得 $XD = \\frac{3}{5} \\times 5 = 3$，因此 $CD = CX + XD = 4 + 3 = 7$。"
        ],
        "ans": "7",
        "quickTip": "斜率變化率秒殺：底邊從 4 到 9 增長了 5，腰長總長 5，每單位腰長增長 1。從 A 走了 3 單位到 C，長度即 $4 + 3 \\times 1 = 7$。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 16 題",
      "topic": "數論 / 100位數循環節、同餘運算與等比週期和",
      "score": "[6.6%]",
      "q": "當 100 位數 20192019...2019 除以 7 時，餘數是多少？<br><span style='color:#64748b;font-size:0.92em;'>What is the remainder when the 100-digit number 20192019...2019 is divided by 7?</span>",
      "knowledge": {
        "formulas": [
          "N = 2019 \\times \\sum_{k=0}^{24} (10^4)^k",
          "2019 = 7 \\times 288 + 3 \\implies 2019 \\equiv 3 \\pmod 7",
          "10^4 = 10000 = 7 \\times 1428 + 4 \\implies 10^4 \\equiv 4 \\pmod 7",
          "4^0 + 4^1 + 4^2 = 1 + 4 + 2 = 7 \\equiv 0 \\pmod 7"
        ],
        "points": [
          "<b>數塊分解</b>：100 位數包含 $100 \\div 4 = 25$ 個「2019」區塊。",
          "<b>公比模 7 週期</b>：$4^k \\pmod 7$ 的週期長度為 3（序列為 1, 4, 2），且每 3 項之和為 7（被 7 整除）！",
          "<b>餘數分組</b>：25 項可分為 8 個和為 0 的週期外加 1 項。"
        ],
        "pitfall": "項數是 25 項（$k=0$ 到 $24$），$25 = 3 \\times 8 + 1$，剩下的是 $4^0 = 1$。"
      },
      "solution": {
        "thinking": "將大數寫為位值展開式，分別求首項與公比模 7 的週期性餘數。",
        "steps": [
          "100 位數由 25 組「2019」組成：$N = 2019 \\times (1 + 10^4 + 10^8 + \\dots + 10^{96}) = 2019 \\times \\sum_{k=0}^{24} (10^4)^k$。",
          "求單組「2019」模 7 餘數：$2019 = 7 \\times 288 + 3 \\implies 2019 \\equiv 3 \\pmod 7$。",
          "求公比 $10^4$ 模 7 餘數：$10000 = 7 \\times 1428 + 4 \\implies 10^4 \\equiv 4 \\pmod 7$。",
          "觀察 $4^k \\pmod 7$ 的循環節：",
          "  • $k=0: 4^0 = 1 \\equiv 1 \\pmod 7$",
          "  • $k=1: 4^1 = 4 \\equiv 4 \\pmod 7$",
          "  • $k=2: 4^2 = 16 \\equiv 2 \\pmod 7$",
          "  • 每 3 項一個週期，且每週期三項之和：$1 + 4 + 2 = 7 \\equiv 0 \\pmod 7$。",
          "共有 25 項，因 $25 = 3 \\times 8 + 1$，前 24 項分為 8 個完整週期其和為 0，剩餘第 25 項：",
          "  $\\sum_{k=0}^{24} 4^k \\equiv 8 \\times 0 + 4^0 = 1 \\pmod 7$。",
          "因此整個數除以 7 的餘數為：$N \\equiv 3 \\times 1 = 3 \\pmod 7$。"
        ],
        "ans": "3",
        "quickTip": "每 3 個 2019（即 12 位數 201920192019）能被 7 整除，25 個 2019 去掉前 24 個（8 組），只剩下最後 1 個 2019，$2019 \\div 7 = 288 \\dots 3$，口算 10 秒秒殺。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 17 題",
      "topic": "幾何面積模型 / 等高三角形與梯形面積比例分析",
      "score": "[6.7%]",
      "q": "圖中 ABCD 是一個梯形，DC = 2AE 及 AE = 2EB。如果 $\\Delta\\text{EBC}$ 的面積是 $24\\text{ cm}^2$，問 AECD 的面積是多少平方厘米？<br><span style='color:#64748b;font-size:0.92em;'>In the figure, ABCD is a trapezium, DC = 2AE, and AE = 2EB. If the area of $\\Delta EBC$ is $24\\text{ cm}^2$, what is the area of AECD in $\\text{cm}^2$?</span>",
      "visual": "<div style='text-align:center;padding:12px;'><img src='assets/q17.png' alt='第17題梯形面積' style='max-width:100%;max-height:220px;border-radius:8px;border:1px solid #cbd5e1;box-shadow:0 4px 12px rgba(0,0,0,0.08);'><div style='margin-top:8px;font-size:13px;color:#64748b;font-weight:600;'>▲ 第 17 題 梯形與三角形面積分割</div></div>",
      "caption": "第 17 題 梯形面積",
      "knowledge": {
        "formulas": [
          "S_{\\Delta EBC} = \\frac{1}{2} \\cdot EB \\cdot h",
          "S_{AECD} = \\frac{AE + DC}{2} \\cdot h",
          "\\frac{S_{AECD}}{S_{\\Delta EBC}} = \\frac{AE + DC}{EB}"
        ],
        "points": [
          "<b>等高圖形面積比</b>：三角形與梯形在平行線之間，垂直高 $h$ 完全相同！",
          "<b>底長比等於面積比</b>：梯形面積比三角形面積直接等於兩底之和與三角形底長之比。"
        ],
        "pitfall": "四邊形 AECD 是梯形（兩平行底為 AE 與 DC），其面積公式是 $\\frac{AE+DC}{2}h$。"
      },
      "solution": {
        "thinking": "設定基準線段長度求出各邊比例，利用等高圖形面積比直接倍數求解。",
        "steps": [
          "梯形 $ABCD$ 中，$AB \\parallel DC$。設兩平行線之間的垂直高為 $h$。",
          "依題意設定底長比例：設 $EB = x$，則 $AE = 2EB = 2x$，$DC = 2AE = 2(2x) = 4x$。",
          "分析三角形 $\\Delta EBC$：底為 $EB = x$，高為 $h$，面積為 $\\frac{1}{2} x h = 24\\text{ cm}^2 \\implies xh = 48$。",
          "分析四邊形 $AECD$：因 $AE \\parallel DC$，故為梯形，上底 $AE = 2x$，下底 $DC = 4x$，高為 $h$。",
          "計算梯形面積：$S_{AECD} = \\frac{AE + DC}{2} \\times h = \\frac{2x + 4x}{2} \\times h = 3xh$。",
          "代入 $xh = 48$：$S_{AECD} = 3 \\times 48 = 144\\text{ cm}^2$。"
        ],
        "ans": "144",
        "quickTip": "面積倍數秒殺：$\\frac{S_{AECD}}{S_{\\Delta EBC}} = \\frac{AE + DC}{EB} = \\frac{2 + 4}{1} = 6$，故面積 $= 6 \\times 24 = 144\\text{ cm}^2$。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 18 題",
      "topic": "立體幾何 / 水中物體浸入、環形底面積與水位上升",
      "score": "[6.8%]",
      "q": "如圖，把一個長 5 cm，闊 4 cm，高 15 cm 的長方體垂直放入容器後，長方體的一部份在水面之上。問水位上升了多少厘米？<br><span style='color:#64748b;font-size:0.92em;'>In the figure, a cuboid with 5 cm long, 4 cm wide and 15 cm high is vertically placed in a tank with part of it above the water level. Find the rise of the water level in cm.</span>",
      "visual": "<div style='text-align:center;padding:12px;'><img src='assets/q18.png' alt='第18題水槽水位上升' style='max-width:100%;max-height:220px;border-radius:8px;border:1px solid #cbd5e1;box-shadow:0 4px 12px rgba(0,0,0,0.08);'><div style='margin-top:8px;font-size:13px;color:#64748b;font-weight:600;'>▲ 第 18 題 長方體置入水槽之液面變化</div></div>",
      "caption": "第 18 題 水位上升",
      "knowledge": {
        "formulas": [
          "V_{\\text{水}} = A_{\\text{容}} \\times H_0 = (A_{\\text{容}} - A_{\\text{柱}}) \\times H_{\\text{新}}",
          "\\Delta H = \\frac{A_{\\text{柱}} \\times H_0}{A_{\\text{容}} - A_{\\text{柱}}}"
        ],
        "points": [
          "<b>水體積不變原理</b>：放入長方體後，水只能佔據柱體周圍的環形截面積。",
          "<b>未沒頂條件檢驗</b>：新水深 $H_{\\text{新}} < 15\\text{ cm}$，長方體未全沒入水中。"
        ],
        "pitfall": "切勿以長方體總體積 $5\\times 4\\times 15$ 當作排水體積！長方體未完全沒入水中！"
      },
      "solution": {
        "thinking": "利用水體積守恆求出新水深，或直接使用底面積置換公式求上升高度。",
        "steps": [
          "計算底面積：容器底面積 $A_{\\text{容}} = 24 \\times 15 = 360\\text{ cm}^2$；長方體底面積 $A_{\\text{柱}} = 5 \\times 4 = 20\\text{ cm}^2$；原水深 $H_0 = 8\\text{ cm}$。",
          "長方體高為 15 cm 且部分在水面之上，代表水面上升後仍未沒過長方體頂端。",
          "水在柱體周圍所佔據的有效環形底面積為：$A_{\\text{水}} = 360 - 20 = 340\\text{ cm}^2$。",
          "依水體積守恆定律求新水深：$340 \\times H_{\\text{新}} = 360 \\times 8 = 2880 \\implies H_{\\text{新}} = \\frac{2880}{340} = \\frac{144}{17} = 8\\frac{8}{17}\\text{ cm}$（$8\\frac{8}{17} < 15$ 符合題意）。",
          "水位上升高度為：$\\Delta H = 8\\frac{8}{17} - 8 = \\frac{8}{17}\\text{ cm}$。"
        ],
        "ans": "\\frac{8}{17}",
        "quickTip": "排水量公式直接代入：$\\Delta H = \\frac{A_{\\text{柱}} \\times H_0}{A_{\\text{容}} - A_{\\text{柱}}} = \\frac{20 \\times 8}{360 - 20} = \\frac{160}{340} = \\frac{8}{17}\\text{ cm}$，心算 5 秒秒殺。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 19 題",
      "topic": "集合論 / 容斥原理、德摩根定律與極值邊界分析",
      "score": "[6.9%]",
      "q": "一班學生有 40 人，當中喜歡足球的佔 75%，喜歡籃球的佔 80%，喜歡打排球的佔 65%。若每名學生至少喜歡以上一種的球類，而有 n 名學生喜歡全部三種球類，求 n 的最小可能值。<br><span style='color:#64748b;font-size:0.92em;'>In a class of 40 students, 75% of them like football, 80% of them like basketball, and 65% of them like volleyball. Each student in the class likes at least one of the sports above. If n students like all the three sports, find the smallest possible value of n.</span>",
      "knowledge": {
        "formulas": [
          "(F \\cap B \\cap V)^c = F^c \\cup B^c \\cup V^c",
          "|F^c \\cup B^c \\cup V^c| \\le |F^c| + |B^c| + |V^c|",
          "n_{\\min} = N - (|F^c| + |B^c| + |V^c|)"
        ],
        "points": [
          "<b>對立面思維（補集法）</b>：求「三者皆喜」的最小值，等價於最大化「至少有一種不喜歡」的人數！",
          "<b>布爾不等式極值</b>：當不喜歡足球、不喜歡籃球、不喜歡排球的三組人不重疊（互斥）時，不喜歡人數達到最大值。"
        ],
        "pitfall": "直接套用三元容斥公式容易迷失在未知重疊項中，轉到對立面（不喜歡人數）是最快最準的方法！"
      },
      "solution": {
        "thinking": "轉化為對立面問題：先求各項運動「不喜歡」的人數，再求互不重疊時的最小交集。",
        "steps": [
          "全班總人數 $N = 40$ 人。",
          "計算喜歡各項球類的人數：",
          "  • 足球：$40 \\times 75\\% = 30$ 人；",
          "  • 籃球：$40 \\times 80\\% = 32$ 人；",
          "  • 排球：$40 \\times 65\\% = 26$ 人。",
          "計算「不喜歡」各項球類的人數：",
          "  • 不喜歡足球：$40 - 30 = 10$ 人；",
          "  • 不喜歡籃球：$40 - 32 = 8$ 人；",
          "  • 不喜歡排球：$40 - 26 = 14$ 人。",
          "要使三項都喜歡的人數 $n$ 最小，必須讓「至少有一項不喜歡」的人數達到最大。",
          "當這三群不喜歡的人完全互不重疊時，至少不喜歡一項的人數達到最大值：$10 + 8 + 14 = 32$ 人。",
          "剩下的人必然三種球類都喜歡，故 $n$ 的最小值為：$n_{\\min} = 40 - 32 = 8$ 人。"
        ],
        "ans": "8",
        "quickTip": "反面百分比速算：不喜歡比例為 $25\\% + 20\\% + 35\\% = 80\\%$，故至少都喜歡的比例為 $100\\% - 80\\% = 20\\%$，$40 \\times 20\\% = 8$ 人。"
      }
    },
    {
      "year": "2019",
      "paper": "初中組 (S1)",
      "qNum": "第 20 題",
      "topic": "高階數論 / 末兩位同餘、二項式定理與中國剩餘定理 (CRT)",
      "score": "[7.0%]",
      "q": "設 ABCD 為一個任意四位數。定義 $\\rho(ABCD) = A^{ABCD} + B^{ABCD} + C^{ABCD} + D^{ABCD}$。求 $\\rho(2019)$ 最後兩個位的數值。<br><span style='color:#64748b;font-size:0.92em;'>Let ABCD be an arbitrary 4-digit number. Define $\\rho(ABCD) = A^{ABCD} + B^{ABCD} + C^{ABCD} + D^{ABCD}$. Find the last two digits of $\\rho(2019)$.</span>",
      "knowledge": {
        "formulas": [
          "\\rho(2019) = 2^{2019} + 0^{2019} + 1^{2019} + 9^{2019} = 2^{2019} + 9^{2019} + 1",
          "9^{2019} = (10 - 1)^{2019} \\equiv -1 + 2019 \\times 10 \\equiv 89 \\pmod{100}",
          "2^{20} \\equiv 1 \\pmod{25} \\implies 2^{2019} \\equiv 2^{-1} \\equiv 13 \\pmod{25}",
          "2^{2019} \\equiv 0 \\pmod 4 \\implies 2^{2019} \\equiv 88 \\pmod{100}"
        ],
        "points": [
          "<b>末兩位數學模型</b>：求數值的最後兩位數即求模 100 的同餘值（$\\pmod{100}$）。",
          "<b>二項式展開法</b>：$9 = 10 - 1$，展開只保留後兩項即可精準求出末兩位。",
          "<b>中國剩餘定理（CRT）</b>：模 100 拆解為互質的模 4 與模 25 分別求解後聯立。"
        ],
        "pitfall": "切勿忘記常數項 $1^{2019} = 1$！總和是 $88 + 89 + 1 = 178 \\equiv 78$。"
      },
      "solution": {
        "thinking": "代入 ABCD = 2019，展開四個數字的 2019 次方，再分別求各項模 100 的餘數。",
        "steps": [
          "對四位數 2019，各數位為 $A = 2, B = 0, C = 1, D = 9$。",
          "展開定義式：$\\rho(2019) = 2^{2019} + 0^{2019} + 1^{2019} + 9^{2019} = 2^{2019} + 0 + 1 + 9^{2019} = 2^{2019} + 9^{2019} + 1$。",
          "計算 $9^{2019} \\pmod{100}$（二項式定理）：",
          "  $9^{2019} = (10 - 1)^{2019} \\equiv (-1)^{2019} + \\binom{2019}{1} \\times 10 \\times (-1)^{2018} \\pmod{100}$",
          "  $\\equiv -1 + 20190 \\equiv -1 + 90 = 89 \\pmod{100}$。",
          "計算 $2^{2019} \\pmod{100}$（中國剩餘定理拆解模 4 與模 25）：",
          "  • 模 4：因 $2019 \\ge 2$，故 $2^{2019} \\equiv 0 \\pmod 4$；",
          "  • 模 25：由歐拉定理 $\\phi(25) = 20$，故 $2^{20} \\equiv 1 \\pmod{25}$。$2^{2019} = (2^{20})^{100} \\times 2^{19} \\equiv 2^{19} \\equiv 2^{-1} \\pmod{25}$。因 $2 \\times 13 = 26 \\equiv 1 \\pmod{25}$，故 $2^{19} \\equiv 13 \\pmod{25}$；",
          "  • 聯立同餘：在模 100 中尋找 $\\equiv 13 \\pmod{25}$ 且被 4 整除的數：$13, 38, 63, 88$ 中只有 88 是 4 的倍數，故 $2^{2019} \\equiv 88 \\pmod{100}$。",
          "合併求末兩位：$\\rho(2019) \\equiv 88 + 89 + 1 = 178 \\equiv 78 \\pmod{100}$。",
          "因此最後兩個位的數值是 78。"
        ],
        "ans": "78",
        "quickTip": "週期性速解：$2^n$ 末兩位以 20 為週期循環，$2^{19}$ 末兩位即 88；$9^n$ 末兩位以 10 為週期循環（奇數項末位為 9），$9^{19} \\equiv 89$。合計 $88 + 89 + 1 = 178$，末兩位 78。"
      }
    }
  ]
});
})();
