import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Text } from '@/shared/ui/text/Text';
import { Modal } from '@/shared/ui/modal/Modal';
import { ConsoleInput } from '@/shared/ui/input/ConsoleInput/ConsoleInput';
import { StarsRating } from '@/shared/ui/StarsRating/StarsRating';
import { Button, ButtonType } from '@/shared/ui/button/Button';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    extraClassName?: string;
    title?: string;
    feedBackTitle?: string;
    hasFeedback?: boolean;
    rate?: number;
    onCancel?: (count: number) => void;
    onAccept?: (count: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        extraClassName,
        onAccept,
        onCancel,
        feedBackTitle,
        hasFeedback = true,
        title,
        rate = 0,
    } = props;

    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedBack, setFeedBack] = useState('');

    const onRatingSelect = useCallback((count: number) => {
        setStarsCount(count);
        if (hasFeedback) {
            setModalOpen(true);
        } else {
            onAccept?.(starsCount);
        }
    }, [hasFeedback, onAccept, starsCount]);

    const onModalClose = useCallback(() => {
        onCancel?.(starsCount);
        setFeedBack('');
        setModalOpen(false);
    }, [onCancel, starsCount]);

    const onModalAccept = useCallback(() => {
        if (onAccept) {
            onAccept(starsCount, feedBack);
            setModalOpen(false);
        }
    }, [feedBack, onAccept, starsCount]);

    const onInputChange = useCallback((text: string) => {
        setFeedBack(text);
    }, []);

    const modalContent = (
        <VStack gap={32} max>
            <Text title={feedBackTitle} />
            <ConsoleInput value={feedBack} placeholder={t('Ваш отзыв')} onChange={onInputChange} />
            <HStack justify="end" gap={32} max>
                <Button btnType={ButtonType.OUTLINE_RED} onClick={onModalClose}>
                    {t('Отменить')}
                </Button>
                <Button btnType={ButtonType.OUTLINE} onClick={onModalAccept}>
                    {t('Отправить')}
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card className={classNames('', {}, [extraClassName])} fullWidth>
            <VStack align="center" gap={8}>
                <Text title={title} />
                <StarsRating size={40} onSelect={onRatingSelect} selected={starsCount} />
            </VStack>
            <BrowserView>
                <Modal isOpen={modalOpen} onClose={onModalClose} lazy>
                    {modalContent}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={modalOpen} onClose={onModalClose} lazy>
                    {modalContent}
                </Drawer>
            </MobileView>
        </Card>
    );
});
