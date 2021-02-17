import{conHello, fnPlus} from './library_names.js';

console.log(conHello, '이름으로 내보내기 입니다.');
console.log('1 + 2 = ', fnPlus(1, 2));

import * as myLibrary from './library_names.js';
console.log(myLibrary.conHello, '*을 사용한 내보내기 입니다.');
console.log('3 + 4 =', myLibrary.fnPlus(3, 4));

import fnMyfunction from './library_default.js';
console.log('안녕하세요 기본 보내기 입니다.');
console.log('5 + 6 = ', fnMyfunction(5, 6));