# TaiwanIndieBand
DEMO: https://avy60263xv.github.io/TaiwanIndieBand/

本專案以獨立樂團為題，結合獨立樂團的形象發展設計，網站結合聆聽音樂與購物車兩大功能，
讓您一邊聽音樂一邊購物。並使用Bootstrap完成響應式設計，不論您使用電腦、平板或手機等不同裝置，都能自在的瀏覽網站。

視覺與排版
1. Bootstrap個人化：透過修改_variables.scss來變化成自己客製的樣板
2. 響應式網站：主架構套用Bootstrap框架與網格完成響應式設計，但Bootstrap無法細緻控制的部分，額外透過@media screen進行操作
3. RFS：文字使用RFS來協助調整，避免單純使用CSS的文字單位如rem會有過大、過小的問題，呈現更一致化的版面。

資料與功能
4. Ajax動態切換資料：利用Promise語法，動態以樂團為主切換不同歌單，避免當有大量歌曲時，網頁載入過久的不佳使用體驗。
5. Web Audio API：控制audio聆聽音樂，並動態更換播放/暫停 icon。
6. NPM：利用NPM安裝splidejs等套件，完成滑動圖片功能，節省重複開發的精力與時間。
7. localStorage Web API：使用Web Storage將網頁資料儲存在使用者的瀏覽器當中，購物車資料可以跨瀏覽器分頁做使用。使
8. 購物車系統：使用者在任何頁面都可刪除購物車音樂，每個頁面也都會抓取localStorage資料，結完帳後購物車的清單也自動清空。

