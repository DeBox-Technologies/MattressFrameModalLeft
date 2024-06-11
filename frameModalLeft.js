(function () {
  // Inject CSS
  var css = `
    .mattressai-button-style {
      border: none;
      background-color: #3f3f46A6;
      backdrop-filter: blur(60px);
      padding: 4px;
      padding-right: 8px !important;
      position: fixed;
      bottom: 20px;
      left: 20px;  // Keep the button on the left
      min-width: min-content;
      white-space: nowrap;
      border-radius: 9999px;
      z-index: 50;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: justify-between;
      align-items: center;
      gap: 8px;
      color: #e4e4e7;
      font-weight: 300;
      drop-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
    }
    .mattressai-button-style:hover {
      border: none;
      background-color: #52525bA6;
      backdrop-filter: blur(60px);
    }
    .mattressai-modal-background {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 50;
      backdrop-filter: blur(10px);
    }
    .mattressai-modal-container {
      border: none;
      position: fixed;
      bottom: 1rem;
      left: 1rem;  // Change this to 1rem
      background-color: #18181b;
      border-radius: 20%;  // Change this to 20%
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      max-width: 90%;
      width: 30vw;  // Change this to 30vw
      height: 92%;  // Change this to 92%
      max-height: 900px;
    }
    iframe {
      border: none;
      border-radius: 50%;
    }
    @media (max-width: 768px) {
      .mattressai-modal-container {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding-right: 5px;
        padding-left: 5px;
        min-width: 100vw;
        max-height: calc(100% - 120px);
        margin: 0;
        padding: 0;
        border-radius: 0;
        box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    }
  `;
  var style = document.createElement("style");
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.head.appendChild(style);

  var userConfig = window.myChatbotConfig || {};
  var iframeSrc =
    userConfig.src ||
    "https://dashboard.themattressai.com/QRchat/OkHkFvjcqccNfikX2m8EfnPEfjJ3";

  var html = `
    <button onclick="openModal()" class="mattressai-button-style">
    <img
      src="https://res.cloudinary.com/djr22sgp3/image/upload/v1689685357/mattress_ai_logo_circle_2_aw3f3q.png"
      width="40"
      alt="Open Modal"
    />
    <p>Find Your Mattress</p>
  </button>

  <div id="modal" class="mattressai-modal-background" style="display: none; width: 100%; height: 100%;" onclick="closeModal(event)">
    <div class="mattressai-modal-container" onclick="event.stopPropagation()">
      <iframe src="${iframeSrc}" style="border-radius: 8px; width: 100%; height: 100%; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"></iframe>
    </div>
  </div>
  `;
  document.body.insertAdjacentHTML("beforeend", html);

  // JavaScript functions
  window.openModal = function () {
    document.getElementById("modal").style.display = "block";
  };

  window.closeModal = function (event) {
    event.stopPropagation();
    document.getElementById("modal").style.display = "none";
  };
})();
