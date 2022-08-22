/* eslint-disable react-hooks/rules-of-hooks */
import React, { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BtnPrimary, InputCostum, Overlay, Skills, Sort } from "components";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "store";
import { Ivacancy } from "types";
import { vacancyCreate } from "store/vacancy";
import { vacancyOptions } from "../../../constants/options";
import { GetServerSideProps } from "next";
import axios from "axios";

interface Props {
  className?: string;
  _id?: string;
}

export const InfoState = {
  vacancy: "Development & IT",
  skills: [],
  description: "",
  salary: {
    delay: "month",
    from: 1500,
    to: 5000,
  },
  options: {
    "Full employment": false,
    Underemployment: false,
    "Without experience": false,
    "Project work": false,
  },
};

const index: FC<Props> = ({ className, _id }) => {
  const dispatch = useDispatch();

  // conect yup validation with the react-form-hook
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<Ivacancy>();

  const { id } = useSelector((state: IState) => state.signIn);

  const { success, vacancy, error, isLoading } = useSelector(
    (state: IState) => state.vacancy
  );

  const route = useRouter();

  const [value, setValue] = useState<Ivacancy>(InfoState);
  const [loading, setLoading] = useState<boolean>(isLoading);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  const handleSalary = (delay: string, option: string) => {
    option == "delay"
      ? setValue((prev) => ({
          ...prev,
          salary: { ...value.salary, delay: delay },
        }))
      : option == "from"
      ? setValue((prev) => ({
          ...prev,
          salary: { ...value.salary, from: parseInt(delay) },
        }))
      : setValue((prev) => ({
          ...prev,
          salary: { ...value.salary, to: parseInt(delay) },
        }));
  };

  // save the information in store and clear the data from state
  const onSubmit: SubmitHandler<Ivacancy> = () => {
    dispatch(vacancyCreate(value));
    // clear forms
    setValue(InfoState);
  };

  const addSkill = (_skill: string) => {
    let result = value.skills.filter((ele) => ele != _skill);
    _skill.length > 0 &&
      setValue((x) => ({ ...x, skills: [...result, _skill] }));
  };

  const deleteSkill = (name: string) => {
    const skills = value.skills.filter((sk) => sk != name);
    setValue((x) => ({ ...x, skills: [...skills] }));
  };

  return (
    <div className={styles.container + ` ${className}`} id={_id}>
      {id ? (
        <div>
          {success && route.push(`/vacancy?id=${vacancy?._id}`)}
          {error && <div className="text-danger text-center my-4">{error}</div>}
          <h1>Create vacancy</h1>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 3, span: 6 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h5>Vacancy</h5>
              <Sort
                values={vacancyOptions}
                value={value.vacancy}
                name="vacancy"
                placeholder="Standart sorting"
                style={{ fontSize: "1.1rem" }}
                onClick={(e: any) =>
                  setValue({ ...value, vacancy: e.target.value })
                }
              />

              {/* skills */}
              <h5>Category</h5>
              <Skills
                add={addSkill}
                remove={deleteSkill}
                items={value.skills}
              />

              <h5>Vacancy descriprion</h5>
              <InputCostum
                type="texterea"
                id="description"
                placeholder="description"
                value={value.description}
                onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                  setValue((pre) => ({
                    ...pre,
                    [ev.target.name]: ev.target.value,
                  }))
                }
              />

              {/* salary */}
              <Col className={styles.salary}>
                <h5>Salary</h5>
                <Row>
                  <Col xs={4}>
                    <BtnPrimary
                      title="Per month"
                      blue={value.salary.delay == "month"}
                      white={value.salary.delay != "month"}
                      onClick={() => handleSalary("month", "delay")}
                      id="month"
                      style={{ borderRadius: 10 }}
                    />
                  </Col>
                  <Col xs={4}>
                    <BtnPrimary
                      title="Per day"
                      blue={value.salary.delay == "day"}
                      white={value.salary.delay != "day"}
                      onClick={() => handleSalary("day", "delay")}
                      id="month"
                      style={{ borderRadius: 10 }}
                    />
                  </Col>
                  <Col xs={4}>
                    <BtnPrimary
                      title="Per hour"
                      blue={value.salary.delay == "hour"}
                      white={value.salary.delay != "hour"}
                      onClick={() => handleSalary("hour", "delay")}
                      id="month"
                      style={{ borderRadius: 10 }}
                    />
                  </Col>
                </Row>
                <Row className={styles.fromto}>
                  <Col xs={6} lg={2}>
                    <p>From</p>
                    <InputCostum
                      id="from"
                      value={value.salary.from.toString()}
                      onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                        handleSalary(ev.target.value, "from")
                      }
                      style={{ padding: 5 }}
                    />
                  </Col>
                  <Col xs={6} lg={2}>
                    <p>To</p>
                    <InputCostum
                      id="to"
                      value={value.salary.to.toString()}
                      onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                        handleSalary(ev.target.value, "to")
                      }
                      style={{ padding: 5 }}
                    />
                  </Col>
                </Row>
              </Col>

              {/* options */}
              <Row className={styles.options}>
                <h4>Additional options</h4>
                {[
                  "Full employment",
                  "Underemployment",
                  "Without experience",
                  "Project work",
                ].map((item) => (
                  <div key={item} className="d-flex flex-row h5 mt-1 ">
                    <label htmlFor={item}>
                      <input
                        type="checkbox"
                        name={item}
                        id={item}
                        className={styles.input + " form-check-input outline-0"}
                        //@ts-ignore
                        checked={value.options[item]}
                        onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                          setValue((pre) => ({
                            ...pre,
                            options: {
                              ...value.options,
                              [ev.target.name]: ev.target.checked,
                            },
                          }))
                        }
                      />
                      <span>{item.replace("_", " ")}</span>
                    </label>
                  </div>
                ))}
              </Row>

              {/* submit */}
              <Col xs={12} md={4}>
                <InputCostum
                  value="Publish vacancy"
                  type="submit"
                  className={styles.submit}
                />
              </Col>
            </form>
          </Col>
        </div>
      ) : (
        <div>Log in or Sign up</div>
      )}
      {loading && <Overlay onclick={() => setLoading(!loading)} />}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { data } = await axios.get(
      `${process.env.BASE_URL}/vacancy${context.params?.id}`
    );

    return {
      props: {
        data,
      },
    };
  } catch {
    context.res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default memo(index);
