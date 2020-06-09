import { AsyncSubject } from 'rxjs';

const subject = new AsyncSubject();

subject.subscribe(v => console.log(`observer: ${v}`));

subject.next(1);
subject.next(2);

setTimeout(() => {
  subject.next(3);
  subject.complete();
}, 3000);
