$("document").ready(function () {
  let expression = "";
  let showInput = $(".input");
  let showOutput = $(".output");
  let answerBlock = $(".answer-block-container");
  $(".keyboard-key").click(function (e) {
    answerBlock.removeClass("active-block");
    let textToAdd = $(e.target).val();
    expression += textToAdd;
    showInput.text(expression);
  });
  $(".keyboard-key-operator").click(function (e) {
    answerBlock.removeClass("active-block");
    let textToAdd = $(e.target).parent().val();
    expression += textToAdd;
    showInput.text(expression);
  });
  $(".keyboard-key-enter").click(function () {
    let answer = eval(
      expression
        .split("")
        .map((letter) => {
          if (letter == "x") letter = "*";
          if (letter == ":") letter = "/";
          return letter;
        })
        .join("")
    );
    answerBlock.addClass("active-block");
    showOutput.text(answer);
    expression = answer;
    input.val(expression);
  });
  $(".keyboard-key-ac").click(function () {
    expression = "";
    showInput.text("");
  });
  $(".keyboard-key-del").click(function () {
    let expressionList = expression.split("");
    expressionList.pop();
    expression = expressionList.join("");
    showInput.text(expression);
  });
});
