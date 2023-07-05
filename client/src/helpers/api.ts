import 'react-toastify/dist/ReactToastify.css';
import { handleError } from './utils';
import { ApiError } from './interfaces';

const API_URL = 'http://localhost:4000';

export const getLinks = async () => {
  try {
    const response = await fetch(`${API_URL}/api/v1/codes`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return handleError(data);
    }
  } catch (error) {
    return handleError(error as ApiError);
  }
};

export const redirectLink = async (guid: string) => {
  try {
    const response = await fetch(`${API_URL}/${guid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      redirect: 'manual',
    });
    if (response.url) {
      window.open(response.url, '_blank');
    } else {
      return handleError({
        message: 'URL for redirect is missing',
      });
    }
  } catch (error: unknown) {
    return handleError(error as ApiError);
  }
};

export const createLink = async (url: string) => {
  try {
    const response = await fetch(`${API_URL}/api/v1/codes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ redirect_url: url }),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return handleError(data);
    }
  } catch (error: unknown) {
    return handleError(error as ApiError);
  }
};

export const updateLink = async (
  guid: string,
  redirect_url: { redirect_url: string },
) => {
  try {
    const response = await fetch(`${API_URL}/api/v1/codes/${guid}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(redirect_url),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return handleError(data);
    }
  } catch (error: unknown) {
    return handleError(error as ApiError);
  }
};
