/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "components";
import { Card, Container } from "layout";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "store";
import { forgotPssword } from "store/forgot";
import { color } from "theme";
import * as yup from "yup";

interface IForgot {
  email: string;
}

const index = () => {
  const [value, setValue] = useState<string>("");

  const { error, isLoading, success, message } = useSelector(
    (state: IState) => state.forgot
  );

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<IForgot> = async () => {
    dispatch(forgotPssword(value));
  };

  const handleChange = (ev: FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    const { value } = ev.target;
    setValue(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgot>({
    resolver: yupResolver(
      yup.object({ email: yup.string().email().required() })
    ),
  });

  return (
    <Container>
      <Col lg={{ offset: 3, span: 5 }} className="my-5">
        <Card shadow>
          {success && <h5 className="alert-success p-4">T{message}</h5>}
          {error && (
            <h5 className="alert-danger p-4">
              {error}{" "}
              <Link href={"/signup"}>
                <a style={{ color: "blue" }}> Go to Sign up</a>
              </Link>
            </h5>
          )}

          <>
            <h4 className="px-3 ">Forgot account password</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                onChange={handleChange}
                register={register}
                label="email"
                placeholder="example@gmail.con"
                value={value}
                error={errors.email}
              />

              <div>
                <Button
                  type="submit"
                  style={{ backgroundColor: color.blue }}
                  className="mx-2"
                >
                  Recive
                </Button>
              </div>
            </form>
          </>
        </Card>
      </Col>
    </Container>
  );
};

export default index;
