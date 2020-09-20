function calculate(args){
  let result;
  if(args.op === "+"){
    result=args.n1+args.n2;
  }else if(args.op==="-"){
    result=args.n1-args.n2;
  }else{
    result="Not supported";
  }
  return result;
}


class MyObject {
  constructor(parameter) {
    this.op = parameter.op;
    this.n1 = parameter.n1;
    this.n2 = parameter.n2;
  }
}

console.log(calculate(new MyObject({op: '-', n1: 10, n2: 4})));

console.log(calculate({op: '+', n1: 3, n2: 4}))