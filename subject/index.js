import { Subject, from } from 'rxjs';

const subject = new Subject();

subject.subscribe( v => console.log(`observer 1: ${v}`));

subject.next(1);
subject.next(2);

subject.subscribe(v=> console.log(`observer 2: ${v}`));

subject.next(3);
subject.next(4);
