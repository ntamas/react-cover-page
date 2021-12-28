/// <reference types="react" />

import * as React from 'react';

export interface ICoverPagePresentationProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
  loadingIndicator?: React.ReactNode;
  message?: React.ReactNode;
  title?: React.ReactNode;
  visible?: boolean;
}

export interface ICoverPageProps extends React.HTMLAttributes<HTMLDivElement> {
  errorMessage?: React.ReactNode | ((error: any) => React.ReactNode);
  finishedMessage?: React.ReactNode;
  icon?: React.ReactNode;
  loadingMessage?: React.ReactNode;
  promise: Promise<any>;
  title?: React.ReactNode;
}

export declare const CoverPage: React.SFC<ICoverPageProps>;
export declare const CoverPagePresentation: React.SFC<ICoverPagePresentationProps>;

export default CoverPage;
