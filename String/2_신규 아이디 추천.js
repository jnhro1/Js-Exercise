const recommendNewId = new_id => {
  const answer = new_id
    .toLowerCase()
    .replace(/[^\w-\.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/g, '');
  const len = answer.length;
  return len <= 2 ? answer + answer.charAt(len - 1).repeat(3 - len) : answer;
};

console.log(recommendNewId('...!@BaT#*..y.abcdefghijklm')); //bat.y.abcdefghi
