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
