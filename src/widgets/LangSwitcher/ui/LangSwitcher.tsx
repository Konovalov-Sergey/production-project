import { classNames } from 'shared/lib/classNames/classNames';
import 'shared/config/i18next/i18n';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.clear}
            onClick={toggle}
        >
            {t('Мова')}
        </Button>
    );
};

export default LangSwitcher;
