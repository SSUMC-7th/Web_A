document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.querySelector("#todo-input"); 
  const todoList = document.querySelector("#todo-list");
  const doneList = document.querySelector("#done-list");

  let isCompleted = false;

  // 할 일 추가 함수
  function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") {
      alert("스터디 계획을 입력해주세요!");
      return;
    }

    // 새로운 할 일 항목 생성
    const todoItem = document.createElement("li");
    todoItem.className = "todo-item";
    todoItem.textContent = todoText;

    // 완료 버튼 생성
    const completeButton = document.createElement("button");
    completeButton.textContent = "완료";
    completeButton.className = "complete-btn";
    completeButton.addEventListener("click", () => moveToDone(todoItem));

    // 할 일 항목에 완료 버튼 추가
    todoItem.append(completeButton);
    todoList.append(todoItem);

    // 입력 필드 초기화
    todoInput.value = "";
  }

  // 스터디 계획 작성 후 Enter키 이벤트
  // 한글 입력 끝나면 compositionend 이벤트를 감지하여 keydown 이벤트를 추가적으로 처리할 수 있도록 함 
  todoInput.addEventListener("compositionend", () => {
    console.log("한글 입력 완료");
  });

  todoInput.addEventListener("keydown", (e) => {
    if (event.key === "Enter") {
      console.log("Enterkey 눌림")
      addTodo();
    }
  });

  // 할 일을 해낸 일로 옮기는 함수
  function moveToDone(todoItem) {
    // 완료 버튼 제거
    const completeButton = todoItem.querySelector(".complete-btn");
    completeButton.remove();

    // 삭제 버튼 생성
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", () => deleteDone(todoItem));

    // 해낸 일 목록에 추가하고 삭제 버튼 추가
    todoItem.appendChild(deleteButton);
    doneList.appendChild(todoItem);
  }

  // 해낸 일 항목을 삭제하는 함수
  function deleteDone(doneItem) {
    doneItem.remove();
  }

});