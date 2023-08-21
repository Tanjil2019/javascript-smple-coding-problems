function bar(){
     console.log('bar sub');
}

function foo(){
     console.log('foo main');

     bar()
}

foo()