import DegreeImageViewer from './360-DegreeImageViewer.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Media/360-DegreeImageViewer',
  component: DegreeImageViewer,
  tags: ['autodocs'],
  argTypes: {
    imageUrls: {
      control: { type: 'array' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    isRotating: {
      control: { type: 'boolean' },
    },
    isZoomed: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: DegreeImageViewer,
  props: args,
});

const sampleImages = Array.from({ length: 36 }, (_, i) => `path/to/image_${i + 1}.jpg`);

export const Default = Template.bind({});
Default.args = {
  imageUrls: sampleImages,
  isLoading: false,
  isRotating: false,
  isZoomed: false,
};

export const Rotating = Template.bind({});
Rotating.args = {
  imageUrls: sampleImages,
  isLoading: false,
  isRotating: true,
  isZoomed: false,
};

export const Paused = Template.bind({});
Paused.args = {
  imageUrls: sampleImages,
  isLoading: false,
  isRotating: false,
  isZoomed: false,
};

export const ZoomInOut = Template.bind({});
ZoomInOut.args = {
  imageUrls: sampleImages,
  isLoading: false,
  isRotating: false,
  isZoomed: true,
};

export const Loading = Template.bind({});
Loading.args = {
  imageUrls: sampleImages,
  isLoading: true,
  isRotating: false,
  isZoomed: false,
};