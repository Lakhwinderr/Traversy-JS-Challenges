function calculate(expression) {
    expression = expression.split(" ")
    function calc(op, num1, num2){
      switch(op){
        case "*":
         return num1 * num2;
       case "/":
         return num1/num2;
       case "+":
         return num1 + num2;
       case "-":
         return num1 - num2;
      }
      return 0;
    }
    function isOperator(s){
      return s === "*" || s === "/" || s=== "+" || s === "-";
    }
    const stack = [];
    const queue = [];
     let ans = 0;
    let i = 0;
    while(i < expression.length){
      if(isOperator(expression[i]) && !isOperator(expression[i + 1]) && !isOperator(expression[i + 2])){
        const res = calc(expression[i], parseInt(expression[i + 1]), parseInt(expression[i +2]));
        queue.push(res);
        i +=3;
      }
      else if(isOperator(expression[i])){
        stack.push(expression[i])
        i++;
      }
      else{
        queue.push(parseInt(expression[i]))
        i++;
      }
    }
     if(queue.length > 0){
       ans = queue.shift();
     }
     while(queue.length > 0){
       ans = calc(stack.pop(), ans, queue.shift());
     }
   return ans;
 }

 const ans = calculate("* + 3 4 5")
 console.log(ans)