import { toast } from 'react-toastify';
import { ApiError } from './interfaces';

export const formatError = (error: ApiError) => {
  return `${error.message}${error.details ? ': ' + error.details : ''}`;
};

export const handleError = (error: ApiError) => {
  toast(formatError(error), { type: 'error' });
  return { error };
};
