interface calcObj{
    days:number,
    trainingDays: number,
    OgTarget:number,
    avgTime:number,
    targetReached:boolean,
    rating : 1|2|3 , 
    ratingDes: string
}

export function calculateExercises(training : number[], target:number):calcObj{
    const days:number = training.length;
    const trainingDays:number = training.filter(hours=> hours>0).length
    let trainingHours:number=0;
    for(let dailyHours of training){
        trainingHours = trainingHours + dailyHours
    }
    const avgTime:number = trainingHours/days
    const targetReached:boolean = avgTime >= target
    let rating:1|2|3;
    let ratingDes:string;
    if(targetReached){
        rating = 3;
        ratingDes = 'amazing work - you crushed your goals'
    } 
    else if(avgTime > target/2){
        rating= 2;
        ratingDes = 'not too bad but could be better'
    }
    else{
        rating= 1;
        ratingDes = 'you should do better'
    }
    return {
        days,
        trainingDays,
        OgTarget: target,
        avgTime,
        targetReached,
        rating,
        ratingDes
    }
}

// console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1] ,2));

// interface userValues {
//     target: number;
//     training: number[];
//   }
// const parseArguments = (args: Array<string>): userValues => {
//     const training:number[] = [];
//     if (args.length < 2) throw new Error('Not enough arguments');
//     for (let i=2; i<args.length ;i++){
//         if (isNaN(Number(args[i]))){
//             throw new Error('Provided values were not numbers!');
//         }
//         else{
//             if(i>2){ // only refer to values after target is set
//                 training.push(Number(args[i]))
//             }
//         }
//     }
//     return {
//         target:Number(args[2]),
//         training}
//   }

//   try {
//     const { target, training } = parseArguments(process.argv);
//     console.log(calculateExercises(training,target)
//     );
// }
// catch(error){
//     console.log(error);
// }