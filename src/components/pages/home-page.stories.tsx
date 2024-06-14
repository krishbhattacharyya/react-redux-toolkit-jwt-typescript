
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';

import HomePage from './home-page';

const meta = {
    title: 'Pages/HomePage',
    component: HomePage,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof HomePage>;

export default meta;


export const Default = () => <HomePage />

