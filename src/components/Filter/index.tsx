/* eslint-disable react-hooks/rules-of-hooks */
import { BtnPrimary, DropDown, DualSlider, Heading, Tips } from "components";
import React, { FC, memo, useState } from "react";
import { Row } from "react-bootstrap";
import { arrow, vector } from "../../../public";
import {
  humanResources,
  development,
  chiefEngineer,
  department,
  design,
  EmploymentType,
} from "./options";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  id?: string;
}

export type IValue = {
  "HR Group Leading Specialist": string;
  "IT technologies - Development": string;
  "Chief Project Engineer": string;
  "Chief Specialist-Expert of the Legal Support Department": string;
  "UX/UI designer": string;
  from: number;
  to: number;
  "Full employment": boolean;
  Underemployment: boolean;
  "Remote work": boolean;
  "Project work": boolean;
};

let initialValue = {
  a: false,
  b: false,
  c: false,
  d: false,
  e: false,
};

const index: FC<Props> = ({ className, id }) => {
  const [drop, setDrop] = useState(initialValue);

  const [value, setValue] = useState<IValue>({
    "HR Group Leading Specialist": "",
    "IT technologies - Development": "",
    "Chief Project Engineer": "",
    "Chief Specialist-Expert of the Legal Support Department": "",
    "UX/UI designer": "",
    from: 18,
    to: 60,
    "Full employment": false,
    Underemployment: false,
    "Remote work": false,
    "Project work": false,
  });

  const handleDropDown = (ev: any) => {
    // console.log(ev.target.id, ev.target.innerHTML);
    setValue({ ...value, [ev.target.id]: ev.target.innerHTML });
    setDrop({ ...initialValue });
  };

  const handleEmployment = (ev: any) => {
    // @ts-ignore
    setValue({ ...value, [ev.target.id]: !value[ev.target.id] });
  };

  const handleDualSliderChange = (ev: any) => {
    setValue({ ...value, from: ev.min, to: ev.max });
  };

  // console.log(value);

  return (
    <div className={styles.container + ` ${className}`} id={id}>
      <Row>
        <Heading tag="h2" title="Filter" />
      </Row>
      <Row>
        <Heading tag="h3" md title="Category" />
      </Row>
      <Row className={styles.category}>
        <BtnPrimary
          wrap
          title="HR Group Leading Specialist"
          inIcon={vector}
          endIcon={arrow}
          style={{
            color: "#3B86C6",
            backgroundColor: !drop.a ? "inherit" : "#fff",
          }}
          onClick={() => setDrop({ ...initialValue, a: !drop.a })}
        />
        {drop.a && (
          <DropDown
            onClick={handleDropDown}
            title="HR Group Leading Specialist"
            dropdownValues={humanResources}
          />
        )}
      </Row>
      <Row className={styles.category}>
        <BtnPrimary
          wrap
          title="IT technologies - Development"
          inIcon={vector}
          endIcon={arrow}
          style={{
            color: "#3B86C6",
            backgroundColor: !drop.b ? "inherit" : "#fff",
          }}
          onClick={() => setDrop({ ...initialValue, b: !drop.b })}
        />
        {drop.b && (
          <DropDown
            onClick={handleDropDown}
            title="IT technologies - Development"
            dropdownValues={development}
          />
        )}
      </Row>
      <Row className={styles.category}>
        {" "}
        <BtnPrimary
          wrap
          title="Chief Project Engineer"
          inIcon={vector}
          endIcon={arrow}
          style={{
            color: "#3B86C6",
            backgroundColor: !drop.c ? "inherit" : "#fff",
          }}
          onClick={() => setDrop({ ...initialValue, c: !drop.c })}
        />
        {drop.c && (
          <DropDown
            onClick={handleDropDown}
            title="Chief Project Engineer"
            dropdownValues={chiefEngineer}
          />
        )}
      </Row>
      <Row className={styles.category}>
        {" "}
        <BtnPrimary
          wrap
          title="Chief Specialist-Expert of the Legal Support Department"
          inIcon={vector}
          endIcon={arrow}
          style={{
            color: "#3B86C6",
            backgroundColor: !drop.d ? "inherit" : "#fff",
          }}
          onClick={() => setDrop({ ...initialValue, d: !drop.d })}
        />
        {drop.d && (
          <DropDown
            onClick={handleDropDown}
            title="Chief Specialist-Expert of the Legal Support Department"
            dropdownValues={department}
          />
        )}
      </Row>
      <Row className={styles.category}>
        {" "}
        <BtnPrimary
          wrap
          title="UX/UI designer"
          inIcon={vector}
          endIcon={arrow}
          style={{
            color: "#3B86C6",
            backgroundColor: !drop.e ? "inherit" : "#fff",
          }}
          onClick={() => setDrop({ ...initialValue, e: !drop.e })}
        />{" "}
        {drop.e && (
          <DropDown
            onClick={handleDropDown}
            title="UX/UI designer"
            dropdownValues={design}
          />
        )}
      </Row>
      <Row className={styles.btn}>
        <BtnPrimary title="Show all" blueLight />{" "}
      </Row>
      <Row className="my-2">
        <DualSlider min={18} max={60} onChange={handleDualSliderChange} />
      </Row>
      <Row>
        <h4>Employment type</h4>
        {EmploymentType.map((item) => (
          <Row onClick={handleEmployment} id={item.name}>
            <label
              htmlFor={item.name}
              className={styles.employment}
              id={item.name}
            >
              <input
                type="checkbox"
                className="form-check-input outline-0"
                // @ts-ignore
                checked={value[item.name]}
                id={item.name}
              />
              <p className={styles.type} id={item.name}>
                {item.name}
              </p>
              <div className={styles.tips} id={item.name}>
                {item.price}
              </div>
            </label>
          </Row>
        ))}
      </Row>
    </div>
  );
};

export default memo(index);
