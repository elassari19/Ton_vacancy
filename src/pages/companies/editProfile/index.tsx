/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, FormEvent, memo, useState } from "react";
import { useRouter } from "next/router";
import { BtnPrimary, ImageProfile, Input, InputCostum } from "components";
import { BrandPage } from "layout";
import { Col, Row } from "react-bootstrap";
//import { InfoState } from 'store/info/constants';
import { IBenfits, Iinfo } from "types";
import {
  celebration,
  Clock,
  dollar,
  gift,
  heart,
  profile,
  Tag,
} from "../../../../public";
import TimezoneSelect from "react-timezone-select";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyInfo } from "store/info/constants";
import { IState } from "store";
import { profileSchema } from "schema";

interface Props {
  className?: string;
  _id?: string;
}

export const InfoState = {
  name: "",
  category: "",
  description: "",
  phone: "",
  email: "",
  telegram: "",
  city: Intl.DateTimeFormat().resolvedOptions().timeZone,
  benfits: {
    events: false,
    insurance: false,
    bonus: false,
    review: false,
    discount: false,
    schedule: false,
  },
};

const index: FC<Props> = ({ className, _id }) => {
  const dispatch = useDispatch();

  // conect yup validation with the react-form-hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iinfo>({ resolver: yupResolver(profileSchema) });

  const { id, token, isLoading, error } = useSelector(
    (state: IState) => state.signIn
  );

  const route = useRouter();

  const [uploadImage, setUploadImage] = useState<any>("");

  const [value, setValue] = useState<Iinfo>(InfoState);

  // save the informations in state
  const handleBenfits = (name: string, values: boolean) => {
    setValue((prev) => ({
      ...prev,
      benfits: { ...value.benfits, [name]: values },
    }));
    // console.log(value)
  };

  // save the benefits in state
  const handleChange = (ev: FormEvent<HTMLInputElement>) => {
    //@ts-ignore
    const { name, value } = ev.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  // save the information in store and clear the data from state
  const onSubmit: SubmitHandler<Iinfo> = () => {
    dispatch(setCompanyInfo(value));
    // console.log(value)
    setValue(InfoState);
  };

  // change profile image
  const handleUploadImage = (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setUploadImage(readerEvent.target?.result);
    };
  };

  return (
    <BrandPage>
      {id ? (
        <div className={styles.container + ` ${className}`} id={_id}>
          <Col xs={{ offset: 1, span: 10 }} lg={{ offset: 1, span: 10 }}>
            <Row>
              <Col lg={3}>
                <ImageProfile
                  src={profile}
                  title="Change logo"
                  website="Visite website"
                  onChange={handleUploadImage}
                />
              </Col>
              <Col className={styles.info} lg={7} xs={{ offset: 1, span: 10 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    onChange={handleChange}
                    value={value.name}
                    register={register}
                    title="Name of company *"
                    label="name"
                    error={errors.name}
                    placeholder={"Name of company"}
                  />
                  <Input
                    onChange={handleChange}
                    value={value.category}
                    register={register}
                    title="Category"
                    label="category"
                    error={errors.category}
                    placeholder={"Category of company"}
                  />
                  <Input
                    onChange={handleChange}
                    value={value.description}
                    register={register}
                    title="Company description"
                    label="description"
                    error={errors.description}
                    type="textarea"
                    placeholder={"Description of company "}
                    className={styles.textarea}
                  />

                  <h4>Contacts</h4>
                  <Input
                    onChange={handleChange}
                    value={value.phone}
                    register={register}
                    title="Phone number"
                    label="phone"
                    error={errors.phone}
                    placeholder={"Phone number"}
                  />
                  <Input
                    onChange={handleChange}
                    value={value.email}
                    register={register}
                    title="Email"
                    label="email"
                    error={errors.email}
                    placeholder={"Email of Comapany"}
                  />
                  <Input
                    onChange={handleChange}
                    value={value.telegram}
                    register={register}
                    title="Telegram"
                    label="telegram"
                    error={errors.telegram}
                    placeholder={"Telegram"}
                  />

                  <h4>Timeline</h4>
                  <label htmlFor="city">
                    Select city
                    <TimezoneSelect
                      id="city"
                      value={value.city}
                      onChange={(e) =>
                        setValue((prev) => ({ ...prev, city: e.value }))
                      }
                      className={styles.timezone}
                    />
                  </label>

                  <div className={styles.benfits}>
                    <h4>Benfits</h4>
                    <span>(optional)</span>
                  </div>

                  {/* benefits */}
                  <Col xs={12} className={styles.benfitsItems}>
                    {[
                      {
                        title: "Corporate events",
                        icon: celebration,
                        benfit: value.benfits.events,
                        name: "events",
                      },
                      {
                        title: "Health insurance",
                        icon: heart,
                        benfit: value.benfits.insurance,
                        name: "insurance",
                      },
                      {
                        title: "Bonuses and premiums",
                        icon: gift,
                        benfit: value.benfits.bonus,
                        name: "bonus",
                      },
                      {
                        title: "Regular salary review",
                        icon: dollar,
                        benfit: value.benfits.review,
                        name: "review",
                      },
                      {
                        title: "Employee discounts",
                        icon: Tag,
                        benfit: value.benfits.discount,
                        name: "discount",
                      },
                      {
                        title: "Flexible schedule",
                        icon: Clock,
                        benfit: value.benfits.schedule,
                        name: "schedule",
                      },
                    ].map((item: IBenfits, idx: number) => (
                      <Col key={idx}>
                        <BtnPrimary
                          title={item.title}
                          inIcon={item.icon}
                          white={item.benfit && false}
                          blueLight={item.benfit && true}
                          onClick={() => handleBenfits(item.name, !item.benfit)}
                        />
                      </Col>
                    ))}
                  </Col>

                  {/* submit */}
                  <Col xs={12} md={4}>
                    <InputCostum
                      value="Save changings"
                      type="submit"
                      className={styles.submit}
                    />
                  </Col>
                </form>
              </Col>
            </Row>
          </Col>
        </div>
      ) : (
        <div
          style={{
            marginTop: 100,
            fontSize: 24,
            fontWeight: 600,
            textAlign: "center",
          }}
          id={id}
        >
          Log in or Sign up
        </div>
      )}
    </BrandPage>
  );
};

export default memo(index);
