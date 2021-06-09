import React from 'react';
import { withTranslation } from 'react-i18next';
import { useAddTranslations } from '../../hooks/useAddTranslations';
import styled from 'styled-components';
import { HeaderText, SubHeaderText } from '../../styles/commonStyles';
import strings from './locales/en-US/strings.json';

const LOCALE_KEY = 'resources';

const ResourceHeaderText = styled(HeaderText)`
    color: #686868;
    margin-bottom: 3px;
`;

function ResourcesHeader({ t, i18n }) {
    useAddTranslations({ language: i18n.language, key: LOCALE_KEY, strings });

    return (
        <>
            <ResourceHeaderText>{t('title')}</ResourceHeaderText>
            <SubHeaderText>{t('subtitle')}</SubHeaderText>
        </>
    );
}

export default withTranslation([LOCALE_KEY])(ResourcesHeader);
