$("document").ready(function () {
  let expression = "";
  let showInput = $(".input");
  let showOutput = $(".output");
  let answer;

  $(".keyboard-key").click(function (e) {
    showInput.removeClass("input-when-show-answer");
    showOutput.removeClass("output-active-block");
    let textToAdd = $(e.target).val();
    expression += textToAdd;
    showInput.text(expression);
    console.log(expression);
  });
  $(".keyboard-key-operator").click(function (e) {
    let textToAdd = $(e.target).parent().val();
    expression += textToAdd;
    showInput.text(expression);
  });
  $(".keyboard-key-enter").click(function () {
    answer = eval(
      expression
        .split("")
        .map((letter) => {
          if (letter == "x") letter = "*";
          if (letter == ":") letter = "/";
          return letter;
        })
        .join("")
    );
    showInput.addClass("input-when-show-answer");
    showOutput.addClass("output-active-block");
    showOutput.text(answer);
    expression = "";
    expression = answer;
    $(".keyboard-key-operator").click(function (e) {
      showInput.val(expression);
    });
    showInput.val(expression);
  });
  $(".keyboard-key-ac").click(function () {
    expression = "";
    showInput.text("");
    showInput.removeClass("input-when-show-answer");
    showOutput.removeClass("output-active-block");
    showOutput.text("");
  });
  $(".keyboard-key-del").click(function () {
    let expressionList = expression.split("");
    expressionList.pop();
    expression = expressionList.join("");
    showInput.text(expression);
  });
});
