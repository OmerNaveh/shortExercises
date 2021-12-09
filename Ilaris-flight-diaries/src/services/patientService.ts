/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { patients } from "../Data/patients";
import { securePatient, addPatient, patientType, gender } from "../types";
import {v1 as uuid} from 'uuid';


export const getSecurePatients = ():securePatient[]=>{
    return patients.map(({id,name,dateOfBirth,gender,occupation})=> ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    })
    );
};

export const createPatient = (object:addPatient):patientType=>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const id:string = uuid();
    const newPatient:patientType= {
        id : id,
        ...object
    };
    patients.push(newPatient);
    return newPatient;
};
type fields = {ssn:unknown, name:unknown, dateOfBirth:unknown, gender:unknown, occupation:unknown};
export const toNewPatient = ({ssn, name, dateOfBirth, gender, occupation}:fields):addPatient=>{
    const newPatient:addPatient = {
        ssn: parseString(ssn),
        name: parseString(name),
        dateOfBirth: parseDate(dateOfBirth),
        gender:parseGender(gender),
        occupation:parseString(occupation)
    };
    return newPatient;
};
const isString= (text:unknown):text is string=>{
    return typeof(text)==='string' || text instanceof(String);
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param:any): param is gender=>{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Object.values(gender).includes(param);
};
const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};
const parseString = (givenString:unknown):string=>{
    if(!givenString || !isString(givenString)){
        throw 'wrong input';
    }
    return givenString;
};
const parseGender = (givenGender:unknown):gender=>{
    if(!givenGender || !isGender(givenGender)){
        throw 'wrong gender';
    }
    return givenGender;
};
const parseDate = (givenDate:unknown):string=>{
    if(!givenDate || !isString(givenDate) || !isDate(givenDate)){
        throw 'wrong input';
    }
    return givenDate;
};