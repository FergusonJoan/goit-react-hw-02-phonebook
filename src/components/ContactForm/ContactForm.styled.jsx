import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const FormLabel = styled.label`
  color: red;
`;
export const FormInput = styled(Field)`
  padding: 10px;
  width: 400px;
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
`;

export const FormButton = styled.button`
  color: white;
  background-color: blue;
`;
