import { DayDto } from './../dto/day.dto';
export class DaysService {
    public async getAll(): Promise<DayDto[]> {
        return [
        { index: 1, name: 'Monday' },
        { index: 2, name: 'Tuesday' },
        { index: 3, name: 'Wednesday' },
        { index: 4, name: 'Thursday' },
        { index: 5, name: 'Friday' },
        { index: 6, name: 'Saturday' }];
    }
}
