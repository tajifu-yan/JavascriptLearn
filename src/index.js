import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  onInCompleteAdd(inputText);
};

const onInCompleteAdd = (inputText) => {
  // div作成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(ボタン)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    onCompleteAdd(inputText);
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のlistに追加
  document.getElementById("incomplete-list").appendChild(div);
};

const onCompleteAdd = (inputText) => {
  const div = document.createElement("div");
  div.className = "list-low";

  const li = document.createElement("li");
  li.innerText = inputText;

  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  returnButton.addEventListener("click", () => {
    const deleteTarget = returnButton.parentNode;
    document.getElementById("complete-list").removeChild(deleteTarget);
    onInCompleteAdd(inputText);
  });

  div.appendChild(li);
  div.appendChild(returnButton);

  document.getElementById("complete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
