import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject(2);

subject.next(1);
subject.next(2);

subject.subscribe(v => console.log(`observer 1: ${v}`));

subject.next(3);
subject.next(4);

subject.subscribe(v => console.log(`observer 2: ${v}`));

subject.next(5);

// windowTime

console.clear();

const subject2 = new ReplaySubject(30, 200 /* 500 */);

subject2.subscribe(v => console.log(`observer 3: ${v}`))

let i = 1;
const interval = setInterval(() => subject2.next(i++), 100);

setTimeout(() => {
  subject2.subscribe((v) => console.log(`observer 4: ${v}`));
  clearInterval(interval);
}, 500);
