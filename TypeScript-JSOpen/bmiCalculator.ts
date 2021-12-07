
export function calculateBmi(height:number, weight:number):string{
    const heightInM:number = height/100
    const result:number = weight/ (heightInM*heightInM) 
    if(result<16.0)
        return 'Underweight (Severe thinness)';
    if(result>=16 && result<=16.9)
        return 'Underweight (Moderate thinness)';
    if(result>=17 && result<=18.4)
        return 'Underweight (Mild thinness)';
    if(result>=18.5 && result<=24.9)
        return 'Normal (healthy weight)';
    if(result>=25.0)
        return 'Overweight';
    return ""
}

// interface userValues {
//     height: number;
//     weight: number;
//   }
// const parseArguments = (args: Array<string>): userValues => {
//     if (args.length < 4) throw new Error('Not enough arguments');
//     if (args.length > 4) throw new Error('Too many arguments');
  
//     if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//       return {
//         height: Number(args[2]),
//         weight: Number(args[3])
//       }
//     } else {
//       throw new Error('Provided values were not numbers!');
//     }
//   }

//   try {
//     const { height, weight } = parseArguments(process.argv);
//     console.log(calculateBmi(height,weight)
//     );
// }
// catch(error){
//     console.log(error);
// }

// console.log(calculateBmi(210, 74)) 