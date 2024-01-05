import { Calendar } from './calendar';

export class Student {
  constructor(
    public id: number,
    public firstName: string,
    public familyName: string,
    public phone: string,
    public address: string,
    public calendar: Calendar
  ) {}
}
