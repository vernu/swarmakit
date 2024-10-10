// Footer.stories.js
import React from 'react';
import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  year: 2024,
  companyName: 'Your Company Name',
  privacyPolicyUrl: '#privacy',
  termsOfServiceUrl: '#terms',
  contactUrl: '#contact',
};

export const Custom = Template.bind({});
Custom.args = {
  year: 202
