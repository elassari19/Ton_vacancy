import Image from 'next/image';
import React, { memo, useState } from 'react';
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
import { logout, personsWhite, suitCase, persons, Logo } from '../../../public';
import { color } from 'theme';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'store';
import { signOut } from 'store/signIn/constants';

function index() {

  const router = useRouter();
  const path = router.pathname.split('/')[1];

  const [dropDownMenu, setDropDownMenu] = useState<boolean>(false);

  const handleDropMenu = () => {
    setDropDownMenu(!dropDownMenu);
    if(dropDownMenu) {
      SubstitutY('drop', 'id', .2, 'block');
    }else{
      SubstitutY('id', 'drop', .2, 'block');
    }
  };

  const { auth } = useSelector((state: State)=> state.auth)
  const dispatch = useDispatch();

  const [isModal, setIsModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');

  const handleModal = (type: string) => {
    setModalType(type);
    setIsModal(true);
  }

  return <div className={styles.container}>

    {
      // this modal display when click login or sign up
      isModal && <Modal onClick={()=>setIsModal(false)} setIsModal={setIsModal} type={modalType} />
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
              <BtnPrimary title='I am applicant' inIcon={suitCase} />
            </Col>
          </Col>

          <Col lg={5} className={styles.buttons} >
            {
              auth == true && <Row>
                <Col lg={7} style={{padding: 0}}>
                  <BtnPrimary title='Personal account' inIcon={personsWhite} onClick={()=>router.push(`/${path}/editProfile`)} blueDark  />
                </Col>
                <Col sm={5} style={{padding: 0}}>
                  <BtnPrimary title='Log out' endIcon={logout} onClick={()=>dispatch(signOut())} style={{color: color.gray}} />
                </Col>
              </Row>
            }
            {
              auth == false && <Row>
              <Col sm={5}>
                <BtnPrimary title='Log in' onClick={()=>handleModal('sign')} white style={{width: 114}} />
              </Col>
              <Col sm={5}>
                <BtnPrimary title='Sign up' onClick={()=>handleModal('')} blueDark style={{width: 114}} />
              </Col>
            </Row>
            }
          </Col>

      </Col>

    </Container>

  </div>;
}

export default memo(index);
