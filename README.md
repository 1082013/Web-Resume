# Web-Resume
Hello! This is Rung-An Tsai's resume. You can know more about me from visit my website. Nice to meet you!

哈囉 ! 這是蔡容安的履歷，你可以透過造訪我的履歷網頁更了解我。很高興認識你!

## 畫面
![Rung-An Tsai's resume](https://github.com/1082013/README-Image/blob/main/%E4%BD%9C%E5%93%81/Resume%E7%B6%B2%E9%A0%81%E6%88%AA%E5%9C%96/web%E7%89%88%E7%B6%B2%E9%A0%81.png)


## 專案的使用效果圖
在此使用行動裝置呈現
| 網頁切版介紹 | UI/UX 介紹 | 平面設計介紹 |
| :--: | :--: |:--:|
| <img src="https://github.com/1082013/README-Image/blob/main/%E4%BD%9C%E5%93%81/Resume%E7%B6%B2%E9%A0%81%E6%88%AA%E5%9C%96/%E6%89%8B%E6%A9%9F%E7%89%88%E7%B6%B2%E9%A0%81%E5%88%87%E7%89%88_Modal.png" alt="網頁切版介紹" width="275"> | <img src="https://github.com/1082013/README-Image/blob/main/%E4%BD%9C%E5%93%81/Resume%E7%B6%B2%E9%A0%81%E6%88%AA%E5%9C%96/%E6%89%8B%E6%A9%9F%E7%89%88UIUX_Modal.png" alt="UI/UX介紹" width="275"> |  <img src="https://github.com/1082013/README-Image/blob/main/%E4%BD%9C%E5%93%81/Resume%E7%B6%B2%E9%A0%81%E6%88%AA%E5%9C%96/%E6%89%8B%E6%A9%9F%E7%89%88%E5%B9%B3%E9%9D%A2%E8%A8%AD%E8%A8%88_Modal.png" alt="平面設計介紹" width="275"> |

## 資料夾說明
-  public - 整合後的檔案放置處
    -  CSS - Sass 編譯後的 CSS 檔放置處

-  src - 整合前及靜態檔案放置處
    -  assets - 圖片、影片等檔案放置處
    -  js - js 檔放置處
    -  modules - 使用的現成模組放置處
    -  scss - SCSS(Sass) 檔放置處

## 整合方式
-  SCSS 檔案個別檔案用途
    -  自定義預設樣式

         -  _reset.scss，清除瀏覽器預設格式
         -  _variable.scss，儲存變數
         -  _mixin.scss，儲存常用 mixin
         -  _utilities.scss，通用樣式
         -  _breakpoints.scss，斷點，方便 RWD 撰寫
         -  _base.scss，基礎預設樣式
         -  _helper.scss，方便快速使用之樣式
    -  Modules
         -  _bootstrap-utilities.scss，bootstrap 的 utilities 樣式
         -  _bootstrap-grid.scss，bootstrap 的 grid 樣式
         -  _swiper.scss，自定義的 swiper 樣式
    -  Layout
         -  _header.scss，表頭預設樣式
         -  _footer.scss，表尾預設樣式
         -  _section.scss，區塊預設樣式
    -  Component
         -  _contact.scss，聯絡資訊樣式
         -  _line.scss，線條樣式
         -  _list.scss，清單樣式
         -  _nav.scss，導覽頁籤樣式
         -  _title.scss，標題樣式
         -  _project.scss，專案區塊樣式
         -  _work.scss，作品樣式
         -  _slogan.scss，標語樣式

-  將上述檔案分別整合到 style.scss

## 專案技術
HTML、SCSS（Sass）、JavaScript、RWD（響應式網頁設計）、Git 版本控制

## 第三方資源
-  Google Fonts
    -  使用'Inter'字型，使用 Web Fonts 的方式，透過網頁連結的嵌入將字型呈現。
    -  使用 Google Fonts 的 icon，透過網頁連結的嵌入將 icon 呈現。
 
-  jQuery
    -  處理互動元素
-  Boostrap
    -  Utilities，搭配 breakpoint 斷點使用，處理 RWD。
    -  Grid 網格系統，搭配 breakpoint 斷點使用，處理 RWD。
    -  Breakpoints 斷點。
    -  Modal 互動視窗，使用於「個人專案」中「網頁切版」、「UI/UX」、「平面設計」的彈出視窗
    -  Navs & tabs 導覽與頁籤，使用於「個人專案」中「UI/UX」的頁籤切換
    -  List group 列表群組，使用於「個人專案」中「UI/UX」的 modal 視窗中，作為每個 tab 中的 href 使用
-  Swiper
    -  輪播，使用於「個人專案」中「平面設計」的「虛擬攝影棚手冊」照片輪播，搭配內建 breakpoint 斷點使用，可透過左右箭頭或是滑鼠滾動方式進行輪播畫作的切換。

## 版本歷史
-  V1.0.1
    -  新增: footer 版權
    -  變更: Box-shadow、UI/UI 中口袋宿舍通的 Figma 的 nav 排版
-  V1.0.0
    -  初次上傳專案

## 關於作者
**姓名：** 蔡容安 Rung-An Tsai  
**電子郵件：** yhjhs92929.2016@gmail.com  

## License
Web-Resume is released under MIT license. © 2023 Rung-An Tsai
