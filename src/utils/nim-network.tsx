import axios, {AxiosError, AxiosResponse} from 'axios';

const baseUrl = `https://Nimedix-africa.herokuapp.com/v1/app/`;

export const connect = (token: string | null = '') =>
  axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });

export type NimedixResponseType = {
  data: object;
  msg: string;
  status: string;
};
export const handler = (
  response: AxiosResponse<NimedixResponseType, any>,
) => {
  var result = response;

  if (result.status >= 200 || result.status < 299) {

    return {status: true, msg: result.data.msg, data: result.data.data};
  }

  // const status: number = result.response?.status || 400;
  if (result.status >= 300 && result.status <= 399)
    throw {status: false, msg: 'Your request got redirected', data: {}};
  else if (result.status >= 400 && result.status <= 499)
    throw {status: false, msg: 'Wrong Input Format', data: {}};
  else if (result.status >= 500)
    throw {
      status: false,
      msg: 'Problem from our end, please try again later',
      data: {},
    };
    
  return result;
};
