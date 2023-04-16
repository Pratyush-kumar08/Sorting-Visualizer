import {swap} from'./helpers';

const Bs=(array,position,arraySteps,colorSteps)=>{
    let colorkey=colorSteps[colorSteps.length-1].slice();

    for(let i=0;i<array.length-1;i++){
        for (let j = 0; j < array.length-1; j++) {
            if (array[j]>array[j+1]) {
                array=swap(array,j,j+1);
            }
            arraySteps.push(array.slice());
            colorkey[j]=1;
            colorkey[j+1]=1;
            colorSteps.push(colorkey.slice());
            colorkey[j]=0;
            colorkey[j+1]=0;
        }
        colorkey[arraySteps.length-1-i]=2;
        arraySteps.push(array.slice());
        colorSteps.push(colorkey.slice());
    }
    colorSteps[colorSteps.length-1]=new Array(array.length).fill(2);
    return;
};
export default bs;