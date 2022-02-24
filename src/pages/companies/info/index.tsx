import React, { FC, FormEvent, memo, useState } from 'react';
import { BtnPrimary, ImageProfile, Input, InputCostum, Sort } from 'components';
import { BrandPage } from 'layout';
import { Col, Row } from 'react-bootstrap';
//import { InfoState } from 'store/info/constants';
import { Iinfo } from 'types';
import { celebration, Clock, dollar, gift, heart, profile, Tag } from '../../../../public';
import TimezoneSelect from 'react-timezone-select';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from './styles.module.scss';

interface Props {
  className?: string;
  id?: string;
}

const schema = yup.object({
  name: yup.string().required().min(5),
  category: yup.string().notRequired(),
  description: yup.string().notRequired(),
  phone: yup.number().positive().integer().notRequired(),
  email: yup.string().email().notRequired(),
  telegram: yup.string().notRequired(),
  city: yup.string().notRequired(),
  events: yup.boolean().notRequired(),
  insurance: yup.boolean().notRequired(),
  bonus: yup.boolean().notRequired(),
  review: yup.boolean().notRequired(),
  discount: yup.boolean().notRequired(),
  schedule: yup.boolean().notRequired()
}).required();

type IBenfits = {
  title: string;
  icon: string;
  benfit: boolean;
  name: string;
}


export const InfoState = {
  name: '',
  category: '',
  description: '',
  phone: '',
  email: '',
  telegram: '',
  city: Intl.DateTimeFormat().resolvedOptions().timeZone,
  benfits: {
    events: false,
    insurance: false,
    bonus: false,
    review: false,
    discount: false,
    schedule: false,
  }
}

const index: FC<Props> = ({className, id}) => {

  const { register, handleSubmit, formState:{ errors } } = useForm<Iinfo>({resolver: yupResolver(schema)});

  const [value, setValue] = useState<Iinfo>(InfoState);

  const handleBenfits = (name: string, values: boolean) => {
    setValue(prev=>({...prev, benfits: {...value.benfits, [name]: values} }))
    // console.log(value)
  }

  const onSubmit: SubmitHandler<Iinfo> = data => {
    setValue(prev=>({...prev, ...data}));
    console.log(value)
  };



  return <BrandPage>
    <div className={styles.container + ` ${className}`} id={id}>
      <Col sm={12} lg={{offset: 1, span: 10}}>
        <Row>
          <Col lg={3}>
            <ImageProfile src={profile} title='Change logo' website='Visite website' />
          </Col>
          <Col lg={9} className={styles.info}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input register={register} label='name' error={errors.name} />
              <Input register={register} label='category' error={errors.category} />
              <Input register={register} label='description' error={errors.description} />
              <h4>Contacts</h4>
              <Input register={register} label='phone' error={errors.phone} />
              <Input register={register} label='email' error={errors.email} />
              <h4>Timeline</h4>
              <Input register={register} label='city' error={errors.city} />
              <label htmlFor="city">
              Select city
              <TimezoneSelect
                value={value.city}
                onChange={e=>setValue(prev=>({...prev, city: e.value}))}
                className={styles.timezone}
              />

            <div className={styles.benfits}>
              <h4>Benfits</h4><span>(optional)</span>
            </div>

            <Col xs={12} md={10} className={styles.benfitsItems}>
            {
              [
                {title: 'Corporate events', icon: celebration, benfit: value.benfits.events, name: 'events'},
                {title: 'Health insurance', icon: heart, benfit: value.benfits.insurance, name: 'insurance'},
                {title: 'Bonuses and premiums', icon: gift, benfit: value.benfits.bonus, name: 'bonus'},
                {title: 'Regular salary review', icon: dollar, benfit: value.benfits.review, name: 'review'},
                {title: 'Employee discounts', icon: Tag, benfit: value.benfits.discount, name: 'discount'},
                {title: 'Flexible schedule', icon: Clock, benfit: value.benfits.schedule, name: 'schedule'}
              ].
              map((item: IBenfits,idx: number)=>(
                <Col xs={idx == 2 ? 6 : 5} key={idx}>
                  <BtnPrimary
                    title={item.title} inIcon={item.icon}
                    white={item.benfit&& false} blueLight={item.benfit&&true}
                    onClick={()=>handleBenfits(item.name, !item.benfit)}
                  />
                </Col>
              ))
            }

            </Col>

            <Col xs={12} md={4}>
              <input type="submit" />
              {/* <BtnPrimary title='Save changings' blue onClick={()=>console.log(value)} style={{padding: 10, marginTop: 15}} /> */}
            </Col>
            </label>
            </form>

            {/* <label htmlFor="name">
              Name of company *
              <InputCostum id='name' placeholder='Name of company' onChange={handleChange} value={value.name} />
            </label>

            <label htmlFor="category">
              Category of company
              <InputCostum id='category' placeholder='Category' onChange={handleChange} value={value.category} />
            </label>

            <label htmlFor="Company description">
              Company description
              {/* <EditorInput handleChange={handleChange} value={value.description} /> */}
            {/*  <textarea name='description' id='description' placeholder='description of company' onChange={handleChange} className={styles.textarea} value={value.description} />
            </label>

            <h4>Contacts</h4>

            <label htmlFor="phone">
              Phone number
              <InputCostum type='number' id='phone' placeholder='Phone number' onChange={handleChange} value={value.phone} />
            </label>

            <label htmlFor="email">
              Email
              <InputCostum type='email' id='email' placeholder='Email' onChange={handleChange} value={value.email} />
            </label>

            <h4>Timeline</h4>

            <label htmlFor="city">
              Select city
              <TimezoneSelect
                value={value.city}
                onChange={e=>setValue(prev=>({...prev, city: e.value}))}
                className={styles.timezone}
              />
            </label>

            <div className={styles.benfits}>
              <h4>Benfits</h4><span>(optional)</span>
            </div>

            <Col xs={12} md={10} className={styles.benfitsItems}>
            {
              [
                {title: 'Corporate events', icon: celebration, benfit: value.benfits.events, name: 'events'},
                {title: 'Health insurance', icon: heart, benfit: value.benfits.insurance, name: 'insurance'},
                {title: 'Bonuses and premiums', icon: gift, benfit: value.benfits.bonus, name: 'bonus'},
                {title: 'Regular salary review', icon: dollar, benfit: value.benfits.review, name: 'review'},
                {title: 'Employee discounts', icon: Tag, benfit: value.benfits.discount, name: 'discount'},
                {title: 'Flexible schedule', icon: Clock, benfit: value.benfits.schedule, name: 'schedule'}
              ].
              map((item: IBenfits,idx: number)=>(
                <Col xs={idx == 2 ? 6 : 5} key={idx}>
                  <BtnPrimary
                    title={item.title} inIcon={item.icon}
                    white={item.benfit&& false} blueLight={item.benfit&&true}
                    onClick={()=>handleBenfits(item.name, !item.benfit)}
                  />
                </Col>
              ))
            }

            </Col>

            <Col xs={12} md={4}>
              <BtnPrimary title='Save changings' blue onClick={()=>console.log(value)} style={{padding: 10, marginTop: 15}} />
            </Col> */}

          </Col>
        </Row>
      </Col>

    </div>
  </BrandPage>
};

export default memo(index);