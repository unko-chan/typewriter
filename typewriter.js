const sentence = 'hello there from lighthouse labs';
let delay = 0;

for (let i = 0; i <= sentence.length; i++) {
  delay += 50;
  setTimeout(() => {
    if (i !== sentence.length) {
      process.stdout.write(sentence[i]);
    } else {
      console.log('\n');
    }
  }, delay);
}
