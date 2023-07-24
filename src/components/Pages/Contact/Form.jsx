import React from 'react';
import styled from '@emotion/styled';
import { useForm, ValidationError } from '@formspree/react';
import { ColorsPortfolio } from '../../../colors';
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

    fontSize: "2rem",
    color: ColorsPortfolio.text1,
    textAlign: "center",
  
});

const Input = styled ("input") ({

    backgroundColor: ColorsPortfolio.text1,
    height: "35px",
    width: "350px",
    borderRadius: "10px",
    fontSize: "2rem",
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

    fontSize: "2rem",
    fontWeight: "bold",
    backgroundColor: ColorsPortfolio.text1,
    border: "3px solid",
    borderColor: ColorsPortfolio.hover,
    borderRadius: "10px",
    color: ColorsPortfolio.hover,
    cursor: "pointer",
  
  });

function Form () {

  const [state, handleSubmit] = useForm ("xbjeyeoq");

  if (state.succeeded) {

    return <p>I'll be in touch shortly. Best Regards, Julio.</p>;

  }
  
  return (

    <FormContainer onSubmit={handleSubmit}>

      <Label htmlFor="email">Email Address</Label>

      <Input autoComplete='off' required placeholder='admin@jjrh92.dev' id="email"type="email" name="email"/>

      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Label htmlFor="message">Message:</Label>

      <TextArea autoComplete='off' required placeholder='Enter your message here' id="message" name="message" />

      <ValidationError prefix="Message" field="message" errors={state.errors} />

        <SendButton type="submit" disabled={state.submitting}>Send</SendButton>
      
    </FormContainer>

  );

}

export default Form;