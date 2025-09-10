import './style.css'
import { plusOne } from './myModule.ts'
let meaningOfLife: number | string = 42;

console.log(meaningOfLife);

meaningOfLife = '42';

console.log(plusOne(5));

type ClassroomInfo = {
  building?: string;
  room: string;
  capacity: number;
  };

const ClassroomInfo104: ClassroomInfo = {
  building: 'ATLAS', 
  room: '104',
  capacity: 30,
};
console.log(ClassroomInfo104.room);

// let something: string | boolean = false;
// something = 'hello world!';

type ServerResult = {
  success: true;
  output: string;
} | {
  success: false;
  errors?: string[];
};

function doServerCall(input: boolean): ServerResult {
  if (input) {
    return {
      success: true,
      output: 'hello world!',
    }
  }
  return {
    success: false,
    errors: ['hello world','this is an error'],
  };
}

function doLog(input: string) {
  console.log(input);
}
const ServerResult = doServerCall(true);

if (ServerResult.success) {
  console.log(ServerResult.output);
}