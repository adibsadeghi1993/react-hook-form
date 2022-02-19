import React from 'react'
import { Controller,Control } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import FormInputs from "../model/InputTypes"

interface Props {
    label:string,
    name:"password" | "email",
    control:Control<FormInputs, object>,
    error?:string,
   
}

const Inputs = ({label,name,control,error}: Props) => {
  
    return (
        <>
          <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              variant="standard"
              
              {...field}
              fullWidth
        
              label={label}
              error={!!error}
              helperText={error ? error : ""}
            />
          )}
        />  
        </>
    )
}

export default React.memo(Inputs)
