//process.stdout.write('hello from spinner1.js... \rheyy\n');
let spinning = ["\r|", "\r/", "\r-", "\r\\", "\r|"];
let i = 0;
for (const element of spinning) {
  
  setTimeout(() => {
    process.stdout.write(`${element}   `);
  }, 100 + 200 * i);
  i++;
}
