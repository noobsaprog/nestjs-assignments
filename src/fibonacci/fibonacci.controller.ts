import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class FibonacciController {
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
}
