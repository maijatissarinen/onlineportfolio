import React from 'react';
import { useTranslation } from 'react-i18next';

function HomePage() {
    const {t} = useTranslation();
    return (
        <div>
            <h1>{t("Kotisivu.otsikko")}</h1>
            <p>Welcome to my home page</p>
        </div>
    );
}

export default HomePage;