import React, { FC } from 'react';
import { AddNewCommentFormProps } from './AddNewCommentForm';

export const AddNewCommentFormAsync = React.lazy<FC<AddNewCommentFormProps>>(() => import('./AddNewCommentForm'));
