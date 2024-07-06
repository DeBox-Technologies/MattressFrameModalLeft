(function () {
  // Inject CSS
  var css = `
    .mattressai-button-style {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: #2196F3;
      backdrop-filter: blur(60px);
      padding: 12px 16px;
      position: fixed;
      left: 20px;
      bottom: 20px;
      border-radius: 20px;
      z-index: 50;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      cursor: pointer;
      color: white;
      font-family: Montserrat, sans-serif;
      font-size: 16px;
      font-weight: bold
    }
    .mattressai-button-style:hover {
      background-color: #52525bA6;
    }
    .mattressai-button-image {
      margin-right: 10px;
    }
    .mattressai-modal-background {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 50;
    }
    .mattressai-modal-container {
      border: none;
      position: fixed;
      bottom: 1rem;
      left: 1rem;
      background-color: #18181b;
      border-radius: 20%;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      max-width: 90%;
      width: 30vw;
      height: 92%;
      max-height: 900px;
    }
    iframe {
      border: none;
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
        class="mattressai-button-image"
        src="https://res.cloudinary.com/dkbn21xdu/image/upload/v1720271826/fff_fufol2.png"
        width="32"
        alt="Open Modal"
      />
      <span>Find Your Mattress</span>
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