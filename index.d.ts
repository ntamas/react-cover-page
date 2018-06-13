/// <reference types="react" />

import * as React from 'react';

export interface ISplashScreenPresentationProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
  loadingIndicator?: React.ReactNode;
  message?: React.ReactNode;
  title?: string;
  visible?: boolean;
}

export interface ISplashScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  errorMessage?: React.ReactNode | ((error: any) => React.ReactNode);
  icon?: React.ReactNode;
  loadingMessage?: React.ReactNode;
  promise: Promise<any>;
  title?: string;
}

export declare const SplashScreen: React.SFC<ISplashScreenProps>;
export declare const SplashScreenPresentation: React.SFC<ISplashScreenPresentationProps>;

export default SplashScreen;
