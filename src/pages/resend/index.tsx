/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./styles.module.scss";
import { Input } from "components";
import { Card, Container } from "layout";
import React, { FormEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "store";
import { color } from "theme";
import { Resend } from "store/resend";
import Link from "next/link";

type IResend = {
  email: string;
};

const index = () => {
  const [value, setValue] = useState<string>("");

  const { success, error, message } = useSelector(
    (state: IState) => state.resend
  );

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(
      yup.object().shape({ email: yup.string().required() })
    ),
  });

  const onSubmit: SubmitHandler<IResend> = () => {
    // @ts-ignore
    dispatch(Resend(value));
    // setSuccess(true);
  };

  const inputChange = (ev: FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    const { value } = ev.target;
    setValue(value);
  };

  return (
    <Container className={styles.resend}>
      <Col sm={{ offset: 1, span: 10 }} md={{ offset: 3, span: 5 }}>
        <Card shadow>
          <div className="text-center">
            {success && <h6 className="alert-success py-3">{message}</h6>}
            {error && (
              <h6 className="alert-danger py-3">
                {" "}
                {error}
                <Link href={"/signin"}> Go to Sign in</Link>
              </h6>
            )}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              onChange={inputChange}
              value={value}
              register={register}
              placeholder="email"
              label="email"
              error={error}
            />
            <Button type="submit" style={{ backgroundColor: color.blue }}>
              Resend
            </Button>
          </form>
        </Card>
      </Col>
    </Container>
  );
};

export default index;
