import React from 'react';
import styled from '@emotion/styled';
import { useForm, ValidationError } from '@formspree/react';
import { ColorsPortfolio } from '../../../colors';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';
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
    fontSize: "24px",
    outline: "none",
    border: "none",
    color: ColorsPortfolio.hover,
    fontFamily: 'Chivo Variable',


});

const TextArea = styled ("textarea") ({

    backgroundColor: ColorsPortfolio.text1,
    display: "flex",
    height: "330px",
    width: "350px",
    borderRadius: "10px",
    fontSize: "24px",
    outline: "none",
    border: "none",
    color: ColorsPortfolio.hover,
    resize: "none",
    fontFamily: 'Chivo Variable',

});

const SendButtonContainer = styled ("div") ({

  display: "flex",
  width: "360px",
  flexDirection: "column-reverse",
  alignItems: "center",

});

const Text = styled ("p") ({

  fontSize: "20px",
  color: ColorsPortfolio.text1,
  textAlign: "center",
  display: "flex",
  paddingBottom: "1rem",
  
});

const AfterClickContainer = styled ("section") ({

  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  height: "100vh",
  backgroundColor: ColorsPortfolio.background2,
  userSelect: "none",
  paddingLeft: "3rem",
  paddingRight: "3rem",
  paddingBottom: "2rem",
  gap: "30px",

});

const IconoImagen = styled ("img") ({

  width: "200px",
  height: "200px",

});


function CallSendButton () {

  const Container = document.getElementById ("SendButtonContainer");
  const SendButton = document.createElement ("button");
  SendButton.setAttribute ("id", "SendButton");
  SendButton.setAttribute ("type", "submit");
  SendButton.setAttribute ("style", "font-family: Chivo Variable;font-size: 30px; background-color: white; border: 2px solid; border-color: #1D4ED8; border-radius: 10px; color: #1D4ED8; cursor: pointer;");
  SendButton.textContent = "Send";
  Container.removeChild (Captcha);
  Container.append (SendButton);
  const ChangeText = document.querySelector (".TextChange");
  SendButton.onclick = ChangeText.textContent = "Successfuly Sent!";
  SendButton.onclick = ChangeText();
  
}

function Form () {

  const [state, handleSubmit] = useForm ("xbjeyeoq");

  if (state.succeeded) {

    return (

      <AfterClickContainer>
        <Text>Thanks for your message. I'll be in touch Shortly. Best Regards, Julio.</Text>
          <IconoImagen draggable="false" src='https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg'/>

        <Link title="Home" draggable="false" style={{fontSize: "20px", fontWeight: "bold", textDecoration: "none", color: ColorsPortfolio.text1,}} to="/">Go back to the home section</Link>
        <Link title="Refresh" draggable="false" style={{fontSize: "20px", fontWeight: "bold", textDecoration: "none", color: ColorsPortfolio.text1,}} onClick={location.reload}>Or refresh this page</Link>
      </AfterClickContainer>

    )

  }
  
  return (

    <FormContainer id='FormContainer' onSubmit={handleSubmit}>

      <Label htmlFor="email">Email Address</Label>

      <Input autoComplete='off' required placeholder='Enter your email here' id="email" type="email" name="email" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Enter your email here."}/>

      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Label htmlFor="message">Message:</Label>

      <TextArea autoComplete='off' required placeholder='Enter your message here' id="message" name="message" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Enter your message here."}/>

      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <SendButtonContainer id='SendButtonContainer'>
        <ReCAPTCHA id='Captcha' sitekey="6Lf7EVAnAAAAAAsSNxHBAVhlHNmLuAm7Z5oNLWcI" onChange={CallSendButton} />,
      </SendButtonContainer>
      {/* <SendButton type="submit" disabled={state.submitting}>Send</SendButton> */}
      
    </FormContainer>

  );

}

export default Form;