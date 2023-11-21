$(document).ready(function () {
  /**
   * Modal 最新一次的卷軸捲動高度位置
   */
  var ModalNewPosition = 0;
  /**
   * Modal 前一次的卷軸捲動高度位置
   */
  var ModalOldPosition = 0;

  /**
   * Modal1 內左側 Nav 的 Title 名稱
   */
  const UIUX1_nav_ID = {
    UX: ['Main_function_feature', 'Interview', 'Empathy_Map', 'Service_Blueprinting', 'User_Journey_Map'],
    UI: ['ColorScheme', 'LOGOICONDesign', 'UIDesign'],
    Figma: ['Figma-1']
  };
  /**
   * Modal2 內左側 Nav 的 Title 名稱
   */
  const UIUX2_nav_ID = {
    UX: ['Main_function_feature-2', 'Interview-2', 'Empathy_Map-2', 'Persona-1-2', 'Service_Blueprinting-2', 'User_Journey_Map-2'],
    Export: ['Export'],
    SUS: ['SUS'],
    UI: ['organizational-chart'],
    Figma: ['Figma-2']
  }


  BigImg();
  NavAction();
  ModalScroll('modal-1', UIUX1_nav_ID);
  ModalScroll('modal-2', UIUX2_nav_ID);


  /**
     * 取得點擊的圖片及標題資訊放在彈出的 modal 上
     */
  function BigImg() {
    $('.work-hover').click(function (e) {
      e.preventDefault();

      let Text = $(this).siblings('.aside-title').text();
      if (!Text) {
        Text = $(this).parent().parent().siblings('.aside-title').text();
      }
      $('.modal-title').text(Text);

      let ImgName = $(this).data("img");
      let ImgSource = `../src/assets/images/SideProject/design/${ImgName}.jpg`;
      $('#modal-img').attr('src', ImgSource);
    });
  }

  /**
   * 點擊個人專案中 UI/UX 內的 nav 切換選項的顏色
   */
  function NavAction() {
    $('.list-group-item').click(function () {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });
  }

  /**
     * 判斷 Modal 視窗的內容與左側標題相符時，標題的 active 切換
     * @param {obj} modalNavID 
     * Modal 內左側的 Nav 中的 Title 名稱之物件名稱
     */
  function ModalTitleActive(ModalName, modalNavID) {
    ModalNewPosition = $(`#${ModalName}`).scrollTop();

    Object.keys(modalNavID).forEach(title => {
      let UIUX_title = modalNavID[title];
      for (i = 0; i < UIUX_title.length; i++) {
        const UIUX_id = document.getElementById(UIUX_title[i]);
        const rectTop = UIUX_id.getBoundingClientRect().top;
        //console.log(rectTop);
        const rectBottom = UIUX_id.getBoundingClientRect().bottom;
        //console.log(rectBottom);

        if (ModalOldPosition < ModalNewPosition) {
          if (rectTop >= -10 && rectTop < 120) {
            $(`#${UIUX_title[i]}_title`).addClass('active');
            $(`#${UIUX_title[i]}_title`).siblings().removeClass('active');
            break;
          }
        }
        else {
          if (rectBottom >= 250 && rectBottom < 350) {
            $(`#${UIUX_title[i]}_title`).addClass('active');
            $(`#${UIUX_title[i]}_title`).siblings().removeClass('active');
            break;
          }
        }
      }
    })
    ModalOldPosition = ModalNewPosition;
  }

  /**
   * Modal 捲動時執行的事件
   * @param {string} ModalName 
   * 選定欲捲動的 Modal 名稱
   * @param {obj} ModalNavID 
   * Modal 內左側的 Nav 中的 Title 名稱之物件名稱
   */
  function ModalScroll(ModalName, ModalNavID) {
    const modal1 = document.getElementById(ModalName);
    modal1.addEventListener("scroll", function () {
      ModalTitleActive(ModalName, ModalNavID);
    });
  }

  $('.swiper-slide').find('img').addClass('img-shadow');
  $('.aside-title').siblings('img').addClass('img-shadow');
  $('#modal-img').addClass('img-shadow');
  $('video').addClass('img-shadow');
});