# _scripts 資料夾說明 (README.md)

本資料夾存放自動化生成題庫、轉換與維護腳本，嚴格遵循全域專案工程規範：

---

### 腳本清單與功能說明

1. **`build_deck_data.py`**
   - **作用**：解析 2019 全港數學思維大激鬥（MathConceptition 2019 S1）初中組試題、核心考點公式、詳細推導步驟與速解訣竅，自動編譯為前端題庫資料模組 `data/ch-2019-s1.js`。
   - **輸入**：本機提取的試卷題幹、官方標準答案、原卷幾何截圖。
   - **輸出**：`../data/ch-2019-s1.js`。
   - **執行方式**：
     ```bash
     python _scripts/build_deck_data.py
     ```

---

### 未來擴充指引 (Adding More Papers)
當未來需要增加後續年度或年級的試卷（例如 2019 S2、2020 S1 等）：
1. 在 `_scripts/` 撰寫相應生成腳本或手動建立 `data/ch-<年份>-<年級>.js`。
2. 在 `index.html` 的 `window.PAPER_REGISTRY` 陣列中追加該試卷設定。
3. 在 `index.html` 底部引入該試卷腳本 `<script src="data/ch-<年份>-<年級>.js"></script>` 即可自動出現在目錄與進度管理中。
