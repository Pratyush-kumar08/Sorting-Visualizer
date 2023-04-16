import React, { lazy } from 'react';
import { FormControl,FormControlLabel,FormLabel,Radio,RadioGroup } from '@material-ui/core';
export default function Form({FormLabel,values,,currentValue,labeles,onChange}){
    return(
        <div className="card container-small" style={{backgroungColor:'#343434'}}>
            <FormControl>
                <FormLabel>{FormLabel}</FormLabel>
                <RadioGroup value={currentValue} onChange={onChange}>
                    {values.map((value,index)=>(
                        <FormControlLabel 
                        key={`${value}_${index}`} 
                        value={value}
                        control={<Radio/>}
                        label={labeles[index]} />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    )
}