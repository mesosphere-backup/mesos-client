import { stream as httpStream } from "@dcos/http-service";

import parseRecordioRecords from "./parseRecordioRecords";

const TIMEOUT = 30000;

export default function stream(body, url = "/mesos/api/v1") {
  const resource = httpStream(url, {
    method: "POST",
    body: JSON.stringify(body),
    responseType: "text",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .timeout(TIMEOUT)
    .retry(-1);

  return parseRecordioRecords(resource);
}
