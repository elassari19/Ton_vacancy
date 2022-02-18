import Image from 'next/image';
import React, { memo, useState } from 'react';
import Logo from '../../../public/Logo.svg';
import Suitcase from '../../../public/Suitcase.svg';
import persons from '../../../public/persons.svg';
import {AiOutlineMenu} from 'react-icons/ai'
import Link from 'next/link';
import { BtnPrimary, DropDownMenu, Modal, SearchHeader } from '..';
import { FiSearch } from 'react-icons/fi';
import { SubstitutY, SubstitutZ } from '../../Animations';
import { Container } from '../../layout';
import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss'
import { useRouter } from 'next/router';
import { MenuModel } from '../../layout';
import { logout, personsWhite } from '../../../public';
import { color } from 'theme';

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

  const [auth, setAuth] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);

  return <div className={styles.container}>

    {
      isModal && <Modal onClick={()=>setIsModal(false)} setIsModal={setIsModal} />
    }

    {/* toggle display menu */}
    {
      dropDownMenu && <MenuModel onClick={()=>setDropDownMenu(false)}>
        <DropDownMenu setDropDownMenu={setDropDownMenu} />
      </MenuModel>
    }

    {/* nav for small screen (phone) */}
    <Container small >

      <Col xs={{offset: 1, span: 10}} className={styles.small}>
        <div id='header' className={styles.header}>
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

          <Col lg={7} className={styles.start}>
            <Col sm={3} onClick={()=>router.push('/')}>
                <Image src={Logo} />
            </Col>
            <Col  onClick={()=>router.push('/companies')}>
              <BtnPrimary title='I am employer' inIcon={persons} />
            </Col>
            <Col  onClick={()=>router.push('/workers')}>
              <BtnPrimary title='I am applicant' inIcon={Suitcase} />
            </Col>
          </Col>

          <Col lg={5} className={styles.buttons} >
            {
              !auth
              ?<Row>
                <Col sm={5}>
                  <BtnPrimary title='Log in' onClick={()=>setIsModal(true)} white style={{width: 114}} />
                </Col>
                <Col sm={5}>
                  <BtnPrimary title='Sign up' onClick={()=>router.push('/suignup')} blueDark style={{width: 114}} />
                </Col>
              </Row>
              :<Row>
                <Col sm={7} style={{padding: 0}}>
                  <BtnPrimary title='Personal account' inIcon={personsWhite} onClick={()=>router.push('/suignup')} blueDark  />
                </Col>
                <Col sm={5} style={{padding: 0}}>
                  <BtnPrimary title='Log out' endIcon={logout} onClick={()=>setAuth(false)} style={{color: color.gray}} />
                </Col>
              </Row>
            }
          </Col>

      </Col>

    </Container>

  </div>;
}

export default memo(index);
