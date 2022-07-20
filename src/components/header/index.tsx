/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import React, { memo, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { BtnPrimary, DropDownMenu, SearchHeader } from "..";
import { FiSearch } from "react-icons/fi";
import { SubstitutY, SubstitutZ } from "../../Animations";
import { Container } from "../../layout";
import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { MenuModel } from "../../layout";
import { logout, personsWhite, suitCase, persons, Logo } from "../../../public";
import { color } from "theme";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "store";
import { signOut } from "store/signIn";

function index() {
  const router = useRouter();
  const path = router.pathname.split("/")[1];

  const { id, token, error } = useSelector((state: IState) => state.signIn);

  const dispatch = useDispatch();

  // in small screen
  const [dropDownMenu, setDropDownMenu] = useState<boolean>(false);

  const handleDropMenu = () => {
    setDropDownMenu(!dropDownMenu);
    if (dropDownMenu) {
      SubstitutY("drop", "id", 0.2, "block");
    } else {
      SubstitutY("id", "drop", 0.2, "block");
    }
  };

  return (
    <div className={styles.container}>
      {/* toggle display menu */}
      {dropDownMenu && (
        <MenuModel onClick={() => setDropDownMenu(false)}>
          <DropDownMenu setDropDownMenu={setDropDownMenu} />
        </MenuModel>
      )}

      {/* nav for small screen (phone) */}
      <Container small>
        <Col xs={{ offset: 1, span: 10 }} className={styles.small}>
          <div id="header" className={styles.header}>
            <div onClick={handleDropMenu}>
              <AiOutlineMenu size={25} />
            </div>

            <Link href={"/"} passHref>
              <Image src={Logo} alt="vacancy logo" />
            </Link>

            <FiSearch
              size={25}
              onClick={() => SubstitutZ("header", "search")}
            />
          </div>

          <SearchHeader onClick={() => SubstitutZ("search", "header")} />
        </Col>
      </Container>

      {/* nav for meduim or large screen */}
      <Container medium>
        <Col
          sm={{ offset: 1, span: 10 }}
          lg={{ offset: 1, span: 10 }}
          className={styles.alignCenter}
        >
          <Col lg={7} className={styles.start}>
            <Col sm={3} onClick={() => router.push("/")}>
              <Image src={Logo} alt="vacancy logo" />
            </Col>
            <Col onClick={() => router.push("/companies")}>
              <BtnPrimary title="I am employer" inIcon={persons} />
            </Col>
            <Col onClick={() => router.push("/workers")}>
              <BtnPrimary title="I am applicant" inIcon={suitCase} />
            </Col>
          </Col>

          <Col lg={id ? 7 : 4} className={styles.buttons}>
            <Row>
              <Col lg={7} style={{ padding: 0 }}>
                <BtnPrimary
                  title={id ? "Personal account" : "Log in"}
                  endIcon={id && personsWhite}
                  onClick={() => router.push(id ? `/profile` : "/signin")}
                  blueDark={id ? true : false}
                  white={!id ? true : false}
                  style={{ width: id ? 185 : 114 }}
                />
              </Col>
              <Col sm={5} style={{ padding: 0 }}>
                <BtnPrimary
                  title={id ? "Log out" : "Sign up"}
                  endIcon={id && logout}
                  blueDark={!id ? true : false}
                  onClick={
                    id
                      ? () => dispatch(signOut())
                      : () => router.push(`/signup`)
                  }
                  style={{
                    color: id ? color.gray : "#fff",
                    width: id ? "auto" : 114,
                  }}
                />
              </Col>
            </Row>
            {/* <Col sm={5}>
              <Row>
                  <BtnPrimary
                    title="Log in"
                    onClick={() => router.push("/signin")}
                    white
                    style={{ width: 114 }}
                  />
                </Col>
                <Col sm={5}>
                  <BtnPrimary
                    title="Sign up"
                    onClick={() => router.push(`/signup`)}
                    blueDark
                  />
                  </Row>
                  </Col> */}
          </Col>
        </Col>
      </Container>
    </div>
  );
}

export default memo(index);
