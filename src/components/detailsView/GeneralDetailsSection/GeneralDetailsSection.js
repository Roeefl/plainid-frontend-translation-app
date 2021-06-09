import React from 'react';
import { withTranslation } from 'react-i18next';
import { useAddTranslations } from '../../../hooks/useAddTranslations';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SectionHeader from '../common/SectionHeader';
import { ReadOnlyTextArea, TextField } from '../../fields';
import strings from './locales/en-US/strings.json';

const LOCALE_KEY = 'general';

const SectionContainer = styled.div`
    width: 60%;
    border-right: 1px solid lightgray;
    padding: 0 12px 5px;
    min-height: 100%;
`;

const FieldsContainer = styled.div`
    margin-top: 6px;
`;

function GeneralDetailsSection({ t, i18n, resource }) {
    useAddTranslations({ language: i18n.language, key: LOCALE_KEY, strings });

    const {name, description, resourceType, path} = resource;

    const sectionHeaderProps = {
        headerText: t('header.title'),
        subHeaderText: t('header.subtitle')
    };
    
    const nameProps = {
        value: name,
        label: t('fieldTitle.name')
    };

    const descriptionProps = {
        value: description,
        label: t('fieldTitle.description')
    };

    const resourceTypeProps = {
        value: resourceType,
        label: t('fieldTitle.resourceType')
    };

    const pathProps = {
        value: path,
        label: t('fieldTitle.resourcePath')
    };

    return (
        <SectionContainer>
            <SectionHeader {...sectionHeaderProps} />
            <FieldsContainer>
                <TextField {...nameProps} />
                <ReadOnlyTextArea {...descriptionProps} />
                <TextField {...resourceTypeProps} />
                <TextField {...pathProps} />
            </FieldsContainer>
        </SectionContainer>
    );
}

GeneralDetailsSection.propTypes = {
    resource: PropTypes.object
};

export default withTranslation([LOCALE_KEY])(GeneralDetailsSection);
