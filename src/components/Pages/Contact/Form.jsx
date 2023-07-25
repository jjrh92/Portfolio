import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useForm, ValidationError } from '@formspree/react';
import { ColorsPortfolio } from '../../../colors';
import ReCAPTCHA from "react-google-recaptcha";
import "./Form.css";

const FormContainer = styled ("form") ({

    display: "flex",
    borderRadius: "10px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "1rem",
    marginBottom: "1rem",
    gap: "1rem",
    backgroundColor: ColorsPortfolio.background2,
    width: "100%",
    height: "100%",
    
});

const Label = styled ("label") ({

    fontSize: "20px",
    color: ColorsPortfolio.text1,
    textAlign: "center",
  
});

const Input = styled ("input") ({

    backgroundColor: ColorsPortfolio.text1,
    height: "35px",
    width: "350px",
    borderRadius: "10px",
    fontSize: "20px",
    outline: "none",
    border: "none",
    color: ColorsPortfolio.hover,

});

const TextArea = styled ("textarea") ({

    backgroundColor: ColorsPortfolio.text1,
    display: "flex",
    height: "330px",
    width: "350px",
    borderRadius: "10px",
    fontSize: "3rem",
    outline: "none",
    border: "none",
    color: ColorsPortfolio.hover,
    resize: "none",

});

const SendButton = styled ("button") ({

    fontSize: "30px",
    fontWeight: "bold",
    backgroundColor: ColorsPortfolio.text1,
    border: "2px solid",
    borderColor: ColorsPortfolio.hover,
    borderRadius: "10px",
    color: ColorsPortfolio.hover,
    cursor: "pointer",
  
});

function Equis () {

  
}

function Form () {

  const [state, handleSubmit] = useForm ("xbjeyeoq");

  if (state.succeeded) {

    return <p>I'll be in touch shortly. Best Regards, Julio.</p>;

  }
  
  return (

    <FormContainer id='FormContainer' onSubmit={handleSubmit}>

      <Label htmlFor="email">Email Address</Label>

      <Input autoComplete='off' required placeholder='Your email here' id="email" type="email" name="email" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Your email here."}/>

      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Label htmlFor="message">Message:</Label>

      <TextArea autoComplete='off' required placeholder='Enter your message here' id="message" name="message" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Enter your message here."}/>

      <ValidationError prefix="Message" field="message" errors={state.errors} />


      <ReCAPTCHA sitekey="6Lf7EVAnAAAAAAsSNxHBAVhlHNmLuAm7Z5oNLWcI" onChange={Equis} />,
        {/* <SendButton type="submit" disabled={state.submitting}>Send</SendButton> */}
      
    </FormContainer>

  );

}

export default Form;