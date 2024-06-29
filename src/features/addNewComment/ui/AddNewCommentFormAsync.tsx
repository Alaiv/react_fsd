import React, { FC } from 'react';
import { AddNewCommentFormProps } from 'features/addNewComment/ui/AddNewCommentForm';

export const AddNewCommentFormAsync = React.lazy<FC<AddNewCommentFormProps>>(() => import('./AddNewCommentForm'));
