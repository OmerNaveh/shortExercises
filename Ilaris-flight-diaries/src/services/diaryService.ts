import diaryData from '../Data/ilarisData';
import { nonSenitiveDiaryEntry } from '../types';

const getEntries = (): nonSenitiveDiaryEntry[]=>{
    return diaryData.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility,
      }));
};

const addEntry= ()=>{
    return null;
};

export {getEntries, addEntry};