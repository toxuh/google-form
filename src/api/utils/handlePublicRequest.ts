import axios, { AxiosRequestConfig } from "axios";

import addHeaders from "./addHeaders";

async function handlePublicRequest<T>(request: AxiosRequestConfig): Promise<T> {
  const { data } = await axios(
    addHeaders({
      request,
    })
  );

  return data;
}

export default handlePublicRequest;
