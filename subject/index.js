import { Subject, from } from 'rxjs';

const subject = new Subject();

subject.subscribe( v => console.log(`observer 1: ${v}`));

subject.next(1);
subject.next(2);

subject.subscribe(v=> console.log(`observer 2: ${v}`));

subject.next(3);
subject.next(4);

// Make Observable multicasted

// const subject2 = new Subject();

// subject2.subscribe(v => console.log(`observer 3: ${v}`));
// subject2.subscribe(v => console.log(`observer 4: ${v}`));

// const observable = from(['a', 'b', 'c']);

// observable.subscribe(subject2);