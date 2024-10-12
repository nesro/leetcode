#!/usr/bin/env ts-node
const assert = require('node:assert').strict;

const palindromeSet = new Set();
const noPalindromeSet = new Set();

function getMaxPalindrome(s: string, i: number, rightOffset: number): string {
    let left = i;
    let right = i + rightOffset;

    while (s[left] === s[right] && left >= 0 && right < s.length) {
        left--;
        right++;
    }

    return s.slice(left + 1, right);
}

function longestPalindrome(s: string): string {
    let palindrome = '';
    for (let i = 0; i < s.length; i++) {
        const p1 = getMaxPalindrome(s, i, 0);
        const p2 = getMaxPalindrome(s, i, 1);

        if (p1.length > palindrome.length) {
            palindrome = p1;
        }

        if (p2.length > palindrome.length) {
            palindrome = p2;
        }
    }
    return palindrome;
}

const test5 = longestPalindrome('babadada');
assert(test5 === 'adada');

const test4 = longestPalindrome('abbcccbbbcaaccbababcbcabca');
assert(test4 === 'bbcccbb');

const test3 = longestPalindrome(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
);
assert(test3);

const test2 = longestPalindrome('aacabdkacaa');
assert(test2 === 'aca');

const test1 = longestPalindrome('abcba');
assert(test1 === 'abcba');

console.log('all ok :)');
