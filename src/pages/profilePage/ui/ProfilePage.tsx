import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/ui/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard, EditableProfileCardHeader } from 'features/EditableProfileCard';

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page>
            <VStack max gap={16}>
                <EditableProfileCardHeader profileId={id} />
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
