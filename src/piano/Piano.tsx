import KeyAcc from "./KeyAcc";
import KeyNat from "./KeyNat";
import { generateNaturalNotes, generateAccidents } from "./keys";
import "./keys.scss";

const naturalKeys3 = generateNaturalNotes("3");
const naturalKeys4 = generateNaturalNotes("4");
const naturalKeys5 = generateNaturalNotes("5");

const accidents3 = generateAccidents("3");
const accidents4 = generateAccidents("4");
const accidents5 = generateAccidents("5");

export default function Piano() {
  return (
    <div className="container">
      <div className="keys-oct-left keys-oct">
        <ul className="keys-acc">
          {accidents3.map((item, index) => (
            <KeyAcc note={item.note} time={1} key={index} />
          ))}
        </ul>
        <ul className="keys-nat">
          {naturalKeys3.map((item, index) => (
            <KeyNat note={item.note} time={1} key={index} />
          ))}
        </ul>
      </div>

      <div className="keys-oct-middle keys-oct">
        <ul className="keys-acc">
          {accidents4.map((item, index) => (
            <KeyAcc note={item.note} time={1} key={index} />
          ))}
        </ul>
        <ul className="keys-nat">
          {naturalKeys4.map((item, index) => (
            <KeyNat note={item.note} time={1} key={index} />
          ))}
        </ul>
      </div>

      <div className="keys-oct-right keys-oct">
        <ul className="keys-acc">
          {accidents5.map((item, index) => (
            <KeyAcc note={item.note} time={1} key={index} />
          ))}
        </ul>
        <ul className="keys-nat">
          {naturalKeys5.map((item, index) => (
            <KeyNat note={item.note} time={1} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
