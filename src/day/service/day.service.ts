import { DayDto } from './../dto/day.dto';
export class DaysService {
    public async getAll(): Promise<DayDto[]> {
        return [{ index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }, { index: 5 }, { index: 6 }, { index: 7 }];
    }
}
