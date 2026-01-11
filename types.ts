
import React from 'react';

export interface Facilitator {
  name: string;
  description?: string;
}

export interface Benefit {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export interface PriceOption {
  title: string;
  price: string;
  description: string;
  highlight: boolean;
}
