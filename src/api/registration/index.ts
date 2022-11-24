import handlePublicRequest from "../utils/handlePublicRequest";
import { URL } from "../utils/URL";

import { RegistrationType } from "..";

export const registrationApiCall = (params: RegistrationType) =>
  handlePublicRequest({
    url: URL(""),
    method: "POST",
    params,
  });
