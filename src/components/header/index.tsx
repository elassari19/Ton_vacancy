import Image from 'next/image';
import React, { memo, useState } from 'react';
import Logo from '../../../public/Logo.svg';
import Suitcase from '../../../public/Suitcase.svg';
import persons from '../../../public/persons.svg';
import {AiOutlineMenu} from 'react-icons/ai'
import Link from 'next/link';
import { BtnPrimary, DropDownMenu, SearchHeader } from '..';
import { FiSearch } from 'react-icons/fi';
import { SubstitutY, SubstitutZ } from '../../Animations';
import { Container } from '../../layout';
import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss'
import { useRouter } from 'next/router';
import { MenuModel } from '../../layout';

function index() {

  const router = useRouter();
  const [dropDownMenu, setDropDownMenu] = useState<boolean>(false);
  const handleDropMenu = () => {
    setDropDownMenu(!dropDownMenu);
    if(dropDownMenu) {
      SubstitutY('drop', 'id', .2, 'block');
    }else{
      SubstitutY('id', 'drop', .2, 'block');
    }
  };

  return <>

    {/* toggle display menu */}
    {
      dropDownMenu && <MenuModel onClick={()=>setDropDownMenu(false)}>
        <DropDownMenu setDropDownMenu={setDropDownMenu} />
      </MenuModel>
    }

    {/* nav for small screen (phone) */}
    <Container small >

      <Col xs={{offset: 1, span: 10}} className={styles.small}>
        <div id='header' className={styles.container}>
          <div onClick={handleDropMenu}>
          <AiOutlineMenu size={25}/>
          </div>

          <Link href={'/'}>
            <Image src={Logo} />
          </Link>

          <FiSearch size={25} onClick={()=>SubstitutZ('header', 'search')} />
        </div>

        <SearchHeader onClick={()=>SubstitutZ('search', 'header')} />
      </Col>

    </Container>

    {/* nav for meduim or greate screen */}
    <Container medium >

        <Col sm={{offset: 1, span: 10}} lg={{offset: 1, span: 10}} className={styles.alignCenter}>

          <Col className={styles.start}>
          <Col sm={3} onClick={()=>router.push('/')}>
              <Image src={Logo} />
          </Col>
          <Col  onClick={()=>router.push('/workers')}>
            <BtnPrimary title='Соискатели' inIcon={persons} onClick={()=>router.push('/login')} />
          </Col>
          <Col  onClick={()=>router.push('/companies')}>
            <BtnPrimary title='Работодатели' inIcon={Suitcase} onClick={()=>router.push('/login')} />
          </Col>
          </Col>

            <Col className={styles.buttons} >
              <BtnPrimary title='Log in' onClick={()=>router.push('/login')} white style={{width: 114}} />
              <BtnPrimary title='Sign up' onClick={()=>router.push('/suignup')} blueDark style={{width: 114}} />
            </Col>

        </Col>

    </Container>

  </>;
}

export default memo(index);
