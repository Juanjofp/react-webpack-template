import React from 'react';

import Typography from '@mui/material/Typography';

import { useI18nService } from '../../i18n';

export function HomeComponent() {
    const { t } = useI18nService();
    return (
        <>
            <Typography variant='h2' data-testid={'home-section'}>
                {t('home_page_title')}
            </Typography>
        </>
    );
}

export default HomeComponent;
