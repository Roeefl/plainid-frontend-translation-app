import React from 'react';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';
import { headerPanelHeight, HeaderText } from '../styles/commonStyles';
import logo from '../assets/images/plainid-logo-white.png';

const HeaderPanelContainer = styled.header`
  display: flex;
  background-color: #4b555f;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: ${headerPanelHeight};
  align-items: center;
  z-index: 1;
`;

const Logo = styled.img`
  width: 100px;
  height: 27px;
  margin: 7px;
`;

const HeaderPanelText = styled(HeaderText)`
  color: #fbfbfb;
  margin-left: 5px;
`;

function HeaderPanel({ t }) {
    const logoProps = {
        src: logo,
        alt: 'Logo'
    };

    return (
        <HeaderPanelContainer>
            <Logo {...logoProps} />
            <HeaderPanelText>{t('appHeader')}</HeaderPanelText>
        </HeaderPanelContainer>
    );
}

export default withTranslation()(HeaderPanel);
