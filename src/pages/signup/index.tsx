/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Container } from "layout";
import React, { FormEvent, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signupSchema } from "schema";
import { signUp } from "store/signUp";
import { ISignup } from "types";
import { color } from "theme";
import { Input } from "components";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./styles.module.scss";
import { privacyOn, termsOn } from "store/privacy/constant";
import { useSelector } from "react-redux";
import { IState } from "store";

const initialState = {
  email: "",
  firstname: "",
  lastname: "",
  password: "",
  confirmPassword: "",
  privacy: "unchecked",
};

const index = () => {
  const [value, setValue] = useState<ISignup>(initialState);
  // const [success, setSuccess] = useState<boolean>(false);
  const [privacyErr, setPrivacyErr] = useState<string>("");

  const dispatch = useDispatch();
  const { error, success, message, isLoading } = useSelector(
    (state: IState) => state.signUp
  );
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({ resolver: yupResolver(signupSchema) });

  // save the information in store and clear the data from state
  const onSubmit: SubmitHandler<ISignup> = () => {
    if (value.privacy != "checked") {
      setPrivacyErr("The terms and privacy policy must accepted");
      return;
    }
    // @ts-ignore
    dispatch(signUp(value));
    // setSuccess(true);
  };

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

  console.log(privacyErr, value.privacy);
  return (
    <Container>
      <Col xs={12} sm={{ offset: 3, span: 5 }} className="my-5">
        <Card shadow>
          {success && (
            <h6 className="alert-success alert py-3">
              Create account successfully, please verify email
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

          <form onSubmit={handleSubmit(onSubmit)}>
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
