import React, { Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Loader } from '@/shared/ui/loader/Loader';

const ArticleRatingLazy = React.lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<Loader />}>
        <ArticleRatingLazy {...props} />
    </Suspense>
);
