// 입력창
const textfield = document.getElementById("textfield");
// 해야 할 일
const assignmentsField = document.getElementById("assignments");
// 해낸 일
const completionsField = document.getElementById("completions");

// item 추가 함수 - isAssign 여부에 따라 해야 할 일과 해낸 일 구분
function addItem(isAssign, text) {
  // 바깥 영역
  const item = document.createElement("div");
  item.style.width = "100%";
  item.style.display = "flex";
  item.style.alignItems = "center";
  item.style.justifyContent = "space-between";
  item.style.borderBottom = "0.2rem solid #CEDBEE";
  item.style.padding = "0.4rem 0rem";
  const textArea = document.createElement("span");
  // 텍스트 영역
  textArea.textContent = text;
  // 버튼 영역
  const buttonArea = document.createElement("button");
  buttonArea.textContent = isAssign ? "완료" : "삭제";
  buttonArea.style.backgroundColor = "#CEDBEE";
  buttonArea.style.fontSize = "0.6rem";
  buttonArea.style.fontWeight = "600";
  buttonArea.style.border = "none";
  buttonArea.style.padding = "0.1rem 0.125rem";
  buttonArea.onmousedown = function () {
    buttonArea.style.background = "#537EBC";
  };
  buttonArea.onclick = function () {
    if (isAssign) {
      assignmentsField.removeChild(item);
      addItem(false, text);
    } else {
      completionsField.removeChild(item);
    }
  };
  // 바깥 영역에 텍스트, 버튼 추가
  item.appendChild(textArea);
  item.appendChild(buttonArea);
  // 바깥 영역 추가
  if (isAssign) {
    assignmentsField.appendChild(item);
  } else {
    completionsField.appendChild(item);
  }
}

// 입력 이벤트리스너 추가
textfield.addEventListener("keydown", function (e) {
  const keyCode = e.keyCode;
  if (keyCode === 13) {
    addItem(true, textfield.value);
    textfield.value = "";
  }
});
