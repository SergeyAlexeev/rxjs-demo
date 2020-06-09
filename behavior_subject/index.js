import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(7);

console.log(`Get value: ${subject.getValue()}`);

subject.subscribe((v) => console.log(`observer 1: ${v}`));

subject.next(8);

console.log(`Get value: ${subject.getValue()}`);

subject.subscribe((v) => console.log(`observer 2: ${v}`));
