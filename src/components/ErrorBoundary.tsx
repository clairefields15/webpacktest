import React from 'react';
import {
	ErrorBoundary as ReactErrorBoundary,
	FallbackProps,
} from 'react-error-boundary';
import { Button } from '@mui/material';
import WarningSharp from '@mui/icons-material/WarningSharp';

type ErrorBoundaryProps = {
	children: React.ReactNode;
	ErrorFallback?: React.ComponentType<FallbackProps>;
};

function ErrorDefaultFallback({ error, resetErrorBoundary }: FallbackProps) {
	return (
		<div role="alert" className="default-error-message">
			<WarningSharp sx={{ fontSize: 30, color: '#FAAD14' }} />
			<p style={{ fontWeight: 800 }}>Something went wrong</p>
			<p>{error.message}</p>
			{resetErrorBoundary && (
				<Button
					size="small"
					variant="contained"
					onClick={resetErrorBoundary}>
					Try Again
				</Button>
			)}
		</div>
	);
}

export default function ErrorBoundary({
	children,
	ErrorFallback,
}: ErrorBoundaryProps) {
	return (
		<ReactErrorBoundary
			FallbackComponent={ErrorFallback ?? ErrorDefaultFallback}>
			{children}
		</ReactErrorBoundary>
	);
}
