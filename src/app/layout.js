'use client';

import Layout from '@/components/layouts/main';
import '../styles/global.css';
import { useEffect } from 'react';
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>{children}</Layout>
    </QueryClientProvider>
  )
}
