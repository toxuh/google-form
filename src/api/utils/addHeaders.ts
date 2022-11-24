import { AxiosRequestConfig } from "axios";

export type AddHeadersOptions = {
  request: AxiosRequestConfig;
  accessToken?: string;
};

const addHeaders = ({ request }: AddHeadersOptions): AxiosRequestConfig => {
  return {
    ...request,
    headers: {
      ...request.headers,
    },
  };
};

export default addHeaders;
