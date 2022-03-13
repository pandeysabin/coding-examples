const max = 100000000;

function InstanceOfClass() {
  // @ts-ignore
  if (!(this instanceof InstanceOfClass)) {
    // @ts-ignore
    return new InstanceOfClass();
  }
}

function NewTargetClass() {
  if (!new.target) {
    // @ts-ignore
    return new NewTargetClass();
  }
}

console.time("InstanceOfClass");
for (let i = 0; i <= max; i++) {
  InstanceOfClass();
}
console.timeEnd("InstanceOfClass");

console.time("NewTargetClass");
for (let i = 0; i <= max; i++) {
  NewTargetClass();
}
console.timeEnd("NewTargetClass");
