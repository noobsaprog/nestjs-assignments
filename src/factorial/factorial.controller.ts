import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class FactorialController {
  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: string): { sequence: number[] } {
    const num = parseInt(n, 10);
    if (isNaN(num) || num <= 0) return { sequence: [] };

    const sequence = [0, 1];
    for (let i = 2; i < num; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return { sequence: sequence.slice(0, num) };
  }

  @Get('prime/:number')
  isPrime(@Param('number') number: string): { isPrime: boolean } {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 2) return { isPrime: false };

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return { isPrime: false };
      }
    }

    return { isPrime: true };
  }

  // Assignment 3: Factorial Calculator
  @Get('factorial/:number')
  calculateFactorial(@Param('number') number: string): { factorial: number } {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 0) return { factorial: -1 }; // Return -1 for invalid input

    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }

    return { factorial: result };
  }
}
