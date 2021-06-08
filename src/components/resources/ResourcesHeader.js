import React, { useEffect } from 'react';
import i18next from 'i18next';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import { HeaderText, SubHeaderText } from '../../styles/commonStyles';

import resources_enUS from './locales/en-US/strings.json';

const ResourceHeaderText = styled(HeaderText)`
    color: #686868;
    margin-bottom: 3px;
`;

function ResourcesHeader({ t }) {
    useEffect(() => {
        i18next.addResourceBundle('en-US', 'resources', resources_enUS);
    }, []);

    return (
        <>
            <ResourceHeaderText>{t('title')}</ResourceHeaderText>
            <SubHeaderText>{t('subtitle')}</SubHeaderText>
        </>
    );
}

export default withTranslation(['resources'])(ResourcesHeader);
