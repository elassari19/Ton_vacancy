import React from "react";
import { NextPageContext } from "next";

const index = () => {
  return <div>profile</div>;
};

export function getServerSideProps(ctx: NextPageContext) {
  // @ts-ignore
  const { cookie } = ctx.req.headers;

  if (cookie?.split("=")[0] != "vacancy") {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
export default index;
