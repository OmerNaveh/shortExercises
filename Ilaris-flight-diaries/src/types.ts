export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';

export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
  }

export type nonSenitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

export interface diagnosesType{
  code:string,
  name:string,
  latin?:string
}
export enum gender{
  male='male',
  female='female'
} 
export interface patientType{
      id: string,
      name: string,
      dateOfBirth: string,
      ssn: string,
      gender: gender,
      occupation: string
}
export type securePatient = Omit<patientType, 'ssn'>;
export type addPatient = Omit<patientType, 'id'>;