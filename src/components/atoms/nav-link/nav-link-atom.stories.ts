import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';

import NavLinkAtom from './nav-link-atom';

const meta = {
    title: 'Atoms/NavLinkAtom',
    component: NavLinkAtom,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof NavLinkAtom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Home',
        href: '',
    },
};