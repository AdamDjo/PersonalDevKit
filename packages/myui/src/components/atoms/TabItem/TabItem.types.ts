import { OnEvent } from '@custom-types/common';

export type TabItemProps = {
    label: string;
    category?: string;
    onClick?: OnEvent<string>;
    isActive?: boolean;
};
