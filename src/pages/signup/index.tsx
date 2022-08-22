/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Container } from "layout";
import React, { FormEvent, useLayoutEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signupSchema } from "schema";
import { signUp } from "store/signUp";
import { ISignup } from "types";
import { color } from "theme";
import { BtnPrimary, Input } from "components";
import Link from "next/link";
import styles from "./styles.module.scss";
import { privacyOn, termsOn } from "store/privacy/constant";
import { useSelector } from "react-redux";
import { IState } from "store";
import { NextPageContext } from "next";

const initialState = {
  permission: "Employer",
  email: "",
  firstname: "",
  lastname: "",
  password: "",
  confirmPassword: "",
  privacy: "unchecked",
};

const index = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<ISignup>(initialState);

  const [privacyErr, setPrivacyErr] = useState<string>("");

  // const { token } = useSelector((state: IState) => state.signIn);

  const { error, success, isLoading } = useSelector(
    (state: IState) => state.signUp
  );

  const inputChange = (ev: FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    const { name, value } = ev.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrivacy = (ev: any) => {
    setValue((pre) => ({
      ...pre,
      [ev.target.name]: ev.target.checked ? "checked" : "unchecked",
    }));
    setPrivacyErr("");
  };

  // save the information in store and clear the data from state
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(3);
    if (value.privacy != "checked") {
      setPrivacyErr("The terms and privacy policy must accepted");
      return;
    }
    console.log(errors);

    // @ts-ignore
    dispatch(signUp(value));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({ resolver: yupResolver(signupSchema) });

  // console.log(value);

  return (
    <Container>
      <Col xs={12} sm={{ offset: 3, span: 5 }} className="my-5">
        <Card shadow>
          {success && (
            <h6 className="alert-success alert py-3">
              Create account successfully, please confirm email
            </h6>
          )}

          {!success && error && (
            <h6 className="alert-danger alert py-3">
              {error}
              <span className="text-primary">
                <Link href={"/signin"}> Go To Sign in</Link>
              </span>
            </h6>
          )}

          <h5>Sign up to TonVacancy</h5>

          {/* select type of user */}
          <Row>
            <Col xs={{ span: 10 }} md={{ span: 6 }} className="my-2">
              <BtnPrimary
                title="Employer"
                onClick={() => setValue({ ...value, permission: "Employer" })}
                white={value.permission == "Employer" ? false : true}
                blueDark={value.permission != "Employer" ? false : true}
              />
            </Col>
            <Col xs={{ span: 10 }} md={{ span: 6 }} className="my-2">
              <BtnPrimary
                title="Applicant"
                onClick={() => setValue({ ...value, permission: "Applicant" })}
                white={value.permission == "Applicant" ? false : true}
                blueDark={value.permission != "Applicant" ? false : true}
              />
            </Col>
          </Row>
          <form onSubmit={onSubmit}>
            <Input
              onChange={inputChange}
              value={value.firstname}
              register={register}
              placeholder="firstname"
              label="firstname"
              error={errors.firstname}
            />

            <Input
              onChange={inputChange}
              value={value.lastname}
              register={register}
              placeholder="lastname"
              label="lastname"
              error={errors.lastname}
            />

            <Input
              onChange={inputChange}
              value={value.email}
              register={register}
              placeholder="email"
              label="email"
              error={errors.email}
            />

            <Input
              onChange={inputChange}
              type="password"
              value={value.password}
              register={register}
              placeholder="password"
              label="password"
              error={errors.password}
            />

            <Input
              onChange={inputChange}
              type="password"
              value={value.confirmPassword}
              register={register}
              placeholder="confirmPassword"
              label="confirmPassword"
              error={errors.confirmPassword}
            />

            <div className={styles.privacy}>
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                onChange={(e) => handlePrivacy(e)}
                className={
                  errors.privacy &&
                  styles.privacyInput + " form-check-input outline-0"
                }
              />
              <p>
                By clicking Sign Up above, you acknowledge that you have read
                and agree to Ton Vacancy{" "}
                <span onClick={() => dispatch(termsOn())}>Terms</span> and{" "}
                <span onClick={() => dispatch(privacyOn())}>
                  Privacy Policy
                </span>
              </p>
            </div>
            {value.privacy != "checked" && (
              <p className="text-danger text-center">{privacyErr}</p>
            )}

            <Button type="submit" style={{ backgroundColor: color.blue }}>
              Sign up
            </Button>

            <p className="my-3">
              Already have account{" "}
              <span style={{ color: color.blueDark, fontWeight: 600 }}>
                <Link href={"/signin"}>Sign in</Link>
              </span>
            </p>
          </form>
        </Card>
      </Col>
    </Container>
  );
};

export default index;

export function getServerSideProps(ctx: NextPageContext) {
  // @ts-ignore
  const { cookie } = ctx.req.headers;

  if (cookie?.split("=")[0] == "vacancy") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
