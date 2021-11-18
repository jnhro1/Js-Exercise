const isPalindrome = str => {
  const origin = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return origin === [...origin].reverse().join('') ? true : false;
};

console.log(isPalindrome('A man, a plan, a canal:_ Panama')); //true
console.log(isPalindrome('race a car')); //false
