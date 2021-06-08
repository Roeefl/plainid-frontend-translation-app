import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import SectionHeader from '../common/SectionHeader';
import { ReadOnlyTextArea, TextField } from '../../fields';

i18next.loadNamespaces(['general'])
  .then(() => {
      console.log('loaded');
  });

const SectionContainer = styled.div`
    width: 60%;
    border-right: 1px solid lightgray;
    padding: 0 12px 5px;
    min-height: 100%;
`;

const FieldsContainer = styled.div`
    margin-top: 6px;
`;

function GeneralDetailsSection({ t, resource }) {
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

export default withTranslation(['general'])(GeneralDetailsSection);
