import { request as httpRequest } from "@dcos/http-service";

export default function request(body, url = "/mesos/api/v1") {
  return httpRequest(url, {
    method: "POST",
    body: JSON.stringify(body),
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });
}
