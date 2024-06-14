import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';

import HomePageTemplate from './home-page-template';

const meta = {
    title: 'Templates/HomePageTemplate',
    component: HomePageTemplate,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        heading: 'Home page',
        image: 'https://via.placeholder.com/600/d32776',
        subHeading: 'Welecome to demo site',
        
    },
};

