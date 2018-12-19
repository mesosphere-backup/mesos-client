import { from } from "rxjs";
import { map, scan, concatAll } from "rxjs/operators";
import readRecordioRecords from "./readRecordioRecords";

export default function parseRecordioRecords(resource) {
  return resource.pipe(
    scan(readRecordioRecords, {}),
    map(({ records }) => from(records)),
    concatAll()
  );
}
