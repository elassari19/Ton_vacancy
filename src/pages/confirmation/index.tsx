/* eslint-disable react-hooks/rules-of-hooks */
import { Card, Container } from "layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "store";
import { Confirmation } from "store/confirmation";
import { color } from "theme";
import { IVerify } from "types";

const index = () => {
  const router = useRouter();
  const [verify, setverify] = useState<IVerify>();

  const { success, error, message } = useSelector(
    (state: IState) => state.confirmation
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query?.id)
      // @ts-ignore
      dispatch(Confirmation(verify));
  }, [dispatch, router.query?.id, verify]);

  return (
    <Container>
      <Col sm={{ offset: 1, span: 10 }} md={{ offset: 3, span: 5 }}>
        <Card shadow className="text-center py-5">
          <h5>Activate Account</h5>
          {success && (
            <h6 className="text-success">
              {message} <Link href={"/signin"}>Go To Sign In</Link>
            </h6>
          )}
          {error && <h6 className="text-danger">{error.error}</h6>}
          <div>
            <Button
              onClick={() =>
                setverify({
                  // @ts-ignore
                  id: router.query.id,
                  // @ts-ignore
                  confirm: router.query.confirm,
                })
              }
              style={{ backgroundColor: color.blue }}
              className="mx-2"
            >
              Click To Activate Yout Account
            </Button>
          </div>
        </Card>
      </Col>
    </Container>
  );
};

export default index;
