import React, {useState} from 'react';
type Prop = {
  inputType?: 'email' | 'phone' | 'emailOrPhone' | 'text' | 'optional';
  initialValue?: string;
  label?: string;
};
export const  useTextInput = ({
  inputType = 'text',
  initialValue = '',
  label = 'value',
}: Prop) => {
  const [text, setText] = useState(initialValue);
  const [hasError, setHasError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const onChangeText = (text: string) => {
    setText(text);
    validate();
  };
  const clear = () => {
    setText('');
  };

  const noLength = (theValue: string) => {
    return !theValue || theValue?.length < 2;
  };
  const isEmail = (theValue: string) => {
    return /\S+@\S+\.\S+/.test(theValue);
  };

  const setError = (theErrorText = `Enter A Valid ${label}`) => {
    setHasError(true);
    setErrorText(theErrorText);
  };
  const clearError = () => {
    setHasError(false);
    setError('');
  };
  const validateAllText = () => {
    if (!text) {
      validateEmpty();
    } else {
      if (text.length < 2) {
        validateLength();
      } else {
        clearError();
      }
    }
  };
  const validateAllEmail = () => {
    if (!text) {
      validateEmpty();
    } else {
      if (text.length < 2) {
        validateLength();
      } else {
        if (!isEmail(text)) {
          validateEmail();
        } else {
          clearError();
        }
        //clearError();
      }
    }
  };
  const validateEmpty = (message = 'Enter a value') => {
    if (!text) {
      setError(message);
    } else {
      clearError();
    }
  };
  const validateLength = (message = 'Value is too short') => {
    if (text && text.length < 2) {
      setError(message);
    } else {
      clearError();
    }
  };
  const validateEmail = (message = 'Enter a valid email') => {
    if (!isEmail(text)) {
      setError(message);
    } else {
      clearError();
    }
  };

  const validate = () => {
    switch (inputType) {
      case 'text':
        validateAllText();
        break;
      case 'email':
        validateAllEmail();
        break;
      default:
        console.log('....doing nothing');
    }
  };
  const onEndEditing = () => {
    validate();
  };

  return {
    onChangeText,
    value: text,
    onEndEditing,
    hasError: hasError,
    errorText: errorText,
    clear,
    label,
  };
};
