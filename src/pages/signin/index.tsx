/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "components";
import useGetStorage from "customeHooks/useGetStorage";
import Cookies from "js-cookie";
import { Card, Container } from "layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signinSchema } from "schema";
import { IState } from "store";
import { color } from "theme";
import { ISignin } from "types";
import { signIn } from "../../store/signIn";
import styles from "./styles.module.scss";

const initialState = {
  email: "",
  password: "",
};

const index = () => {
  const [value, setValue] = useState<ISignin>(initialState);

  const { id, token, error } = useSelector((state: IState) => state.signIn);

  const dispatch = useDispatch();

  const router = useRouter();

  if (token) return router.replace("/");

  const onSubmit: SubmitHandler<ISignin> = () => {
    // @ts-ignore
    dispatch(signIn(value));
  };

  const handleChange = (ev: FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    const { name, value } = ev.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignin>({ resolver: yupResolver(signinSchema) });

  return (
    <Container>
      <Col lg={{ offset: 3, span: 5 }} className="my-5">
        <Card shadow>
          <h4 className="px-3 ">Log in to TonVacancy</h4>

          {error && error.error == "Please Active you Account" ? (
            <div className="text-danger text-center">
              <div>{error.error} </div>
              or
              <div className="text-primary">
                <Link href={"/resend"}>Resend verification email</Link>
              </div>
            </div>
          ) : (
            <div className="text-danger text-center">{error.error}</div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              onChange={handleChange}
              register={register}
              label="email"
              placeholder="example@gmail.con"
              value={value.email}
              error={errors.email}
            />
            <Input
              onChange={handleChange}
              register={register}
              type="password"
              label="password"
              placeholder="****"
              value={value.password}
              error={errors.password}
            />

            <div className={styles.forgot}>
              <Button type="submit" style={{ backgroundColor: color.blue }}>
                Sign in
              </Button>
              <Link href={"/forgot"}>forgot password</Link>
            </div>
          </form>

          <p className={"my-3"}>
            Don´t have account{" "}
            <span style={{ color: color.blueDark, fontWeight: 600 }}>
              <Link href={"/signup"}>Sign up</Link>
            </span>
          </p>
        </Card>
      </Col>
    </Container>
  );
};

export default index;
