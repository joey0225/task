const a =+prompt('Enter first number:   ');
const o =prompt('enter operator');
const b =+prompt('Enter second number:   ');

switch(o){
    case "+":
     document.write(a+b)
     break;
     case "-":
        document.write(a-b)
        break;
        case "*":
            document.write(a*b)
            break;
            case "/":
                document.write(a/b)
                break;
                default:
                    document.write("bad expression")
}