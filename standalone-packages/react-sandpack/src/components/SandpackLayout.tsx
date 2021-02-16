import * as React from 'react';

export interface SandpackLayoutProps {
  style?: React.CSSProperties;
}

export const SandpackLayout: React.FC<SandpackLayoutProps> = ({
  children,
  style,
}) => (
  <div className="sp-layout" style={style}>
    {children}
  </div>
);
