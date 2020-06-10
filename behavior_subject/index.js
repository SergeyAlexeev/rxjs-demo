import { BehaviorSubject, fromEvent } from 'rxjs';

const subject = new BehaviorSubject(7);

console.log(`Get value: ${subject.getValue()}`);

subject.subscribe((v) => console.log(`observer 1: ${v}`));

subject.next(8);

console.log(`Get value: ${subject.getValue()}`);

subject.subscribe((v) => console.log(`observer 2: ${v}`));


console.clear();

class CounterService {
  
  ininialCount = { value: 0 };

  counter = new BehaviorSubject(this.ininialCount);

  getCounter() {
    return this.counter;
  }

  getCount() {
    return this.counter.getValue();
  }

  setCount(value) {
    this.counter.next({ value });
  }

  resetCount() {
    this.counter.next(this.ininialCount);
  }
}

const countEl = document.getElementById('count');
const decBtnEl = document.getElementById('dec-btn');
const incBtnEl = document.getElementById('inc-btn');
const resetBtnEl = document.getElementById('reset-btn');

const counterService = new CounterService();

fromEvent(incBtnEl, 'click').subscribe(() => {
  counterService.setCount(counterService.getCount().value + 1);
});

fromEvent(decBtnEl, 'click').subscribe(() => {
  counterService.setCount(counterService.getCount().value - 1);
});

fromEvent(resetBtnEl, 'click').subscribe(() => {
  counterService.resetCount();
});

counterService.getCounter().subscribe(({ value }) => {
  countEl.innerHTML = value;
});
