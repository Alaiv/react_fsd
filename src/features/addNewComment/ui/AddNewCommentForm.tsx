import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ConsoleInput } from 'shared/ui/input/ConsoleInput/ConsoleInput';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { DynamicReducersHandler } from 'shared/lib/components/DynamicReducersHandler';
import { Text, TextColor } from 'shared/ui/text/Text';
import { AddNewCommentReducer, AddNewCommentSliceActions } from '../model/slice/AddNewCommentSlice';
import cl from './AddNewCommentForm.module.scss';
import { getError, getText } from '../model/selectors/addNewCommentSelectors';

export interface AddNewCommentFormProps {
    extraClassName?: string;
    sendComment?: (value: string | undefined) => void;
}

const reducers = {
    addNewComment: AddNewCommentReducer,
};

const AddNewCommentForm = memo(({ extraClassName, sendComment }: AddNewCommentFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getText);
    const error = useSelector(getError);

    const changeTextHandler = useCallback((value: string) => {
        dispatch(AddNewCommentSliceActions.setText(value));
    }, [dispatch]);

    const sendCommentHandler = useCallback(() => {
        sendComment?.(text);
        dispatch(AddNewCommentSliceActions.setText(''));
    }, [sendComment, text, dispatch]);

    return (
        <DynamicReducersHandler reducers={reducers} isRemove>
            {error && <Text textColor={TextColor.ERROR} text={t('Текст отсутствует')} />}
            <div className={classNames(cl.AddNewCommentForm, {}, [extraClassName])}>
                <ConsoleInput placeholder={t('Введите текст комментария')} onChange={changeTextHandler} value={text} />
                <Button btnType={ButtonType.OUTLINE} onClick={sendCommentHandler}>
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicReducersHandler>
    );
});

export default AddNewCommentForm;
